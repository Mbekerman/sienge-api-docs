# Autenticação

As APIs do Sienge Plataforma utilizam **[Basic Authentication](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Authorization)** — um padrão amplamente utilizado em APIs HTTP. As credenciais são as mesmas cadastradas no **Painel de Integrações da Plataforma**.

Se você não tem acesso ao Painel de Integrações, entre em contato com o Administrador da sua conta Sienge Plataforma.

#### Como montar o header de autenticação

A autenticação é enviada no header `Authorization` de cada requisição. O valor deve ser construído da seguinte forma:

1.  Combine o usuário e a senha separados por dois pontos: `usuario-api:senha`
2.  Codifique o resultado em **Base64**: `dXN1YXJpby1hcGk6c2VuaGE=`
3.  Informe no header com o prefixo `Basic`:

<!-- -->

    Authorization: Basic dXN1YXJpby1hcGk6c2VuaGE=

Para gerar o valor Base64 no terminal:

``` bash
echo -n 'usuario-api:senha' | base64
```


[Fonte oficial](https://api.sienge.com.br/v1/docs/general/autenticacao.html)
