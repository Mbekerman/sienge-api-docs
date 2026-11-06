# Como consultar a API do Sienge

1. Para montar uma chamada, comece por [URL e Requisições](guias/url-e-requisicoes.md) e [Autenticação](guias/autenticacao.md). Identifique se o recurso é REST ou Bulk Data e use a URL base correspondente. Mantenha subdomínio e credenciais em variáveis nos exemplos.
2. Encontre o recurso em [INDICE.md](INDICE.md) e o método em [OPERACOES.md](OPERACOES.md). Abra o YAML oficial em `oficial/yaml-files/` e siga as referências `$ref` para conferir parâmetros de rota e consulta, corpo, campos obrigatórios, enums, respostas e exemplos.
3. Cite o arquivo, o método e a rota que sustentam a resposta. Diferencie requisitos documentados, exemplos e inferências. Quando a especificação omitir um comportamento, deixe a lacuna explícita.
4. Confira [limites](guias/limites-de-requisicoes-rate-limits.md), [pacotes](guias/pacotes-de-apis.md) e [status HTTP](guias/status-de-resposta.md) quando forem relevantes. Use paginação e filtros conforme cada operação.
5. Para notificações, consulte o [guia](guias/webhooks.md), o [índice de eventos](guias/webhooks-index.md) e a seção `webhooks` da especificação. Distinga eventos enviados pelo Sienge de chamadas feitas pelo cliente.
6. Para processos de negócio que cruzam módulos, confira cada operação separadamente. Por exemplo, criar uma nota de compra, cadastrar um título e consultar parcelas são operações distintas. Informe quais passos têm cobertura documentada.
