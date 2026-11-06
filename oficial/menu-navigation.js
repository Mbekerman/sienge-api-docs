/** Sincroniza location.hash da janela pai com o recurso no iframe, e restaura via deep link. Usa delegação de evento para links estáticos e dinâmicos. */
(function () {
  function slugFromHref(href) {
    return href.split("/").pop().split(".")[0];
  }

  document.addEventListener("click", function (event) {
    var anchor = event.target.closest && event.target.closest('a[target="content"]');
    if (!anchor) return;

    var slug = slugFromHref(anchor.getAttribute("href"));
    window.history.replaceState(slug, "", "#/" + slug);
  });

  window.addEventListener("load", function () {
    var hash = window.location.hash;
    if (!hash) return;

    var slug = hash.split("/")[1];
    if (!slug) return;

    var anchors = document.querySelectorAll('a[target="content"]');
    for (var i = 0; i < anchors.length; i++) {
      if (slugFromHref(anchors[i].getAttribute("href")) === slug) {
        anchors[i].click();
        return;
      }
    }
  });
})();
