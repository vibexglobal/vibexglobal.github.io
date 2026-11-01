"use strict";

/* =========================================
   VIBEX GLOBAL BUSINESS
   Catalogo mayorista de vapes
   Precios de venta en USD
   ========================================= */

const BUSINESS_WHATSAPP = "593984692292";
const LANGUAGE_KEY = "vibexBusinessLanguage";
const PACKAGE_SIZES = [3, 6, 9, 12];

/*
  PRECIOS PUBLICOS:
  Solo precios de paquetes de 3, 6, 9 y 12.
  No agregar costos de proveedores ni ganancias.
*/

const BUSINESS_PRODUCTS = [
  // VAPER E.C.
  { id:"ve01", name:"Geek Bar / Lost Mary (EBCreate/MTRX/Nexa)", puffs:"40k–50k", range:"Gama alta", prices:{3:54,6:102,9:144,12:180} },
  { id:"ve02", name:"Lost Mary Nera / Rifbar Mixpro", puffs:"40k", range:"Gama alta", prices:{3:54,6:102,9:144,12:180} },
  { id:"ve03", name:"Solo Bar (Kit completo + esencias)", puffs:"30k–35k", range:"Gama alta", prices:{3:51,6:96,9:135,12:168} },
  { id:"ve04", name:"Nixodine Katchmi Boost", puffs:"20k", range:"Gama media-alta", prices:{3:44,6:84,9:117,12:144} },
  { id:"ve05", name:"Nimmbox Kit Flare", puffs:"25k", range:"Gama media-alta", prices:{3:44,6:84,9:117,12:144} },
  { id:"ve06", name:"188 Baddie Bar", puffs:"15k", range:"Gama media", prices:{3:39,6:72,9:99,12:120} },
  { id:"ve07", name:"North FT12000 / Crave", puffs:"12k", range:"Gama media", prices:{3:36,6:66,9:90,12:108} },
  { id:"ve08", name:"Nicky Jam / Fume", puffs:"10k", range:"Gama media", prices:{3:33,6:60,9:81,12:96} },
  { id:"ve09", name:"Nola Bar", puffs:"10k", range:"Gama media", prices:{3:33,6:60,9:81,12:96} },
  { id:"ve10", name:"Fyre Tyson 2.0", puffs:"7k", range:"Gama económica", prices:{3:30,6:54,9:72,12:84} },
  { id:"ve11", name:"Death Row", puffs:"7k", range:"Gama económica", prices:{3:27,6:48,9:63,12:72} },
  { id:"ve12", name:"Luffbar Bubble 6000", puffs:"6k", range:"Gama económica", prices:{3:31,6:56,9:75,12:88} },
  { id:"ve13", name:"Viral 9000", puffs:"9k", range:"Gama media", prices:{3:32,6:58,9:78,12:92} },

  // VAPESV
  { id:"vv01", name:"Lost Mary Nera Fullview Kit", puffs:"70k", range:"Gama alta · Kit", prices:{3:180,6:340,9:480,12:600} },
  { id:"vv02", name:"Vozol Gear & Sweet / Rave", puffs:"50k", range:"Gama alta", prices:{3:150,6:280,9:390,12:480} },
  { id:"vv03", name:"Nexa Ultra", puffs:"50k", range:"Gama alta", prices:{3:150,6:280,9:390,12:480} },
  { id:"vv04", name:"Lost Mary Adjust (MyCool/MySour)", puffs:"40k", range:"Gama alta", prices:{3:150,6:280,9:390,12:480} },
  { id:"vv05", name:"Rifbar Mix Pro", puffs:"40k", range:"Gama alta", prices:{3:150,6:280,9:390,12:480} },
  { id:"vv06", name:"Raz RX", puffs:"50k", range:"Gama alta", prices:{3:150,6:280,9:390,12:480} },
  { id:"vv07", name:"IJoy SD40000 (IA Voice Control)", puffs:"40k", range:"Gama alta", prices:{3:115,6:215,9:300,12:370} },
  { id:"vv08", name:"Oxbar 35K / Magic Maze 2.0", puffs:"30k–35k", range:"Gama alta", prices:{3:115,6:215,9:300,12:370} },
  { id:"vv09", name:"Foger 30K Kit", puffs:"30k", range:"Gama alta · Kit", prices:{3:130,6:240,9:335,12:415} },
  { id:"vv10", name:"Elfworld (Nic & Ice regulables)", puffs:"45k", range:"Línea económica", prices:{3:115,6:215,9:300,12:370} },
  { id:"vv11", name:"Geek Bar Digiflavor / Raz LTX", puffs:"25k", range:"Gama alta", prices:{3:115,6:215,9:300,12:370} },
  { id:"vv12", name:"Taijizen Judo", puffs:"24k", range:"Línea económica", prices:{3:95,6:180,9:250,12:310} },
  { id:"vv13", name:"QSM Pulse X", puffs:"30k", range:"Gama alta", prices:{3:75,6:140,9:195,12:240} },
  { id:"vv14", name:"Spaceman Nebula / Prism", puffs:"20k–25k", range:"Gama alta", prices:{3:72,6:135,9:190,12:235} },
  { id:"vv15", name:"Chillax Shake / Beyond", puffs:"12k–15k", range:"Gama alta", prices:{3:60,6:112,9:158,12:195} },
  { id:"vv16", name:"Waka Boost / RabBeats", puffs:"10k–15k", range:"Gama alta", prices:{3:62,6:115,9:162,12:200} },
  { id:"vv17", name:"Dummy Vape / Pillow Talk / Waka Sopro", puffs:"8k–10k", range:"Gama alta", prices:{3:50,6:95,9:135,12:168} },
  { id:"vv18", name:"Lost Vape 10000 / Raz 6000", puffs:"6k–10k", range:"Gama alta / económica", prices:{3:48,6:90,9:128,12:160} },
  { id:"vv19", name:"Morfbar Smok", puffs:"20k", range:"Gama alta", prices:{3:58,6:108,9:152,12:188} },
  { id:"vv20", name:"Lucky Wolf", puffs:"25k", range:"Línea económica", prices:{3:58,6:108,9:152,12:188} },
  { id:"vv21", name:"Evo 16000", puffs:"16k", range:"Saldos / únicos", prices:{3:58,6:108,9:152,12:188} },
  { id:"vv22", name:"Hulk Hogan's", puffs:"8k", range:"Saldos", prices:{3:40,6:75,9:105,12:130} },
  { id:"vv23", name:"Death Row 5000", puffs:"5k", range:"Saldos / liquidación", prices:{3:26,6:48,9:68,12:84} },
  { id:"vv24", name:"Snow Wolf 8000", puffs:"8k", range:"Saldos", prices:{3:40,6:75,9:105,12:130} }
];

/* TEXTOS EN ESPAÑOL E INGLÉS */

const BUSINESS_TEXT = {
  es: {
    units:"unidades",
    choose:"Selecciona tu paquete",
    total:"Precio del paquete",
    each:"por unidad",
    ask:"Consultar por WhatsApp",
    image:"[COLOCAR IMAGEN AQUÍ]",
    puffs:"Puffs indicados",
    notice:"Precios sujetos a confirmación de disponibilidad. Verifica las características y las normas aplicables antes de comprar.",
    message:"Hola, Vibex Global. Quisiera consultar por",
    package:"paquete de"
  },
  en: {
    units:"units",
    choose:"Choose your package",
    total:"Package price",
    each:"per unit",
    ask:"Ask on WhatsApp",
    image:"[ADD PRODUCT IMAGE HERE]",
    puffs:"Advertised puffs",
    notice:"Prices are subject to availability confirmation. Verify product details and applicable regulations before purchasing.",
    message:"Hello, Vibex Global. I would like to ask about",
    package:"package of"
  }
};
/* TRADUCCIONES DE TODA LA PÁGINA */

const PAGE_TEXT = {
  es: {
    title: "VIBEX BUSINESS — Crezcamos juntos",
    announcement: "VIBEX BUSINESS — OPORTUNIDADES PARA CRECER",
    perfume: "Perfumería",
    electronics: "Electrónica",
    jewelry: "Joyería",
    backStore: 	"Tienda principal <span class='arrow' aria-hidden='true'></span>",
    heroEyebrow: "VIBEX GLOBAL · MAYORISTA",
    heroImage: "[COLOCAR IMAGEN DE VIBEX BUSINESS AQUÍ]",
    heroTitle: "Tu visión merece una oportunidad.<br><em>Crezcamos juntos.</em>",
    heroDescription: "Descubre productos para tu negocio, elige el volumen que necesitas y construye nuevas oportunidades con Vibex Global.",
    exploreCatalog: "Explorar catálogo mayorista",
    businessLabel: "VIBEX BUSINESS",
    businessTitle: "Una oportunidad para crecer.",
    businessDescription: "Encuentra productos, selecciona tus paquetes y prepara tu próximo pedido mayorista en un solo lugar.",
    catalogLabel: "NUESTRO CATÁLOGO",
    catalogTitle: "Explora por categoría.",
    catalogDescription: "Cada producto tendrá opciones de compra por volumen.",
    vapes: "Vapes",
    mobiles: "Celulares",
    otherElectronics: "Otros electrónicos",
    wholesaleCatalog: "Catálogo mayorista",
    soon: "Próximamente",
    demoNotice: "Los productos y precios mostrados en esta versión son ejemplos. Confirma el inventario y las condiciones comerciales antes de vender.",
    contactLabel: "¿HABLAMOS DE TU NEGOCIO?",
    contactTitle: "Tu próximo paso<br><em>comienza aquí.</em>",
    contactDescription: "¿Tienes preguntas sobre productos o compras por volumen? Escríbenos y conversemos.",
    contactButton: "Consultar por WhatsApp",
    footerPhrase: "Crezcamos juntos.",
    backToCatalog: "Volver al catálogo ↑"
  },
  en: {
    title: "VIBEX BUSINESS — Let's grow together",
    announcement: "VIBEX BUSINESS — OPPORTUNITIES TO GROW",
    perfume: "Perfume",
    electronics: "Electronics",
    jewelry: "Jewelry",
    backStore: "Main store <span class='arrow' aria-hidden='true'></span>",
    heroEyebrow: "VIBEX GLOBAL · WHOLESALE",
    heroImage: "[ADD VIBEX BUSINESS IMAGE HERE]",
    heroTitle: "Your vision deserves an opportunity.<br><em>Let's grow together.</em>",
    heroDescription: "Discover products for your business, choose the volume you need and build new opportunities with Vibex Global.",
    exploreCatalog: "Explore the wholesale catalog",
    businessLabel: "VIBEX BUSINESS",
    businessTitle: "An opportunity to grow.",
    businessDescription: "Find products, choose your packages and prepare your next wholesale order in one place.",
    catalogLabel: "OUR CATALOG",
    catalogTitle: "Explore by category.",
    catalogDescription: "Every product will have volume purchase options.",
    vapes: "Vapes",
    mobiles: "Mobile phones",
    otherElectronics: "Other electronics",
    wholesaleCatalog: "Wholesale catalog",
    soon: "Coming soon",
    demoNotice: "The products and prices shown in this version are examples. Confirm inventory and commercial terms before selling.",
    contactLabel: "SHALL WE TALK ABOUT YOUR BUSINESS?",
    contactTitle: "Your next step<br><em>starts here.</em>",
    contactDescription: "Do you have questions about products or volume purchases? Write to us and let's talk.",
    contactButton: "Ask on WhatsApp",
    footerPhrase: "Let's grow together.",
    backToCatalog: "Back to catalog ↑"
  }
};

/* TRADUCIR LAS GAMAS DE LOS PRODUCTOS */

const RANGE_EN = [
  ["Gama media-alta", "Mid-high range"],
  ["Gama económica", "Budget range"],
  ["Línea económica", "Budget line"],
  ["Gama media", "Mid-range"],
  ["Gama alta", "High-end"],
  ["Saldos", "Clearance"],
  ["únicos", "one-offs"],
  ["liquidación", "closeout"]
];

function translateRange(range) {
  if (businessLanguage !== "en") return range;
  return RANGE_EN.reduce(
    (text, [es, en]) => text.split(es).join(en),
    range
  );
}

/* APLICAR TRADUCCIONES A TODO EL HTML */

function applyPageTranslations(language) {
  const dict = PAGE_TEXT[language];
  if (!dict) return;

  document.documentElement.lang = language;
  document.title = dict.title;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = dict[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });

  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();
}
let businessLanguage = localStorage.getItem(LANGUAGE_KEY) || "es";

/* FORMATO DE PRECIOS */

function formatMoney(value) {
  return new Intl.NumberFormat(
    businessLanguage === "es" ? "es-EC" : "en-US",
    {
      style:"currency",
      currency:"USD",
      maximumFractionDigits:2
    }
  ).format(value);
}

/* EVITAR QUE LOS NOMBRES ROMPAN EL HTML */

function safeText(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  })[character]);
}

/* ENLACE DE WHATSAPP */

function whatsappLink(product, quantity) {
  const t = BUSINESS_TEXT[businessLanguage];
  const total = product.prices[quantity];

  const message =
    `${t.message} ${product.name}; ` +
    `${t.package} ${quantity} ${t.units}; ` +
    `${t.total}: ${formatMoney(total)}.`;

  return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/* CREAR LAS TARJETAS DE PRODUCTOS */

function renderBusinessProducts() {
  const grid = document.getElementById("electronicsGrid");

  if (!grid) {
    console.warn(
      'Vibex Business: falta el contenedor id="electronicsGrid" en business.html.'
    );
    return;
  }

  const t = BUSINESS_TEXT[businessLanguage];

  grid.innerHTML = BUSINESS_PRODUCTS.map(product => `
    <article class="business-product-card" data-product-id="${product.id}">
      <div class="business-product-image">
        <span class="business-image-symbol">＋</span>
        <span>${safeText(t.image)}</span>
      </div>

      <div class="business-product-info">
       <p class="business-product-range">${safeText(translateRange(product.range))}</p>

        <h3>${safeText(product.name)}</h3>

        <p class="business-product-spec">
          ${safeText(t.puffs)}: ${safeText(product.puffs)}
        </p>

        <label class="business-package-label" for="package-${product.id}">
          ${safeText(t.choose)}
        </label>

        <select
          class="business-package-select"
          id="package-${product.id}"
          data-product="${product.id}"
        >
          ${PACKAGE_SIZES.map(quantity => `
            <option value="${quantity}">
              ${quantity} ${safeText(t.units)} · ${formatMoney(product.prices[quantity])}
            </option>
          `).join("")}
        </select>

        <div class="business-price-line" aria-live="polite">
          <span>${safeText(t.total)}</span>
          <strong id="price-${product.id}">
            ${formatMoney(product.prices[3])}
          </strong>
        </div>

        <p class="business-unit-price" id="unit-${product.id}">
          ${formatMoney(product.prices[3] / 3)} ${safeText(t.each)}
        </p>

        <a
          class="business-whatsapp-button"
          href="${whatsappLink(product, 3)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${safeText(t.ask)} <span class="arrow" aria-hidden="true"></span>
        </a>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".business-package-select").forEach(select => {
    select.addEventListener("change", () => updatePackagePrice(select));
  });
}

/* ACTUALIZAR EL PRECIO AL CAMBIAR LA CANTIDAD */

function updatePackagePrice(select) {
  const product = BUSINESS_PRODUCTS.find(
    item => item.id === select.dataset.product
  );

  if (!product) return;

  const quantity = Number(select.value);
  const total = product.prices[quantity];

  const priceElement = document.getElementById(`price-${product.id}`);
  const unitElement = document.getElementById(`unit-${product.id}`);
  const card = select.closest(".business-product-card");
  const link = card.querySelector(".business-whatsapp-button");
  const t = BUSINESS_TEXT[businessLanguage];

  priceElement.textContent = formatMoney(total);
  unitElement.textContent =
    `${formatMoney(total / quantity)} ${t.each}`;

  link.href = whatsappLink(product, quantity);

  /* Animación sencilla del precio */
  priceElement.classList.remove("price-updated");
  void priceElement.offsetWidth;
  priceElement.classList.add("price-updated");
}

/* CAMBIAR ENTRE ESPAÑOL E INGLÉS */

function setBusinessLanguage(language) {
  if (!BUSINESS_TEXT[language]) return;

  businessLanguage = language;
  localStorage.setItem(LANGUAGE_KEY, language);

  document.querySelectorAll("[data-language]").forEach(button => {
    const active = button.dataset.language === language;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

    applyPageTranslations(language);

  renderBusinessProducts();
}

/* INICIAR LA PÁGINA */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => {
      setBusinessLanguage(button.dataset.language);
    });
  });

  setBusinessLanguage(businessLanguage);
});