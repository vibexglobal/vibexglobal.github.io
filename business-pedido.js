"use strict";

/* =========================================
   VIBEX BUSINESS: PEDIDO MAYORISTA
   Se carga DESPUÉS de business.js y usa sus
   productos, precios, idioma y formato de moneda.
   No cobra: arma la lista y la envía por WhatsApp.
   ========================================= */

const ORDER_KEY = "vibexBusinessOrderV1";
const MAX_PACKS = 99;

const ORDER_TEXT = {
  es: {
    addToOrder: "Añadir al pedido",
    added: "se añadió a tu pedido.",
    eyebrow: "TU PEDIDO MAYORISTA",
    title: "Tu pedido",
    empty: "Aún no has añadido productos. Elige un paquete y pulsa «Añadir al pedido».",
    total: "Total estimado",
    notice: "Precios y disponibilidad se confirman por WhatsApp. El pago y el envío se acuerdan contigo.",
    send: "Enviar pedido por WhatsApp",
    clear: "Vaciar pedido",
    remove: "Eliminar",
    close: "Cerrar pedido",
    open: "Abrir pedido",
    less: "Reducir cantidad",
    more: "Aumentar cantidad",
    packages: "paquetes",
    intro: "Hola, Vibex Global. Quisiera consultar este pedido mayorista:",
    totalMessage: "Total estimado:",
    end: "Por favor, confirmen disponibilidad, precio final, envío y métodos de pago.",
    emptyToast: "Tu pedido está vacío.",
    cleared: "Pedido vaciado."
  },
  en: {
    addToOrder: "Add to order",
    added: "was added to your order.",
    eyebrow: "YOUR WHOLESALE ORDER",
    title: "Your order",
    empty: "You haven't added any products yet. Choose a package and press “Add to order”.",
    total: "Estimated total",
    notice: "Prices and availability are confirmed on WhatsApp. Payment and shipping are arranged with you.",
    send: "Send order on WhatsApp",
    clear: "Clear order",
    remove: "Remove",
    close: "Close order",
    open: "Open order",
    less: "Reduce quantity",
    more: "Increase quantity",
    packages: "packages",
    intro: "Hello, Vibex Global. I would like to ask about this wholesale order:",
    totalMessage: "Estimated total:",
    end: "Please confirm availability, final price, shipping and payment methods.",
    emptyToast: "Your order is empty.",
    cleared: "Order cleared."
  }
};

function ot() {
  return ORDER_TEXT[businessLanguage] || ORDER_TEXT.es;
}

/* GUARDAR Y CARGAR EL PEDIDO EN EL NAVEGADOR */

function loadOrder() {
  try {
    const parsed = JSON.parse(localStorage.getItem(ORDER_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(line =>
        BUSINESS_PRODUCTS.some(p => p.id === line.id) &&
        PACKAGE_SIZES.includes(Number(line.size))
      )
      .map(line => ({
        id: line.id,
        size: Number(line.size),
        packs: Math.max(1, Math.min(MAX_PACKS, Number(line.packs) || 1))
      }));
  } catch {
    return [];
  }
}

function saveOrder() {
  try {
    localStorage.setItem(ORDER_KEY, JSON.stringify(order));
  } catch {
    /* si el navegador no permite guardar, el pedido sigue funcionando */
  }
}

let order = loadOrder();

/* DETALLE DEL PEDIDO (cada línea = producto + tamaño de paquete) */

function orderDetails() {
  return order
    .map((line, index) => {
      const product = BUSINESS_PRODUCTS.find(p => p.id === line.id);
      if (!product) return null;

      return {
        index,
        product,
        size: line.size,
        packs: line.packs,
        lineTotal: product.prices[line.size] * line.packs
      };
    })
    .filter(Boolean);
}

/* ACCIONES */

function addToOrder(productId, size) {
  const product = BUSINESS_PRODUCTS.find(p => p.id === productId);
  if (!product || !PACKAGE_SIZES.includes(size)) return;

  /* Mismo producto + mismo paquete = suma 1 paquete.
     Mismo producto + otro paquete = línea separada. */
  const existing = order.find(l => l.id === productId && l.size === size);

  if (existing) {
    existing.packs = Math.min(MAX_PACKS, existing.packs + 1);
  } else {
    order.push({ id: productId, size, packs: 1 });
  }

  saveOrder();
  renderOrder();
  showOrderToast(`${product.name} ${ot().added}`);
  bumpCounter();
}

function changePacks(index, delta) {
  const line = order[index];
  if (!line) return;

  line.packs += delta;

  if (line.packs <= 0) {
    order.splice(index, 1);
  } else {
    line.packs = Math.min(MAX_PACKS, line.packs);
  }

  saveOrder();
  renderOrder();
}

function removeLine(index) {
  order.splice(index, 1);
  saveOrder();
  renderOrder();
}

function clearOrder() {
  order = [];
  saveOrder();
  renderOrder();
  showOrderToast(ot().cleared);
}

/* MENSAJE DE WHATSAPP CON TODO EL PEDIDO */

function sendOrder() {
  const details = orderDetails();

  if (details.length === 0) {
    showOrderToast(ot().emptyToast);
    return;
  }

  const bt = BUSINESS_TEXT[businessLanguage] || BUSINESS_TEXT.es;
  const total = details.reduce((sum, item) => sum + item.lineTotal, 0);

  const lines = details.map(item =>
    `• ${item.product.name} — ${item.packs} × ${bt.package} ${item.size} ${bt.units}: ${formatMoney(item.lineTotal)}`
  );

  const message = [
    ot().intro,
    "",
    ...lines,
    "",
    `${ot().totalMessage} ${formatMoney(total)}`,
    "",
    ot().end
  ].join("\n");

  const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
  const opened = window.open(url, "_blank", "noopener,noreferrer");

  if (!opened) window.location.href = url;
}

/* PANEL LATERAL (se crea solo, no hace falta HTML) */

function buildDrawer() {
  if (document.getElementById("orderDrawer")) return;

  const backdrop = document.createElement("div");
  backdrop.className = "order-backdrop";
  backdrop.id = "orderBackdrop";

  const drawer = document.createElement("aside");
  drawer.className = "order-drawer";
  drawer.id = "orderDrawer";
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <div class="order-header">
      <div>
        <span class="eyebrow" id="orderEyebrow"></span>
        <h2><span id="orderTitle"></span> <span id="orderHeaderCount"></span></h2>
      </div>
      <button class="order-close" id="orderClose" type="button">×</button>
    </div>

    <p class="order-empty" id="orderEmpty"></p>
    <div class="order-items" id="orderItems"></div>

    <div class="order-footer" id="orderFooter" hidden>
      <div class="order-total">
        <span id="orderTotalLabel"></span>
        <strong id="orderTotal"></strong>
      </div>
      <p class="order-notice" id="orderNotice"></p>
      <button class="order-send" id="orderSend" type="button"></button>
      <button class="order-clear" id="orderClear" type="button"></button>
    </div>
  `;

  const toast = document.createElement("div");
  toast.className = "order-toast";
  toast.id = "orderToast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");

  document.body.append(backdrop, drawer, toast);

  backdrop.addEventListener("click", closeOrder);
  document.getElementById("orderClose").addEventListener("click", closeOrder);
  document.getElementById("orderSend").addEventListener("click", sendOrder);
  document.getElementById("orderClear").addEventListener("click", clearOrder);
}

function openOrder() {
  document.getElementById("orderDrawer")?.classList.add("open");
  document.getElementById("orderBackdrop")?.classList.add("open");
  document.getElementById("orderDrawer")?.setAttribute("aria-hidden", "false");
  document.body.classList.add("order-open");
}

function closeOrder() {
  document.getElementById("orderDrawer")?.classList.remove("open");
  document.getElementById("orderBackdrop")?.classList.remove("open");
  document.getElementById("orderDrawer")?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("order-open");
}

let orderToastTimer = null;

function showOrderToast(message) {
  const toast = document.getElementById("orderToast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(orderToastTimer);
  orderToastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function bumpCounter() {
  const counter = document.getElementById("cartCount");
  if (!counter) return;

  counter.classList.remove("bump");
  void counter.offsetWidth;
  counter.classList.add("bump");
}

/* DIBUJAR EL PEDIDO */

function renderOrder() {
  const t = ot();
  const details = orderDetails();
  const bt = BUSINESS_TEXT[businessLanguage] || BUSINESS_TEXT.es;
  const lineCount = details.length;                 /* cuenta productos/paquetes distintos */
  const total = details.reduce((sum, item) => sum + item.lineTotal, 0);

  /* Burbuja del carrito en la cabecera */
  const counter = document.getElementById("cartCount");
  if (counter) counter.textContent = lineCount;

  const toggle = document.getElementById("cartToggle");
  if (toggle) toggle.setAttribute("aria-label", t.open);

  const drawer = document.getElementById("orderDrawer");
  if (!drawer) return;

  document.getElementById("orderEyebrow").textContent = t.eyebrow;
  document.getElementById("orderTitle").textContent = t.title;
  document.getElementById("orderHeaderCount").textContent = `(${lineCount})`;
  document.getElementById("orderClose").setAttribute("aria-label", t.close);
  document.getElementById("orderEmpty").textContent = t.empty;
  document.getElementById("orderTotalLabel").textContent = t.total;
  document.getElementById("orderTotal").textContent = formatMoney(total);
  document.getElementById("orderNotice").textContent = t.notice;
  const sendButton = document.getElementById("orderSend");
sendButton.textContent = `${t.send} `;
const sendArrow = document.createElement("span");
sendArrow.className = "arrow";
sendArrow.setAttribute("aria-hidden", "true");
sendButton.appendChild(sendArrow);
  document.getElementById("orderClear").textContent = t.clear;

  const itemsContainer = document.getElementById("orderItems");
  itemsContainer.replaceChildren();

  details.forEach(item => {
    const line = document.createElement("div");
    line.className = "order-line";

    const info = document.createElement("div");
    info.className = "order-line-info";

    const name = document.createElement("h3");
    name.textContent = item.product.name;

    const pack = document.createElement("small");
    pack.textContent =
      `${bt.package} ${item.size} ${bt.units} · ${formatMoney(item.product.prices[item.size])}`;

    const controls = document.createElement("div");
    controls.className = "order-quantity";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "−";
    minus.setAttribute("aria-label", `${t.less}: ${item.product.name}`);
    minus.addEventListener("click", () => changePacks(item.index, -1));

    const qty = document.createElement("span");
    qty.textContent = `${item.packs} ×`;
    qty.title = t.packages;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `${t.more}: ${item.product.name}`);
    plus.addEventListener("click", () => changePacks(item.index, 1));

    controls.append(minus, qty, plus);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "order-remove";
    remove.textContent = t.remove;
    remove.addEventListener("click", () => removeLine(item.index));

    info.append(name, pack, controls, remove);

    const price = document.createElement("span");
    price.className = "order-line-price";
    price.textContent = formatMoney(item.lineTotal);

    line.append(info, price);
    itemsContainer.appendChild(line);
  });

  const isEmpty = details.length === 0;
  document.getElementById("orderEmpty").hidden = !isEmpty;
  document.getElementById("orderFooter").hidden = isEmpty;
  itemsContainer.hidden = isEmpty;
}

/* BOTÓN "AÑADIR AL PEDIDO" EN CADA TARJETA
   business.js vuelve a dibujar las tarjetas cada vez que cambia el idioma,
   así que envolvemos su función para agregar el botón después de cada dibujo. */

function decorateCards() {
  document.querySelectorAll(".business-product-card").forEach(card => {
    if (card.querySelector(".business-add-button")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "business-add-button";
    button.dataset.product = card.dataset.productId;
    button.textContent = ot().addToOrder;

    const whatsapp = card.querySelector(".business-whatsapp-button");

    if (whatsapp) {
      whatsapp.before(button);
    } else {
      card.querySelector(".business-product-info")?.append(button);
    }
  });
}

const originalRenderBusinessProducts = renderBusinessProducts;

renderBusinessProducts = function () {
  originalRenderBusinessProducts();
  decorateCards();
  renderOrder();
};

/* EVENTOS */

document.addEventListener("click", event => {
  const addButton = event.target.closest(".business-add-button");
  if (!addButton) return;

  const productId = addButton.dataset.product;
  const select = document.getElementById(`package-${productId}`);
  const size = Number(select?.value) || PACKAGE_SIZES[0];

  addToOrder(productId, size);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeOrder();
});

buildDrawer();
document.getElementById("cartToggle")?.addEventListener("click", openOrder);
renderOrder();
