// Plugins e inicialização do Swagger UI usados nas páginas de recurso
function CustomDownloadPlugin() {
  return {
    wrapComponents: {
      DownloadUrl: () => () => null,
      InfoUrl: () => () => null,
    },
  };
}

// Esconde da UI as responses de erro com status >= 405 e também 401/403.
function FilterHighStatusResponsesPlugin() {
  const MIN_HIDDEN_STATUS = 405;
  const HIDDEN_STATUS_CODES = [401, 403];
  return {
    wrapComponents: {
      responses: (Original, system) => props => {
        const responses = props.responses;
        const filtered = responses
          ? responses.filter((_response, code) => {
              if (code === "default") return true;
              const status = parseInt(code, 10);
              if (Number.isNaN(status)) return true;
              if (HIDDEN_STATUS_CODES.includes(status)) return false;
              return status < MIN_HIDDEN_STATUS;
            })
          : responses;
        return system.React.createElement(Original, Object.assign({}, props, { responses: filtered }));
      },
    },
  };
}

// Instancia o Swagger UI de uma página de recurso.
window.initResourceSwaggerUI = function initResourceSwaggerUI(specUrl) {
  window.ui = SwaggerUIBundle({
    url: specUrl,
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis],
    plugins: [CustomDownloadPlugin, FilterHighStatusResponsesPlugin],
    layout: "BaseLayout",
    validatorUrl: null,
  });
};
