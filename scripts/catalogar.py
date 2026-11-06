"""Converte os guias, indexa operações e confere a cobertura do menu e da busca."""
import hashlib
import json
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlsplit

from lxml import html
import yaml

ROOT = Path(sys.argv[1])
RAW = ROOT / "oficial"
GUIDES = ROOT / "guias"
METHODS = "get post put patch delete options head trace".split()


def guide(entry):
    page = ROOT / entry["page"]
    result = subprocess.check_output(["pandoc", "-f", "html", "-t", "gfm", "--wrap=none", str(page)], text=True)
    if page.parent.name == "general":
        result = re.sub(r"\]\(\./([^()/]+)\.html\)", r"](\1.md)", result)
    else:
        result = result.replace("](./html-files/", "](../oficial/html-files/")
    dest = GUIDES / (page.stem + ".md")
    dest.write_text(result + "\n\n[Fonte oficial](" + entry["url"].split("?")[0] + ")\n", encoding="utf-8")
    return dest.relative_to(ROOT)


def main():
    entries = json.loads((ROOT / "fontes.json").read_text())
    menu = html.fromstring((RAW / "index.html").read_text()).xpath('//nav//a[@target="content"]')
    expected = {urlsplit(a.get("href")).path.removeprefix("./") for a in menu}
    actual = {str(Path(e["page"]).relative_to("oficial")) for e in entries}
    assert expected <= actual and len(actual) == len(entries)
    search = json.loads((RAW / "search-index.json").read_bytes())
    official_search = {(r["pageUrl"], r["method"].lower(), r["path"], r["isWebhook"]) for r in search}
    GUIDES.mkdir(exist_ok=True)
    catalog = ["# Índice da documentação do Sienge", "", "Localize o assunto, depois abra o guia ou a especificação da API. O [índice de operações](OPERACOES.md) permite buscar por rota, método ou evento.", ""]
    ops = ["# Operações e webhooks", "", "Os grupos seguem as especificações oficiais. Cada módulo traz o link para os parâmetros, esquemas e exemplos.", ""]
    group = None
    discovered = set()
    modules = 0
    for e in entries:
        if group != e["group"]:
            group = e["group"]
            catalog += ["", "## " + group, ""]
        if "spec" not in e:
            path = guide(e)
            catalog += [f"- [{e['title']}]({path})"]
            continue
        modules += 1
        spec = yaml.safe_load((ROOT / e["spec"]).read_bytes())
        assert spec.get("openapi") or spec.get("swagger"), e
        catalog += [f"- [{e['title']}]({e['spec']})"]
        ops += ["", f"## {e['title']}", "", f"[Especificação oficial]({e['spec']})", ""]
        for key in ["paths", "webhooks"]:
            for path, methods in (spec.get(key) or {}).items():
                for method, op in methods.items():
                    if method not in METHODS:
                        continue
                    webhook = key == "webhooks"
                    discovered.add((str(Path(e["page"]).relative_to("oficial")),method,path,webhook))
                    label = "Webhook" if webhook else method.upper()
                    summary = " ".join((op.get("summary") or "").split())
                    ops.append(f"- **{label}** `{path}` — {summary}")
    missing = official_search - discovered
    assert not missing, f"Operações da busca ausentes: {missing}"
    for name, lines in [("INDICE.md",catalog),("OPERACOES.md",ops)]:
        (ROOT / name).write_text("\n".join(lines)+"\n")
    count = sum(not record[3] for record in discovered)
    totals = [f"- {len(menu)} páginas no menu oficial", f"- {len(actual)-len(expected)} páginas adicionais encontradas nos índices de busca e de webhooks", f"- {modules} especificações de API",
              f"- {count} operações HTTP nas especificações", f"- {len(discovered)-count} entradas de webhook nas especificações",
              f"- {len(search)} registros conferidos no índice de busca oficial"]
    (ROOT / "COBERTURA.md").write_text("# Cobertura da coleta\n\n"+"\n".join(totals)+"\n")
    checks = [f"{hashlib.sha256(f.read_bytes()).hexdigest()}  {f.relative_to(ROOT).as_posix()}"
              for f in sorted(RAW.rglob("*")) if f.is_file()]
    (ROOT / "SHA256SUMS").write_text("\n".join(checks)+"\n")

if __name__ == "__main__":
    main()
