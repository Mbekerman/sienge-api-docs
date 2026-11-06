# Status de Resposta

Toda resposta da API traz um status HTTP, indicando se a requisição teve sucesso ou não.

#### Sucesso

- `200` `OK` — requisição processada com sucesso (uso geral, como em consultas e atualizações).
- `201` `Created` — recurso criado com sucesso.
- `204` `No Content` — requisição processada com sucesso, sem corpo de resposta (comum em exclusões).

#### Erro

- `400` `Bad Request` — dados inválidos ou incompletos na requisição.
- `401` `Unauthorized` — credenciais ausentes ou inválidas. Veja [Autenticação](autenticacao.md).
- `403` `Forbidden` — sem permissão para realizar a operação.
- `404` `Not Found` — recurso não encontrado.
- `415` `Unsupported Media Type` — tipo de conteúdo enviado não é suportado.
- `422` `Unprocessable Entity` — o conteúdo enviado tem um tipo aceito, mas há algum problema na estrutura dos dados.
- `429` `Too Many Requests` — limite de requisições excedido. Veja [Limites de Requisições - Rate-Limits](limites-de-requisicoes-rate-limits.md).
- `500` `Internal Server Error` / `503` `Service Unavailable` — erro temporário no servidor; tente novamente em seguida.

Toda resposta de erro segue o mesmo formato de corpo, descrito em "Tratamento de erros" na página [APIs REST](apis-rest.md).

> Alguns desses status (como `401`, `403` e `429`) não aparecem listados em cada operação da documentação de referência, mas podem ocorrer em qualquer chamada.
>
> Eles continuam declarados no arquivo OpenAPI de cada recurso, disponível para download na página do recurso — baixe-o se precisar consultar o contrato completo de respostas de uma operação.


[Fonte oficial](https://api.sienge.com.br/v1/docs/general/status-de-resposta.html)
