"""Preserva os recursos da interface para leitura em servidor HTTP local."""
import re
import sys
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urljoin, urlsplit
from baixar import BASE, RAW, fetch, parse

def main():
    urls = {urljoin(BASE, 'search-index.json')}
    for page in RAW.rglob("*.html"):
        origin = urljoin(BASE,page.relative_to(RAW).as_posix())
        for href in parse(page).xpath('//link/@href | //script/@src | //img/@src'):
            target = urljoin(origin,href)
            if target.startswith(BASE):
                urls.add(target)
    with ThreadPoolExecutor(max_workers=6) as pool:
        list(pool.map(fetch,sorted(urls)))
    dependencies = set()
    for css in RAW.rglob("*.css"):
        origin = urljoin(BASE,css.relative_to(RAW).as_posix())
        for ref in re.findall(r"url\(\s*['\"]?([^)'\"]+)",css.read_text()):
            target = urljoin(origin,ref)
            if target.startswith(BASE) and not ref.startswith("#"):
                dependencies.add(target)
    with ThreadPoolExecutor(max_workers=6) as pool:
        list(pool.map(fetch,sorted(dependencies - urls)))

if __name__ == "__main__":
    main()
