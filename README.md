# API do Sienge · documentação para consulta

Cópia da documentação pública do [portal Sienge v1](https://api.sienge.com.br/v1/docs/), organizada para consulta no Claude. A coleta inicial é de **6 de novembro de 2026**. Os arquivos em `oficial/` preservam os bytes publicados pelo Sienge. Os índices e as versões em Markdown são derivados desses arquivos.

## Comece pela Introdução

| Guia | O que consultar |
|---|---|
| [Introdução](guias/introducao.md) | Escopo da documentação |
| [URL e Requisições](guias/url-e-requisicoes.md) | Subdomínio, versão, URL base de REST e de Bulk Data |
| [Autenticação](guias/autenticacao.md) | Como autenticar uma chamada |
| [Limites de Requisições](guias/limites-de-requisicoes-rate-limits.md) | Limites e respostas quando são atingidos |
| [Pacotes de APIs](guias/pacotes-de-apis.md) | Volumes por pacote |
| [APIs REST](guias/apis-rest.md) | Convenções de uso |
| [Status de Resposta](guias/status-de-resposta.md) | Interpretação dos códigos HTTP |
| [APIs Bulk Data](guias/apis-bulk-data.md) | Consultas em lote |
| [Webhooks](guias/webhooks.md) | Notificações de eventos |

## Encontre um recurso

- [Índice por área e módulo](INDICE.md)
- [Operações por método e caminho](OPERACOES.md)
- [Eventos de webhook e exemplos de payload](guias/webhooks-index.md)
- [Especificações oficiais em YAML](oficial/yaml-files/)
- [Cobertura verificada](COBERTURA.md), [URLs de origem](fontes.json) e [assinaturas SHA-256 dos arquivos oficiais](SHA256SUMS)

Para trabalhar com notas de compra, comece por [Nota Fiscal de Compra](oficial/yaml-files/purchase-invoices-v1.yaml), [Pedidos de Compra](oficial/yaml-files/purchase-orders-v1.yaml), [Credores](oficial/yaml-files/creditor-v1.yaml) e [Títulos do Contas a Pagar](oficial/yaml-files/bill-debt-v1.yaml).

## Usar no Claude

Em um Projeto do Claude, abra **Conhecimento → + → GitHub** e selecione este repositório. Inclua `CLAUDE.md`, `INDICE.md`, `OPERACOES.md`, a pasta `guias/` e `oficial/yaml-files/`. Copie o conteúdo de [CLAUDE.md](CLAUDE.md) para as instruções do projeto se quiser aplicar as regras a todas as conversas. Depois de uma nova coleta, sincronize os arquivos no projeto.

No Claude Code, abra o repositório e consulte os mesmos arquivos diretamente. Para navegar na interface original, execute `python -m http.server 8000 --bind 127.0.0.1 --directory oficial` na raiz e abra `http://localhost:8000`.

## Atualizar a documentação

Em Linux ou macOS, com Python 3, PyYAML, lxml, curl e Pandoc instalados, execute:

```sh
bash scripts/atualizar.sh
git diff --stat
```

A rotina baixa uma nova cópia em pasta temporária, segue o menu, os índices e as referências externas dos YAMLs, refaz o catálogo e verifica se todas as operações da busca oficial aparecem nas especificações. Revise o diff e faça o commit para publicar a atualização. Execute a rotina uma vez por vez.
