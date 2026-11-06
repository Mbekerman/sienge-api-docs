"""Baixa o conteúdo técnico publicado no menu oficial e suas dependências."""
import json
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

from lxml import html
import yaml

BASE = "https://api.sienge.com.br/v1/docs/"
ROOT = Path(sys.argv[1])
RAW = ROOT / "oficial"


def local_path(url):
    full = urlsplit(url)
    base = urlsplit(BASE)
    if full.netloc != base.netloc or not full.path.startswith(base.path):
        raise ValueError(f"Recurso fora do portal: {url}")
    rel = unquote(full.path[len(base.path):]) or "index.html"
    if ".." in Path(rel).parts or Path(rel).is_absolute():
        raise ValueError(rel)
    return RAW / rel


def fetch(url):
    dest = local_path(url)
    dest.parent.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(["curl", "--fail", "--silent", "--show-error", "--location",
                             "--retry", "3", "--max-time", "60", url], check=True, capture_output=True)
    dest.write_bytes(result.stdout)
    return dest


def parse(path):
    return html.fromstring(path.read_text(encoding="utf-8-sig"))


def menu_entries(index):
    entries = []
    for a in parse(index).xpath('//nav//a[@target="content"]'):
        group = a.xpath('preceding::h4[1]')[0].text_content().strip()
        entries.append(dict(group=group, title=a.text_content().strip(), url=urljoin(BASE,a.get("href"))))
    if not entries:
        raise ValueError("Menu vazio")
    return entries


def download_entry(entry):
    url = entry["url"]
    page = fetch(url)
    entry["page"] = page.relative_to(ROOT).as_posix()
    if page.parent.name == "html-files":
        source, = parse(page).xpath('//a[@download]/@href')
        url_spec = urljoin(url, source)
        spec = fetch(url_spec)
        entry.update(spec=spec.relative_to(ROOT).as_posix(), source=url_spec)
    return entry


def references(node):
    if isinstance(node, dict):
        for key, value in node.items():
            if key == "$ref" and isinstance(value,str) and not value.startswith("#"):
                yield value
            yield from references(value)
    elif isinstance(node, list):
        for item in node:
            yield from references(item)


def main():
    index = fetch(BASE)
    entries = menu_entries(index)
    with ThreadPoolExecutor(max_workers=8) as pool:
        entries = list(pool.map(download_entry, entries))
    entries = complete_from_indexes(entries)
    finish(entries)


def complete_from_indexes(entries):
    search = json.loads(fetch(urljoin(BASE, "search-index.json")).read_bytes())
    known = {e["page"] for e in entries}
    extras = {}
    for record in search:
        path = record["pageUrl"]
        if "oficial/" + path not in known:
            extras[path] = dict(group=record["module"], title=record["resource"], url=urljoin(BASE, path))
    hook_index = next(e for e in entries if e["page"].endswith("/webhooks-index.html"))
    for link in parse(ROOT / hook_index["page"]).xpath("//a[@target='content']"):
        url = urljoin(BASE,link.get("href")).split("#")[0]
        page = local_path(url)
        path = str(page.relative_to(RAW))
        if str(page.relative_to(ROOT)) not in known and path not in extras:
            extras[path] = dict(group="Webhooks",title=link.xpath("preceding::h4[1]")[0].text_content(),url=url)
    with ThreadPoolExecutor(max_workers=6) as pool:
        return entries + list(pool.map(download_entry,extras.values()))


def finish(entries):
    known = {local_path(e["source"]) for e in entries if "spec" in e}
    pending = [e["source"] for e in entries if "spec" in e]
    while pending:
        url = pending.pop()
        data = yaml.safe_load(local_path(url).read_bytes())
        for ref in references(data):
            target = urljoin(url, ref).split("#")[0]
            if local_path(target) not in known:
                known.add(fetch(target))
                pending.append(target)
    (ROOT / "fontes.json").write_text(json.dumps(entries, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")


if __name__ == "__main__":
    main()
