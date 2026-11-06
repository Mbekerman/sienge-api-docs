# Limites de Requisições - Rate-Limits

Para garantir a estabilidade e a segurança da plataforma, as APIs do Sienge Plataforma possuem dois tipos de limites de requisições: um limite por **segurança** (por minuto) e um limite por **pacote contratado** (por dia).

#### Limites de Segurança

O limite de segurança é aplicado por cliente (subdomínio) e controla o volume total de requisições por minuto, independentemente de quantos usuários ou sistemas estejam fazendo chamadas simultaneamente.

Ao atingir esse limite, a API retornará o status `429 Too Many Requests` até que a janela de tempo seja renovada.

<div class="table-wrap">

| Tipo | Limite       |
|------|--------------|
| REST | 200 / minuto |
| BULK | 20 / minuto  |

</div>

#### Limites por Pacotes de API

Além do limite por minuto, cada pacote contratado define um número máximo de requisições por dia. Os pacotes marcados com `*` possuem **bloqueio**: ao atingir a cota diária, as requisições serão recusadas com `429 Too Many Requests` até a renovação no dia seguinte.


[Fonte oficial](https://api.sienge.com.br/v1/docs/general/limites-de-requisicoes-rate-limits.html)
