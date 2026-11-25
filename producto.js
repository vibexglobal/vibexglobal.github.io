"use strict";

/* ==================================================
   VIBEX GLOBAL — PÁGINA DE PRODUCTO
   Sirve para TODAS las páginas de perfume.
   Toma el producto desde <body data-product-id="..."> y usa
   script.js (bolsa, precios y WhatsApp). Va DESPUÉS de script.js.
   ================================================== */

(function () {
  function $(s) { return document.querySelector(s); }
  function $$(s) { return [].slice.call(document.querySelectorAll(s)); }
  function safe(name, fn) {
    try { fn(); } catch (e) { console.error("[Vibex] " + name + ":", e); }
  }

  var productId = Number(document.body.getAttribute("data-product-id"));
  var qty = 1;

  function getProduct() {
    return typeof products !== "undefined"
      ? products.filter(function (p) { return p.id === productId; })[0]
      : null;
  }

  function paint() {
    var q = $("#ppQty");
    if (q) q.textContent = String(qty);
    var p = getProduct();
    var total = $("#ppAddTotal");
    if (total && p && typeof money === "function") {
      total.textContent = money(p.price * qty);
    }
  }

  /* ========== COMPRA: +, −, añadir, WhatsApp ========== */
  safe("compra", function () {
    var minus = $("#ppMinus"), plus = $("#ppPlus"), add = $("#ppAdd"), ask = $("#ppAsk");

    if (minus) minus.addEventListener("click", function () {
      qty = Math.max(1, qty - 1); paint();
    });

    if (plus) plus.addEventListener("click", function () {
      qty = Math.min(99, qty + 1); paint();
    });

    if (add) add.addEventListener("click", function () {
      var p = getProduct();
      if (!p || typeof addToCart !== "function") {
        console.error("[Vibex] No se encontró el producto o script.js no cargó.");
        return;
      }
      addToCart(p.id, qty);
      qty = 1; paint();
    });

    if (ask) ask.addEventListener("click", function () {
      var p = getProduct();
      if (!p || typeof consultProduct !== "function") {
        console.error("[Vibex] No se encontró el producto o script.js no cargó.");
        return;
      }
      consultProduct(p, qty);
    });

    paint();
  });

  /* ========== GALERÍA: miniaturas ========== */
  safe("galeria", function () {
    var main = $("#ppMainImage");
    var holder = $("#ppMainPlaceholder");
    var zoom = $("#ppZoom");

    function showMain(src, alt) {
      if (!main || !holder) return;
      if (src) {
        main.src = src;
        main.alt = alt || "";
        main.hidden = false;
        holder.hidden = true;
        if (zoom) zoom.hidden = false;
      } else {
        main.hidden = true;
        holder.hidden = false;
        if (zoom) zoom.hidden = true;
      }
    }

    $$(".pp-thumb").forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        var src = thumb.getAttribute("data-src");
        if (!src) return;
        $$(".pp-thumb").forEach(function (o) { o.classList.toggle("active", o === thumb); });
        showMain(src, thumb.getAttribute("data-alt"));
      });
    });

    /* Si una miniatura no encuentra su foto, se oculta */
    $$(".pp-thumb img").forEach(function (img) {
      function hideThumb() {
        var b = img.parentNode;
        if (b) b.style.display = "none";
      }
      if (img.complete && img.naturalWidth === 0) hideThumb();
      img.addEventListener("error", hideThumb);
    });

    if (main) main.addEventListener("error", function () { showMain("", ""); });
  });

  /* ========== VENTANAS EMERGENTES: garantía y foto ampliada ========== */
  safe("ventanas", function () {
    var modal = $("#warrantyModal");
    var box = $("#ppLightbox");
    if (!modal || !box) return;

    function css(el, styles) {
      if (!el) return;
      Object.keys(styles).forEach(function (prop) {
        el.style.setProperty(prop, styles[prop], "important");
      });
    }

    function layout(el, isPhoto) {
      css(el, {
        position: "fixed", top: "0", right: "0", bottom: "0", left: "0",
        width: "100%", height: "100%", margin: "0", border: "0",
        padding: "20px", "box-sizing": "border-box", overflow: "hidden",
        background: "transparent", display: "flex",
        "align-items": "center", "justify-content": "center",
        visibility: "visible", opacity: "1", "pointer-events": "auto",
        transform: "none", "z-index": "2147483000"
      });

      css(el.querySelector(".pp-modal-backdrop"), {
        position: "absolute", top: "0", right: "0", bottom: "0", left: "0",
        width: "100%", height: "100%", padding: "0", border: "0",
        background: isPhoto ? "rgba(12,15,12,.88)" : "rgba(12,15,12,.45)",
        "-webkit-backdrop-filter": "blur(8px)", "backdrop-filter": "blur(8px)",
        cursor: "pointer"
      });

      var panel = el.querySelector(".pp-modal-panel");
      if (panel) {
        css(panel, {
          position: "relative", "z-index": "1",
          width: "min(680px, 100%)", "max-height": "min(78vh, 720px)",
          display: "flex", "flex-direction": "column", overflow: "hidden",
          padding: "0", background: "#faf8f3",
          "box-shadow": "0 24px 70px rgba(0,0,0,.35)", transform: "none"
        });
        css(panel.querySelector(".pp-terms-head"), { flex: "0 0 auto" });
        css(panel.querySelector(".pp-terms-body"), {
          flex: "1 1 auto", "min-height": "0",
          "overflow-y": "auto", "overscroll-behavior": "contain"
        });
        css(panel.querySelector(".pp-terms-foot"), { flex: "0 0 auto" });
      }

      css(el.querySelector(".pp-modal-close"), {
        position: isPhoto ? "fixed" : "absolute",
        top: "14px", right: "18px", "z-index": "5"
      });

      css(el.querySelector("img"), {
        position: "relative", "z-index": "1",
        "max-width": "min(94vw, 900px)", "max-height": "92vh",
        "object-fit": "contain"
      });
    }

    function show(el, isPhoto) {
      layout(el, isPhoto);
      if (el.showPopover) {
        if (!el.hasAttribute("popover")) el.setAttribute("popover", "manual");
        try { if (!el.matches(":popover-open")) el.showPopover(); } catch (e) {}
      }
      document.body.style.overflow = "hidden";
    }

    function hide(el) {
      if (el.hidePopover) {
        try { if (el.matches(":popover-open")) el.hidePopover(); } catch (e) {}
      }
      css(el, { display: "none" });
      document.body.style.overflow = "";
    }

    var open = $("#warrantyOpen");
    if (open) open.addEventListener("click", function () { show(modal, false); });

    var zoom = $("#ppZoom");
    if (zoom) zoom.addEventListener("click", function () {
      var main = $("#ppMainImage");
      var big = $("#ppLightboxImage");
      if (main && big) { big.src = main.src; big.alt = main.alt; }
      show(box, true);
    });

    $$("#warrantyModal [data-close-modal]").forEach(function (b) {
      b.addEventListener("click", function () { hide(modal); });
    });
    $$("#ppLightbox [data-close-modal]").forEach(function (b) {
      b.addEventListener("click", function () { hide(box); });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { hide(modal); hide(box); }
    });
  });
})();