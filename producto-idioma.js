"use strict";

/* ==================================================
   VIBEX GLOBAL — IDIOMA DE LA PÁGINA DE PRODUCTO
   Traduce los textos de la página sin tocar el HTML.
   Se carga DESPUÉS de script.js y producto.js.
   Cada par es: ["texto en español exacto", "texto en inglés"]
   ================================================== */

(() => {
  const PAIRS = [
    /* Cabecera y navegación */
    ["← Volver a la tienda", "← Back to the store"],
    ["Bolsa", "Bag"],
    ["Inicio", "Home"],
    ["Perfumería", "Fragrance"],
    ["[COLOCAR IMAGEN AQUÍ]", "[PLACE IMAGE HERE]"],
    ["AMPLIAR", "ENLARGE"],

    /* Información principal */
    ["RASASI · CÓD. 100003", "RASASI · CODE 100003"],
    ["Envío gratis a todo el Ecuador", "Free shipping across Ecuador"],
    ["Cítricos vibrantes y maderas ambarinas. Una firma olfativa magnética.", "Vibrant citrus and amber woods. A magnetic olfactory signature."],
    ["Fresca, femenina y envolvente.", "Fresh, feminine and enveloping."],
    ["En stock · Envío inmediato", "In stock · Ships immediately"],
    ["AÑADIR A LA BOLSA ·", "ADD TO BAG ·"],
    ["CONSULTAR POR WHATSAPP", "ASK ON WHATSAPP"],

    /* Ideal para */
    ["IDEAL PARA", "IDEAL FOR"],
    ["Clima cálido", "Warm weather"],
    ["Citas", "Dates"],
    ["Oficina", "Office"],

    /* Pirámide olfativa */
    ["PIRÁMIDE OLFATIVA", "FRAGRANCE PYRAMID"],
    ["SALIDA", "TOP"],
    ["CORAZÓN", "HEART"],
    ["FONDO", "BASE"],
    ["Bergamota · Cítricos vibrantes", "Bergamot · Vibrant citrus"],
    ["Jazmín", "Jasmine"],
    ["Vainilla · Maderas ambarinas", "Vanilla · Amber woods"],

    /* Ficha técnica */
    ["FICHA TÉCNICA", "SPECIFICATIONS"],
    ["MARCA", "BRAND"],
    ["GÉNERO", "GENDER"],
    ["Mujer", "Women"],
    ["FAMILIA OLFATIVA", "FRAGRANCE FAMILY"],
    ["Floral frutal", "Fruity floral"],
    ["CONCENTRACIÓN", "CONCENTRATION"],
    ["VOLUMEN", "VOLUME"],
    ["100 ml · 3,4 fl oz", "100 ml · 3.4 fl oz"],
    ["DURACIÓN", "LONGEVITY"],
    ["8 – 12 horas", "8 – 12 hours"],
    ["PROYECCIÓN", "PROJECTION"],
    ["Moderada a alta", "Moderate to strong"],
    ["IMPORTADO DESDE", "IMPORTED FROM"],
    ["Emiratos Árabes Unidos", "United Arab Emirates"],

    /* Garantía (tarjeta) */
    ["GARANTÍA VIBEX", "VIBEX WARRANTY"],
    ["Condiciones, cobertura y cómo reclamar", "Terms, coverage and how to claim"],
    ["Ver condiciones ›", "View terms ›"],

    /* Confianza */
    ["Producto original e importado", "Original, imported product"],
    ["Entrega en 24 a 48 horas", "Delivery in 24 to 48 hours"],
    ["Asesoría por WhatsApp", "Advice via WhatsApp"],

    /* Ventana de garantía */
    ["Compra con tranquilidad.", "Shop with peace of mind."],
    ["Así protegemos tu compra de Hawas Glitz.", "How we protect your purchase of Hawas Glitz."],
    ["Qué cubre", "What it covers"],
    ["Producto con defecto de fábrica o dañado durante el envío.", "Products with a factory defect or damaged during shipping."],
    ["Producto distinto al que pediste.", "A product different from the one you ordered."],
    ["Envase sellado que llegue abierto o con fugas.", "A sealed bottle that arrives open or leaking."],
    ["Qué no cubre", "What it does not cover"],
    ["Perfumes abiertos o usados, por preferencia de aroma.", "Opened or used perfumes, due to scent preference."],
    ["Daños por mal uso o mal almacenamiento.", "Damage from misuse or improper storage."],
    ["Reclamos fuera del plazo de 7 días desde la entrega.", "Claims made after the 7-day period from delivery."],
    ["Cómo reclamar", "How to claim"],
    ["Escríbenos por WhatsApp con tu número de pedido.", "Message us on WhatsApp with your order number."],
    ["Envíanos fotos o un video del producto y su empaque.", "Send us photos or a video of the product and its packaging."],
    ["Revisamos tu caso y te respondemos en 48 horas.", "We review your case and reply within 48 hours."],
    ["Te ofrecemos reposición o reembolso, según corresponda.", "We offer a replacement or refund, as appropriate."],
    ["RECLAMAR POR WHATSAPP", "CLAIM ON WHATSAPP"],

    /* Textos accesibles (aria-label / alt) */
    ["Abrir bolsa", "Open bag"],
    ["Ruta de navegación", "Breadcrumb"],
    ["Fotos del producto", "Product photos"],
    ["Cantidad", "Quantity"],
    ["Reducir cantidad", "Reduce quantity"],
    ["Aumentar cantidad", "Increase quantity"],
    ["Ver foto 1", "View photo 1"],
    ["Ver foto 2", "View photo 2"],
    ["Ver foto 3", "View photo 3"],
    ["Cerrar", "Close"],
    ["Cerrar garantía", "Close warranty"],
    ["Cerrar imagen", "Close image"],
    ["Idioma", "Language"],
    ["Vibex Global, inicio", "Vibex Global, home"],
    ["Perfume Hawas Glitz Rasasi 100 ml en mano, con sus notas y características", "Hawas Glitz Rasasi 100 ml perfume in hand, with its notes and features"]
  ];

  const EN = new Map(PAIRS);

  const TITLE = {
    es: "Hawas Glitz Rasasi 100 ml — Perfume para mujer | Vibex Global",
    en: "Hawas Glitz Rasasi 100 ml — Women's perfume | Vibex Global"
  };

  const META = {
    es: "Hawas Glitz de Rasasi: Eau de Parfum de 100 ml para mujer. Floral frutal con bergamota, jazmín y vainilla. Envío gratis en Ecuador.",
    en: "Hawas Glitz by Rasasi: 100 ml Eau de Parfum for women. Fruity floral with bergamot, jasmine and vanilla. Free shipping in Ecuador."
  };

  const q = (selector) => document.querySelector(selector);
  const qa = (selector) => [...document.querySelectorAll(selector)];

  /* Textos visibles */
  function translateText(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style, #cartDrawer, #toast")) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if (node._es === undefined) node._es = node.nodeValue;

      const original = node._es;
      const key = original.trim();

      node.nodeValue =
        lang === "en" && EN.has(key) ? original.replace(key, EN.get(key)) : original;
    });
  }

  /* aria-label, alt y title */
  function translateAttributes(lang) {
    qa("[aria-label], [alt], [title]").forEach((element) => {
      if (element.closest("#cartDrawer")) return;

      ["aria-label", "alt", "title"].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;

        const store = `data-es-${attribute}`;
        if (!element.hasAttribute(store)) {
          element.setAttribute(store, element.getAttribute(attribute));
        }

        const spanish = element.getAttribute(store);
        element.setAttribute(
          attribute,
          lang === "en" && EN.has(spanish) ? EN.get(spanish) : spanish
        );
      });
    });
  }

  /* Precio, total del botón y enlace de garantía en el idioma activo */
  function refreshDynamic(lang) {
    const product = products.find(
      (entry) => entry.id === Number(document.body.dataset.productId)
    );
    if (!product) return;

    const price = q("#ppPrice");
    if (price) price.textContent = money(product.price);

    const qty = Number(q("#ppQty")?.textContent) || 1;
    const total = q("#ppAddTotal");
    if (total) total.textContent = money(product.price * qty);

    const claim = q("#warrantyWhatsApp");
    if (claim) {
      const message =
        lang === "en"
          ? `Hello, Vibex Global. I would like to make a warranty claim for ${product.name}. My order number is: `
          : `Hola, Vibex Global. Quisiera hacer un reclamo de garantía por ${product.name}. Mi número de pedido es: `;

      claim.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }
  }

  function applyLanguage() {
    const lang = currentLanguage === "en" ? "en" : "es";

    translateText(lang);
    translateAttributes(lang);
    refreshDynamic(lang);

    document.title = TITLE[lang];
    q("meta[name='description']")?.setAttribute("content", META[lang]);
  }

  /* script.js ya cambia el idioma al pulsar ES/EN; aquí aplicamos la página */
  qa("[data-language]").forEach((button) => {
    button.addEventListener("click", applyLanguage);
  });

  applyLanguage();
})();