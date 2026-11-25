"use strict";

(function () {
  const LANGUAGE_KEY = "vibexGlobalLanguageV1";

  const EXPAND = {
    es: { open: "Abrir todo", close: "Cerrar todo" },
    en: { open: "Expand all", close: "Collapse all" }
  };

  let currentLanguage = "es";

  /* ----- Idioma ----- */

  function readLanguage() {
    try {
      return localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "es";
    } catch {
      return "es";
    }
  }

  function saveLanguage(language) {
    if (!(window.VibexConsent && window.VibexConsent.preferencesAllowed())) return;
    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch {
      /* si el navegador no permite guardar, simplemente no se recuerda */
    }
  }

  function pageTitle(language) {
    const body = document.body;
    const title = language === "en" ? body.dataset.titleEn : body.dataset.titleEs;
    return title || document.title;
  }

  function applyLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = pageTitle(language);

    document.querySelectorAll("[data-lang]").forEach((node) => {
      node.hidden = node.dataset.lang !== language;
    });

    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      const active = button.dataset.setLang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  /* ----- Secciones desplegables ----- */

  function el(tag, className) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  }

  function buildAccordion(doc) {
    if (doc.querySelector(".legal-layout")) return;

    const language = doc.dataset.lang === "en" ? "en" : "es";
    const headings = Array.from(doc.querySelectorAll(":scope > h2"));
    if (headings.length === 0) return;

    const toc = doc.querySelector(":scope > .legal-toc");
    const layout = el("div", "legal-layout");
    const items = el("div", "legal-items");

    const toolbar = el("div", "legal-toolbar");
    const expand = el("button", "legal-expand");
    expand.type = "button";
    toolbar.appendChild(expand);
    items.appendChild(toolbar);

    headings.forEach((heading) => {
      const details = el("details", "legal-item");
      details.id = heading.id;

      const summary = document.createElement("summary");
      summary.textContent = heading.textContent;

      const body = el("div", "legal-item-body");
      let node = heading.nextElementSibling;
      while (node && node.tagName !== "H2") {
        const next = node.nextElementSibling;
        body.appendChild(node);
        node = next;
      }

      details.append(summary, body);
      items.appendChild(details);
      heading.remove();
    });

    const allDetails = () => Array.from(items.querySelectorAll("details"));

    function refreshLabel() {
      const everyOpen = allDetails().every((d) => d.open);
      expand.textContent = everyOpen ? EXPAND[language].close : EXPAND[language].open;
    }

    expand.addEventListener("click", () => {
      const target = !allDetails().every((d) => d.open);
      allDetails().forEach((d) => { d.open = target; });
      refreshLabel();
    });

    allDetails().forEach((d) => d.addEventListener("toggle", refreshLabel));
    refreshLabel();

    if (toc) layout.appendChild(toc);
    layout.appendChild(items);
    doc.appendChild(layout);
  }

  /* ----- Enlaces directos (#es-5, #en-5...) ----- */

  function openFromHash() {
    let id = "";
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }
    if (!id) return;

    const prefix = id.slice(0, 3);
    if ((prefix === "es-" || prefix === "en-") && prefix.slice(0, 2) !== currentLanguage) {
      applyLanguage(prefix.slice(0, 2));
    }

    const target = document.getElementById(id);
    if (target && target.tagName === "DETAILS") {
      target.open = true;
      window.requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }
  }

  /* ----- Arranque ----- */

  document.querySelectorAll(".legal-doc").forEach(buildAccordion);

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.setLang;
      saveLanguage(language);
      applyLanguage(language);
    });
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest(".legal-toc a");
    if (!link) return;
    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (target && target.tagName === "DETAILS") target.open = true;
  });

  window.addEventListener("hashchange", openFromHash);

  const year = document.getElementById("legalYear");
  if (year) year.textContent = new Date().getFullYear();

  applyLanguage(readLanguage());
  openFromHash();
})();