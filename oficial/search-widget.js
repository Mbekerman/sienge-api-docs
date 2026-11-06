/** Widget de busca global (vanilla JS). Carrega search-index.json, exibe resultados com contexto módulo›recurso›seção em uma modal, e navega ao clicar. */
(function () {
  /** Prioridade: título (section) > descrição (summary) > recurso/path ("os demais itens"). */
  var FIELD_WEIGHT = {
    section: 8,
    summary: 5,
    resource: 2,
    path: 2,
  };

  function init() {
    var container = document.getElementById("search-widget");
    var trigger = document.getElementById("search-trigger");
    var modal = document.getElementById("search-modal");
    var backdrop = document.getElementById("search-modal-backdrop");
    var input = document.getElementById("search-input");
    var resultsList = document.getElementById("search-results");

    if (!container || !trigger || !modal || !backdrop || !input || !resultsList) return;

    var miniSearch = null;
    var loadError = false;

    function openModal() {
      modal.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      input.focus();
    }

    function closeModal() {
      input.value = "";
      resultsList.innerHTML = "";
      resultsList.hidden = true;
      modal.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }

    function onModalWrapperClick(event) {
      if (event.target === modal || event.target === backdrop) {
        closeModal();
      }
    }

    trigger.addEventListener("click", openModal);
    modal.addEventListener("click", onModalWrapperClick);
    input.addEventListener("input", function () {
      renderResults(input.value.trim());
    });

    fetch("./search-index.json", { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      })
      .then(function (entries) {
        var documents = entries.map(function (entry, id) {
          return Object.assign({}, entry, { id: id, parametersText: entry.parameters.join(" ") });
        });

        miniSearch = new MiniSearch({
          fields: ["path", "summary", "description", "parametersText", "module", "resource", "section"],
          storeFields: [
            "method",
            "path",
            "summary",
            "description",
            "module",
            "resource",
            "section",
            "pageUrl",
            "isWebhook",
          ],
        });
        miniSearch.addAll(documents);
      })
      .catch(function (error) {
        loadError = true;
        console.error("Falha ao carregar o índice de busca (search-index.json):", error);
      });

    function normalizeText(text) {
      return (text || "")
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
    }

    /** Nível de qualidade do match texto-vs-query usado por `titleMatchTier` — do melhor pro pior. */
    var MATCH_TIER = {
      EXACT: 4, // texto === query
      PREFIX: 3, // texto começa com a query
      QUERY_IS_PREFIX_OF_TEXT: 2.5, // query começa com o texto (texto é um prefixo mais curto)
      WHOLE_WORD: 1.5, // alguma "palavra" do texto é igual ou começa com a query
      SUBSTRING: 0.5, // query aparece em qualquer lugar do texto
      NONE: 0,
    };

    function titleMatchTier(text, query) {
      var normText = normalizeText(text);
      var normQuery = normalizeText(query);
      if (!normText || !normQuery) return MATCH_TIER.NONE;
      if (normText === normQuery) return MATCH_TIER.EXACT;
      if (normText.indexOf(normQuery) === 0) return MATCH_TIER.PREFIX;
      if (normQuery.indexOf(normText) === 0) return MATCH_TIER.QUERY_IS_PREFIX_OF_TEXT;
      var words = normText.split(/[\s/{}-]+/).filter(Boolean);
      for (var i = 0; i < words.length; i++) {
        if (words[i] === normQuery || words[i].indexOf(normQuery) === 0) return MATCH_TIER.WHOLE_WORD;
      }
      if (normText.indexOf(normQuery) !== -1) return MATCH_TIER.SUBSTRING;
      return MATCH_TIER.NONE;
    }

    /** Tier decisivo (título > descrição > demais) para desempate de resultados. */
    function tierScore(match, query) {
      var sectionTier = titleMatchTier(match.section, query);
      var summaryTier = titleMatchTier(match.summary, query);
      var resourceTier = titleMatchTier(match.resource, query);
      var pathTier = titleMatchTier(match.path, query);
      return (
        sectionTier * FIELD_WEIGHT.section +
        summaryTier * FIELD_WEIGHT.summary +
        resourceTier * FIELD_WEIGHT.resource +
        pathTier * FIELD_WEIGHT.path
      );
    }

    function escapeHtml(text) {
      var div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }

    function highlight(text, query) {
      if (!query || !text) return escapeHtml(text);
      var escaped = escapeHtml(text);
      var terms = query.split(/\s+/).filter(Boolean);
      var result = escaped;
      for (var i = 0; i < terms.length; i++) {
        var re = new RegExp("(" + terms[i].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
        result = result.replace(re, "<mark>$1</mark>");
      }
      return result;
    }

    function renderResults(query) {
      resultsList.innerHTML = "";

      if (!query) {
        resultsList.hidden = true;
        return;
      }

      modal.hidden = false;
      resultsList.hidden = false;

      if (loadError) {
        resultsList.appendChild(createMessageItem("Não foi possível carregar o índice de busca."));
        return;
      }

      if (!miniSearch) {
        resultsList.appendChild(createMessageItem("Carregando índice de busca..."));
        return;
      }

      var matches = miniSearch.search(query, {
        prefix: true,
        fuzzy: 0.2,
        boost: FIELD_WEIGHT,
      });

      matches.sort(function (a, b) {
        return tierScore(b, query) - tierScore(a, query) || b.score - a.score;
      });

      if (matches.length === 0) {
        resultsList.appendChild(createMessageItem('Nenhum resultado encontrado para "' + query + '".'));
        return;
      }

      var byResource = {};
      var resourceOrder = [];
      for (var i = 0; i < matches.length; i++) {
        var m = matches[i];
        var key = m.module ? m.module + " › " + m.resource : m.resource;
        if (!byResource[key]) {
          byResource[key] = [];
          resourceOrder.push(key);
        }
        byResource[key].push(m);
      }

      var totalShown = 0;
      var maxPerResource = 3;
      var maxTotal = 30;

      for (var r = 0; r < resourceOrder.length && totalShown < maxTotal; r++) {
        var resourceName = resourceOrder[r];
        var group = byResource[resourceName];
        var shown = group.slice(0, maxPerResource);
        var remaining = group.length - shown.length;

        var groupLi = document.createElement("li");
        groupLi.className = "search-group-header";
        groupLi.textContent = resourceName;
        resultsList.appendChild(groupLi);

        for (var j = 0; j < shown.length && totalShown < maxTotal; j++) {
          resultsList.appendChild(createResultItem(shown[j], query));
          totalShown++;
        }

        if (remaining > 0 && totalShown < maxTotal) {
          var moreLi = document.createElement("li");
          moreLi.className = "search-group-more";
          moreLi.textContent = "+" + remaining + " outros em " + resourceName.split(" › ").pop();
          resultsList.appendChild(moreLi);
        }
      }
    }

    function createMessageItem(text) {
      var li = document.createElement("li");
      li.className = "search-no-results";
      li.textContent = text;
      return li;
    }

    function getCacheBustParam() {
      var firstLink = document.querySelector('a[target="content"]');
      if (!firstLink) return "";
      var href = firstLink.getAttribute("href") || "";
      var idx = href.indexOf("?");
      return idx >= 0 ? href.substring(idx) : "";
    }

    function createResultItem(match, query) {
      var li = document.createElement("li");
      li.className = "search-result-item";
      var link = document.createElement("a");
      link.href = "./" + match.pageUrl + getCacheBustParam();
      link.target = "content";

      if (match.section) {
        var contextSpan = document.createElement("span");
        contextSpan.className = "search-result-context";
        contextSpan.innerHTML = highlight(match.section, query);
        link.appendChild(contextSpan);
      }

      var kind = match.isWebhook ? "WEBHOOK" : match.method;

      var methodSpan = document.createElement("span");
      methodSpan.className = "search-result-method search-method-" + kind.toLowerCase();
      methodSpan.textContent = kind;

      var pathSpan = document.createElement("span");
      pathSpan.className = "search-result-path";
      pathSpan.innerHTML = highlight(match.path, query);

      var titleSpan = document.createElement("span");
      titleSpan.className = "search-result-title";
      titleSpan.appendChild(methodSpan);
      titleSpan.appendChild(pathSpan);

      link.appendChild(titleSpan);

      if (match.summary) {
        var summarySpan = document.createElement("span");
        summarySpan.className = "search-result-summary";
        summarySpan.innerHTML = highlight(match.summary, query);
        link.appendChild(summarySpan);
      }

      link.addEventListener("click", function () {
        closeModal();
      });

      li.appendChild(link);
      return li;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
