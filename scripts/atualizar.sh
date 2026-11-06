#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
stage=$(mktemp -d)
trap 'rm -rf "$stage"' EXIT
python3 scripts/baixar.py "$stage"
python3 scripts/recursos.py "$stage"
python3 scripts/catalogar.py "$stage"
for name in oficial guias INDICE.md OPERACOES.md COBERTURA.md fontes.json SHA256SUMS; do
  rm -rf -- "$name"
  mv -- "$stage/$name" "$name"
done
cat COBERTURA.md
