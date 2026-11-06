# Webhooks

Um Webhook é uma notificação automática enviada pelo Sienge para um servidor externo sempre que um evento ocorre na plataforma. Em vez do seu sistema ficar consultando a API periodicamente para verificar se algo mudou, você registra um webhook e o Sienge avisa proativamente quando o evento acontece.

**Exemplo prático:** se você precisar ser notificado toda vez que um novo contrato de venda for criado no Sienge, basta cadastrar um webhook para o evento de criação de contrato e informar o endpoint do seu servidor que receberá a notificação.

#### O que é necessário?

Você precisa de um servidor com um endpoint que aceite requisições **POST**. Esse endpoint ficará responsável por receber e processar as notificações enviadas pelo Sienge.

#### Funcionamento

Após o cadastro de um webhook pelas APIs de gerenciamento, sempre que o evento configurado ocorrer no Sienge:

1.  O serviço de webhooks é acionado de forma instantânea.
2.  Uma requisição POST é enviada para a URL cadastrada com o payload do evento.
3.  O Sienge aguarda a resposta do servidor por até **2,5 segundos**. Se não houver resposta a tempo, o evento é encaminhado para o mecanismo de retry.

#### Retry

Caso a notificação não seja entregue (servidor offline, erro ou timeout), o Sienge tentará reenviar nos seguintes intervalos:

<div class="table-wrap">

| Tentativa | Intervalo após tentativa anterior |
|-----------|-----------------------------------|
| 1ª        | 10 minutos                        |
| 2ª        | 30 minutos                        |
| 3ª        | 60 minutos (1 hora)               |
| 4ª        | 180 minutos (3 horas)             |
| 5ª        | 300 minutos (5 horas)             |

</div>

Após a quinta tentativa, o Sienge considera a notificação como não entregue e encerra as tentativas. O tempo total percorrido até esse ponto é de aproximadamente **10 horas**.

#### Headers enviados nas notificações

Cada notificação de webhook inclui os seguintes headers para identificação:

<div class="table-wrap">

| Header             | Descrição                                                                  |
|--------------------|----------------------------------------------------------------------------|
| `x-sienge-tenant`  | Subdomínio do Sienge que originou o evento                                 |
| `x-sienge-event`   | Tipo do evento que disparou a notificação                                  |
| `x-sienge-hook-id` | Identificador do cadastro do webhook na base do Sienge                     |
| `x-sienge-id`      | Identificador único do evento — pode ser usado para operações idempotentes |
| `user-agent`       | Sempre será `sienge-hooks`                                                 |

</div>


[Fonte oficial](https://api.sienge.com.br/v1/docs/general/webhooks.html)
