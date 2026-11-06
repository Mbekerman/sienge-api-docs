# APIs Bulk Data

As APIs Bulk Data são ofertadas em todos os pacotes de API, com cotas diárias mais atrativas nos pacotes **Ultimate** e **Infinity** (veja [Pacotes de APIs](pacotes-de-apis.md)). Seu objetivo é a **extração de dados em massa** do Sienge, de forma contínua e sem paginação, e têm um funcionamento diferente das APIs REST convencionais.

Devido ao volume de dados envolvido e visando a segurança da infraestrutura, as APIs Bulk Data possuem um limite de **20 requisições por minuto**.

Por esse motivo, recomenda-se analisar com atenção os filtros da requisição para garantir que todos os dados necessários sejam obtidos logo na primeira chamada.

#### Requisição Síncrona

Na requisição síncrona, todos os dados são retornados imediatamente em stream no formato JSON assim que a requisição é processada.

    GET https://api.sienge.com.br/{subdominio}/public/api/bulk-data/v1/customer-extract-history?startDueDate=2019-01-01&endDueDate=2019-01-02

Formato da resposta:

``` json
{ "data": [ {...}, {...} ] }
```

#### Requisição Assíncrona

Ao passar o parâmetro `_async=true`, a requisição é processada em segundo plano. A resposta imediata retorna apenas um **identificador** para acompanhar o andamento.

Parâmetros opcionais para requisições assíncronas:

- `_asyncChunkMaxSize` — tamanho máximo de cada chunk em kilobytes. Se não informado, o resultado é retornado em um único chunk.
- `_asyncWebHookUrl` — URL para notificação via webhook quando o processamento for concluído.
- `_asyncWebHookToken` — token enviado junto à notificação webhook.

<!-- -->

    GET https://api.sienge.com.br/{subdominio}/public/api/bulk-data/v1/customer-extract-history?_async=true&_asyncChunkMaxSize=4096&startDueDate=2019-01-01&endDueDate=2019-01-02

Formato da resposta:

``` json
{ "identifier": "oq21gl467hj69na77nbugmee" }
```

#### Consultando o status de uma requisição assíncrona

    GET https://api.sienge.com.br/{subdominio}/public/api/bulk-data/v1/async/{identifier}

Possíveis respostas:

``` json
{ "status": "Waiting" }
{ "status": "Processing" }
{ "status": "Finished", "chunks": 5 }
{ "status": "Failed", "error": "..." }
```

#### Obtendo o resultado de uma requisição assíncrona

Após o status `Finished`, obtenha cada chunk individualmente. Se o total de chunks for 5, chame o endpoint 5 vezes passando os valores de 1 a 5.

    GET https://api.sienge.com.br/{subdominio}/public/api/bulk-data/v1/async/{identifier}/result/{chunk}

Formato da resposta:

``` json
{ "data": [ {...}, {...} ] }
```

> Os resultados ficam disponíveis por **24 horas** após o processamento. Após esse período, o identificador expira.


[Fonte oficial](https://api.sienge.com.br/v1/docs/general/apis-bulk-data.html)
