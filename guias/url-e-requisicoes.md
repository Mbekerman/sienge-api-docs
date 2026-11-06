# URL e Requisições

Para consumir as APIs do Sienge Plataforma, cada requisição precisa ser direcionada à URL correta, que é composta pelo **subdomínio do seu cliente Sienge** mais o caminho do recurso desejado.

O subdomínio identifica qual ambiente Sienge receberá a requisição — ele é o mesmo prefixo usado no acesso ao sistema web. Por exemplo, se sua empresa acessa o Sienge em `minhaempresa.sienge.com.br`, o subdomínio é `minhaempresa`.

O padrão geral da URL é:

    https://api.sienge.com.br/{subdominio-do-cliente}/public/api/{versão-da-api}/{recurso}

**Exemplo com valores reais:**

- **Subdomínio do Cliente**: `minhaempresa`
- **Versão da API**: `v1`
- **Recurso**: `examples`

**URL Final**: `https://api.sienge.com.br/minhaempresa/public/api/v1/examples`

> As APIs **Bulk Data** utilizam um caminho diferente, com o prefixo `bulk-data`:
>
> `https://api.sienge.com.br/minhaempresa/public/api/bulk-data/v1/examples`

Utilize sempre HTTPS para garantir a segurança das informações transmitidas.


[Fonte oficial](https://api.sienge.com.br/v1/docs/general/url-e-requisicoes.html)
