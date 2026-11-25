"use strict";

/* ==================================================
   VIBEX GLOBAL — PIEZAS COMUNES DE LA PÁGINA DE PRODUCTO
   Va ANTES de script.js en cada página de producto.

   Qué hace (para que cada página solo lleve SU información):
   1. Añade la ventana de garantía, el visor de fotos, la bolsa lateral
      y el aviso temporal.
   2. Pone el precio con su descuento automático (el precio y el precio
      anterior salen de script.js; aquí no se escribe ningún precio).
   3. Mantiene el dato estructurado de Google con el mismo precio.
   ================================================== */

(function () {
  var WA = "593984692292";

  /* ---------- 1. PIEZAS COMUNES ---------- */

  var warrantyHTML =
    '<div class="pp-modal" id="warrantyModal" aria-hidden="true" style="display:none !important">' +
      '<button class="pp-modal-backdrop" type="button" data-close-modal aria-label="Cerrar garantía"></button>' +
      '<div class="pp-modal-panel pp-terms-panel" role="dialog" aria-modal="true" aria-labelledby="warrantyTitle">' +
        '<button class="pp-modal-close" type="button" data-close-modal aria-label="Cerrar">×</button>' +
        '<header class="pp-terms-head">' +
          '<p class="pp-eyebrow"><span data-only="es">GARANTÍA VIBEX</span><span data-only="en">VIBEX WARRANTY</span></p>' +
          '<h2 id="warrantyTitle"><span data-only="es">Garantía de tu perfume</span><span data-only="en">Your fragrance warranty</span></h2>' +
        '</header>' +
        '<div class="pp-terms-body">' +

          /* ================= ESPAÑOL ================= */
          '<div class="pp-terms" data-only="es">' +
            '<h3>1. Qué cubre</h3>' +
            '<p>Todos los perfumes de VIBEX GLOBAL son originales e importados. Esta garantía cubre: (a) la autenticidad del producto, (b) daños ocurridos durante el transporte, (c) productos incompletos y (d) defectos de fábrica, como un atomizador que no funciona o un frasco con fuga.</p>' +
            '<h3>2. Al recibir tu pedido</h3>' +
            '<p>Revisa el empaque en el momento de la entrega. Si ves golpes, roturas o señales de apertura, avísanos dentro de las primeras 12 horas con fotos o un video.</p>' +
            '<h3>3. Plazo para reportar un defecto</h3>' +
            '<p>Si el atomizador o el frasco presentan un defecto de fábrica, escríbenos dentro de las 48 horas siguientes a la entrega.</p>' +
            '<h3>4. Cómo reclamar</h3>' +
            '<ul>' +
              '<li>Escríbenos por WhatsApp al +593 98 469 2292 o a contact.vibexglobal@gmail.com.</li>' +
              '<li>Indica tu número de pedido y adjunta fotos o un video donde se vea el problema.</li>' +
              '<li>Conserva el empaque y el producto sin usar más de lo necesario para comprobar el reclamo.</li>' +
            '</ul>' +
            '<h3>5. Qué no cubre</h3>' +
            '<ul>' +
              '<li>La preferencia personal sobre el aroma, o que la duración y proyección varíen según la piel y el clima.</li>' +
              '<li>Perfumes abiertos, probados o usados, por razones de higiene.</li>' +
              '<li>Golpes, caídas o mal almacenamiento (calor, humedad o luz directa) después de la entrega.</li>' +
              '<li>Frascos abiertos, reparados o manipulados por terceros.</li>' +
            '</ul>' +
            '<h3>6. Solución</h3>' +
            '<p>Si el reclamo procede, lo resolvemos en un plazo máximo de 5 días hábiles con un producto idéntico o, si no hay existencias, con una nota de crédito por el valor pagado. Si el defecto es nuestro, nosotros asumimos el costo del envío de la reposición.</p>' +
            '<h3>7. Ley aplicable</h3>' +
            '<p>Esta política se rige por la legislación vigente de la República del Ecuador.</p>' +
          '</div>' +

          /* ================= ENGLISH ================= */
          '<div class="pp-terms" data-only="en">' +
            '<h3>1. What is covered</h3>' +
            '<p>All VIBEX GLOBAL fragrances are original and imported. This warranty covers: (a) the authenticity of the product, (b) damage during transport, (c) incomplete orders and (d) factory defects, such as a sprayer that does not work or a leaking bottle.</p>' +
            '<h3>2. When you receive your order</h3>' +
            '<p>Check the packaging at the time of delivery. If you see dents, breakage or signs of opening, let us know within the first 12 hours with photos or a video.</p>' +
            '<h3>3. Deadline to report a defect</h3>' +
            '<p>If the sprayer or the bottle has a factory defect, write to us within 48 hours of delivery.</p>' +
            '<h3>4. How to make a claim</h3>' +
            '<ul>' +
              '<li>Write to us on WhatsApp at +593 98 469 2292 or at contact.vibexglobal@gmail.com.</li>' +
              '<li>Include your order number and attach photos or a video showing the problem.</li>' +
              '<li>Keep the packaging and avoid using the product more than necessary to verify the claim.</li>' +
            '</ul>' +
            '<h3>5. What is not covered</h3>' +
            '<ul>' +
              '<li>Personal preference about the scent, or longevity and projection varying with skin and climate.</li>' +
              '<li>Opened, tested or used fragrances, for hygiene reasons.</li>' +
              '<li>Impacts, drops or poor storage (heat, humidity or direct light) after delivery.</li>' +
              '<li>Bottles opened, repaired or tampered with by third parties.</li>' +
            '</ul>' +
            '<h3>6. Resolution</h3>' +
            '<p>If the claim is approved, we resolve it within a maximum of 5 business days with an identical product or, if out of stock, with a credit note for the amount paid. If the defect is ours, we cover the shipping cost of the replacement.</p>' +
            '<h3>7. Governing law</h3>' +
            '<p>This policy is governed by the laws in force of the Republic of Ecuador.</p>' +
          '</div>' +

        '</div>' +
        '<footer class="pp-terms-foot">' +
          '<a class="pp-add pp-modal-cta" id="warrantyWhatsApp" href="https://wa.me/' + WA + '" target="_blank" rel="noopener noreferrer">' +
            '<span data-only="es">RECLAMAR POR WHATSAPP</span><span data-only="en">CLAIM ON WHATSAPP</span>' +
            '<span class="arrow" aria-hidden="true"></span>' +
          '</a>' +
        '</footer>' +
      '</div>' +
    '</div>';

  var lightboxHTML =
    '<div class="pp-lightbox" id="ppLightbox" aria-hidden="true" style="display:none !important">' +
      '<button class="pp-modal-backdrop" type="button" data-close-modal aria-label="Cerrar imagen"></button>' +
      '<button class="pp-modal-close pp-lightbox-close" type="button" data-close-modal aria-label="Cerrar">×</button>' +
      '<img id="ppLightboxImage" src="" alt="">' +
    '</div>';

  var drawerHTML =
    '<div class="drawer-backdrop" id="drawerBackdrop"></div>' +
    '<aside class="cart-drawer" id="cartDrawer" aria-hidden="true" aria-label="Bolsa de compras">' +
      '<div class="drawer-header">' +
        '<div><span class="eyebrow" data-i18n="yourSelection">TU SELECCIÓN</span>' +
        '<h2><span data-i18n="yourBag">Tu bolsa</span> <span id="drawerCount">(0)</span></h2></div>' +
        '<button class="close-button" id="cartClose" type="button" aria-label="Cerrar bolsa">×</button>' +
      '</div>' +
      '<p class="cart-empty" id="cartEmpty" data-i18n="emptyBag">Tu bolsa está esperando por algo especial.</p>' +
      '<div class="cart-items" id="cartItems"></div>' +
      '<div class="cart-footer" id="cartFooter" hidden>' +
        '<p class="cart-summary" id="cartSummary"></p>' +
        '<div class="promo-box" id="promoBox">' +
          '<label class="promo-label" for="promoInput" data-i18n="promoLabel">¿Tienes un código promocional?</label>' +
          '<div class="promo-field" id="promoField">' +
            '<input id="promoInput" type="text" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Escribe tu código" data-i18n-placeholder="promoPlaceholder">' +
            '<button id="promoApply" type="button" data-i18n="promoApply">Aplicar</button>' +
          '</div>' +
          '<div class="promo-applied" id="promoApplied" hidden><span id="promoAppliedText"></span>' +
            '<button id="promoRemove" type="button" data-i18n="promoRemove">Quitar</button></div>' +
          '<p class="promo-message" id="promoMessage" role="status" aria-live="polite"></p>' +
        '</div>' +
        '<div class="promo-savings" id="promoSavingsRow" hidden><span id="promoSavingsLabel"></span><strong id="promoSavings"></strong></div>' +
        '<div class="cart-subtotal"><span data-i18n="subtotal">Subtotal estimado</span><strong id="cartSubtotal">$0.00</strong></div>' +
        '<p data-i18n="checkoutNotice">El envío y el pago se confirmarán por WhatsApp.</p>' +
        '<button class="button button-dark checkout-button" id="checkoutButton" type="button">' +
          '<span data-i18n="sendOrder">Enviar pedido por WhatsApp</span><span class="arrow" aria-hidden="true"></span>' +
        '</button>' +
        '<button class="continue-shopping" id="continueShopping" type="button" data-i18n="continueShopping">Seguir explorando</button>' +
      '</div>' +
    '</aside>' +
    '<div class="toast" id="toast" role="status" aria-live="polite"></div>';

  if (!document.getElementById("warrantyModal")) {
    document.body.insertAdjacentHTML("beforeend", warrantyHTML + lightboxHTML + drawerHTML);
  }

  /* El botón de reclamo lleva el nombre del perfume y respeta el idioma */
  var claim = document.getElementById("warrantyWhatsApp");
  if (claim) {
    claim.addEventListener("click", function () {
      var title = document.querySelector(".pp-title");
      var name = title ? title.textContent.trim() : "";
      var en = document.documentElement.lang === "en";
      var text = en
        ? "Hello, Vibex Global. I would like to make a warranty claim for " + name + ". My order number is: "
        : "Hola, Vibex Global. Quisiera hacer un reclamo de garantía por " + name + ". Mi número de pedido es: ";
      claim.href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(text);
    });
  }

  /* ---------- 2. PRECIO Y DESCUENTO AUTOMÁTICOS ---------- */

  function renderPrice() {
    var id = Number(document.body.getAttribute("data-product-id"));
    if (typeof products === "undefined" || typeof buildPriceBlock !== "function") return;

    var product = products.filter(function (p) { return p && p.id === id; })[0];
    if (!product) return;

    /* Precio actual (y anterior tachado, solo si está verificado) */
    var slot = document.getElementById("ppPrice");
    if (slot) {
      slot.replaceChildren(buildPriceBlock(product));
      slot.classList.add("pp-price-auto");
    }

    /* Nube roja sobre la foto */
    var stage = document.querySelector(".pp-stage");
    if (stage && typeof buildDiscountBadge === "function") {
      var old = stage.querySelector(".discount-badge");
      if (old) old.remove();
      var badge = buildDiscountBadge(product);
      if (badge) stage.appendChild(badge);
    }
  }

  /* ---------- 3. DATO ESTRUCTURADO: mismo precio que la tienda ---------- */

  function syncStructuredData() {
    var id = Number(document.body.getAttribute("data-product-id"));
    if (typeof products === "undefined") return;

    var product = products.filter(function (p) { return p && p.id === id; })[0];
    if (!product) return;

    [].forEach.call(document.querySelectorAll('script[type="application/ld+json"]'), function (node) {
      try {
        var data = JSON.parse(node.textContent);
        if (data["@type"] === "Product" && data.offers) {
          data.offers.price = Number(product.price).toFixed(2);
          node.textContent = JSON.stringify(data, null, 2);
        }
      } catch (e) { /* si el JSON tiene un error, se deja como está */ }
    });
  }

  /* Los scripts con "defer" ya corrieron cuando llega este evento */
  document.addEventListener("DOMContentLoaded", function () {
    renderPrice();
    syncStructuredData();
  });

  /* Si cambian el idioma, se vuelve a dibujar el precio con su formato */
  document.addEventListener("click", function (event) {
    if (event.target.closest && event.target.closest("[data-language]")) {
      window.setTimeout(renderPrice, 0);
    }
  });
})();