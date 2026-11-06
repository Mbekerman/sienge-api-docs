# APIs REST

As APIs REST têm por finalidade o consumo de recursos de forma estruturada, seguindo os métodos HTTP convencionais (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) e com retornos simples ou paginados.

#### Paginação

Endpoints de listagem aceitam os parâmetros de query `limit` e `offset` para controlar a página retornada:

<div class="table-wrap">

| Parâmetro | Padrão | Máximo | Descrição                                             |
|-----------|--------|--------|-------------------------------------------------------|
| `limit`   | 100    | 200    | Quantidade máxima de resultados retornados na página. |
| `offset`  | 0      | —      | Deslocamento a partir do começo da lista.             |

</div>

A resposta de um endpoint paginado traz os resultados junto com os metadados da paginação:

``` json
{
  "resultSetMetadata": {
    "count": 200,
    "offset": 0,
    "limit": 100
  },
  "results": [ {...}, {...} ]
}
```

`count` é o total de resultados disponíveis para a pesquisa efetuada (não apenas os retornados na página atual) — use-o para saber quando parar de paginar.

#### Tratamento de erros

Em caso de erro, a API retorna o status HTTP apropriado com um corpo de erro padronizado:

``` json
{
  "status": 400,
  "developerMessage": "Você deve informar o query param xpto",
  "clientMessage": "Parâmetro obrigatório xpto ausente",
  "errors": [
    { "field": "xpto", "message": "não pode ser nulo" }
  ]
}
```

`developerMessage` é destinada à análise técnica; `clientMessage` é adequada para exibição direta ao usuário final.


[Fonte oficial](https://api.sienge.com.br/v1/docs/general/apis-rest.html)
