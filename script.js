"use strict";

/* ==================================================
   VIBEX GLOBAL
   Tienda principal: productos, traducciones y bolsa
   ================================================== */

const WHATSAPP_NUMBER = "593984692292";
const STORAGE_CART = "vibexGlobalCartV2";
const STORAGE_LANGUAGE = "vibexGlobalLanguageV1";
const STORAGE_COOKIE = "vibexGlobalCookieChoiceV1";

/* ==================================================
   ETIQUETAS DE PRODUCTO  (campo "label")
   Para cambiar la etiqueta de un producto, edita solo el texto
   entre comillas de su línea "label". Opciones disponibles:

     "NOVEDAD"             "FAVORITO"           "EDICIÓN LIMITADA"
     "IDEAL PARA REGALAR"  "ÚLTIMAS UNIDADES"   ""  (sin etiqueta)

   Se traducen solas al inglés. Usa solo las que sean ciertas.
   ================================================== */

const labelConfig = {
  "NOVEDAD":            { en: "NEW",            tone: "gold"  },
  "FAVORITO":           { en: "FAVORITE",       tone: "green" },
  "EDICIÓN LIMITADA":   { en: "LIMITED EDITION", tone: "gold"  },
  "IDEAL PARA REGALAR": { en: "GIFT IDEA",      tone: "green" },
  "ÚLTIMAS UNIDADES":   { en: "LAST FEW LEFT",  tone: "gold"  },
  "PRÓXIMAMENTE":       { en: "COMING SOON",    tone: "gold"  },
};

/* ==================================================
   PRODUCTOS
   - price: precio por unidad en USD.
   - description: texto en español.  descriptionEn: texto en inglés.
   - image: ruta de la foto (por ejemplo "img/dubai.jpg"). Vacío = espacio para imagen.
   ================================================== */

const products = [
  /* ---------- PERFUMERÍA ---------- */
  {
    id: 1,
    name: "Dubai Chocolate",
    category: "Perfumería",
    price: 33,
    label: "FAVORITO",
    description: "Cacao profundo y vainilla cálida. Una experiencia olfativa adictiva.",
    descriptionEn: "Deep cocoa and warm vanilla. An addictive olfactory experience.",
    image: "img/perfumes/dubai-chocolate/dubai-chocolate-1.png"
  },
  {
    id: 2,
    name: "Hawas Pink",
    category: "Perfumería",
    price: 32,
    label: "NOVEDAD",
    description: "Frescura floral y acordes frutales sutiles. La delicadeza hecha esencia.",
    descriptionEn: "Floral freshness and subtle fruity accords. Delicacy distilled into a scent.",
    url: "perfume-hawas-pink.html",
    image: "img/perfumes/hawas-pink/hawas-pink-1.png"
  },
  {
    id: 3,
    name: "Hawas Glitz",
    category: "Perfumería",
    price: 35,
    label: "",
    description: "Cítricos vibrantes y maderas ambarinas. Una firma olfativa magnética.",
    descriptionEn: "Vibrant citrus and amber woods. A magnetic olfactory signature.",
    url: "perfume-hawas-glitz.html",   // ← NUEVO: con esto la tarjeta se vuelve un enlace
    image: "img/perfumes/hawas-glitz/hawas-glitz-1.png"                          // aquí irá la foto limpia del frasco cuando la tengas
  },
  {
    id: 4,
    name: "Khamrah Qahwa",
    category: "Perfumería",
    price: 36,
    label: "EDICIÓN LIMITADA",
    description: "Café arábico tostado y praliné adictivo. Una elegancia oscura y profundamente envolvente.",
    descriptionEn: "Roasted Arabic coffee and addictive praline. A dark, deeply enveloping elegance.",
    url: "perfume-khamrah-qahwa.html",
    image: "img/perfumes/khamrah-qahwa/khamrah-qahwa-1.png"
  },
  {
    id: 5,
    name: "Khamrah Dukhan",
    category: "Perfumería",
    price: 38,
    label: "",
    description: "Especias ahumadas e incienso místico. Una estela nocturna, audaz y enigmática.",
    descriptionEn: "Smoky spices and mystical incense. A bold, enigmatic, and nocturnal trail.",
    image: "img/perfumes/khamrah-dukhan/khamrah-dukhan-2.png"
  },
  {
    id: 6,
    name: "Carolina Herrera Good Girl Blush Elixir",
    category: "Perfumería",
    price: 36,
    label: "",
    description: "Rosa exquisita y pachulí profundo. La faceta más misteriosa, intensa y sofisticada del lujo.",  
    descriptionEn: "Exquisite rose and deep patchouli. The most mysterious, intense, and sophisticated facet of luxury.",
    url: "perfume-carolina-herrera-good-girl-blush-elixir.html",
    image: "img/perfumes/carolina-herrera-elixir/carolina-herrera-elixir-2.png"
  },
  {
    id: 7,
    name: "Duo Khamrah",
    category: "Perfumería",
    price: 40,
    label: "",
    description: "El doble de poder gourmand y especiado. Un set de colección exclusivo e imponente.",
    descriptionEn: "Double the gourmand and spicy power. An exclusive and commanding collection set.",
    url: "perfume-khamrah-duo.html",
    image: "img/perfumes/khamrah-duo/khamrah-duo-1.PNG"
  },
  {
    id: 8,
    name: "Khamrah Waha",
    category: "Perfumería",
    price: 36,
    label: "",
    description: "Dátiles confitados, vainilla cremosa y bálsamo oriental. La calidez del desierto hecha esencia.",
    descriptionEn: "Candied dates, creamy vanilla and oriental balsam. The warmth of the desert distilled into a scent.",
    image: "img/perfumes/khamrah-waha/khamrah-waha-1.png"
  },
  {
    id: 9,
    name: "Afnan 9PM",
    category: "Perfumería",
    price: 36,
    label: "FAVORITO",
    description: "Manzana verde crujiente y vainilla nocturna. El rey indiscutible de la fiesta y la conquista.",
    descriptionEn: "Crisp green apple and nocturnal vanilla. The undisputed king of nightlife and seduction.",
    image: "img/perfumes/afnan-9pm/afnan-9pm-1.png"
  },

  /* ---------- JOYERÍA ---------- */
  {
    id: 13,
    name: "Classic Pendant",
    category: "Joyería",
    price: 29,
    label: "",
    description: "Un accesorio de diseño discreto. Consulta materiales, medidas y disponibilidad.",
    descriptionEn: "A discreet, understated accessory. Ask about materials, measurements and availability.",
    image: ""
  },
  {
    id: 14,
    name: "Golden Form",
    category: "Joyería",
    price: 35,
    label: "",
    description: "Una pieza para complementar distintos estilos. Las características finales se confirmarán con el producto real.",
    descriptionEn: "A piece to complement different styles. Final characteristics will be confirmed with the actual product.",
    image: ""
  },

  /* ---------- ELECTRÓNICA · OTROS ELECTRÓNICOS ---------- */
  {
    id: 15,
    name: "Essential Sound",
    category: "Electrónica",
    subcategory: "Otros",
    price: 65,
    label: "",
    description: "Una propuesta tecnológica. Consulta especificaciones, compatibilidad y disponibilidad.",
    descriptionEn: "A technology proposition. Ask about specifications, compatibility and availability.",
    image: ""
  },
  {
    id: 16,
    name: "Studio Audio",
    category: "Electrónica",
    subcategory: "Otros",
    price: 79,
    label: "",
    description: "Tecnología para acompañar tus actividades. Las especificaciones deberán verificarse.",
    descriptionEn: "Technology to accompany your activities. Specifications must be verified.",
    image: ""
  },
  {
    id: 17,
    name: "Everyday Tech",
    category: "Electrónica",
    subcategory: "Otros",
    price: 42,
    label: "",
    description: "Una opción de tecnología para el día a día. Consulta las características del producto real.",
    descriptionEn: "A technology option for everyday life. Ask about the actual product's features.",
    image: ""
  },

  /* ---------- ELECTRÓNICA · VAPES ----------
     price = precio por unidad. Si quieres otro precio de venta al público,
     cambia solo el número de "price" en la línea del producto.
     Cada línea tiene su "label" para que cambies la etiqueta. */

  { id:101, name:"Geek Bar / Lost Mary (EBCreate/MTRX/Nexa)", category:"Electrónica", subcategory:"Vapes", price:18, puffs:"40k–50k", range:"Gama alta", label:"", image:"" },
  { id:102, name:"Lost Mary Nera / Rifbar Mixpro", category:"Electrónica", subcategory:"Vapes", price:18, puffs:"40k", range:"Gama alta", label:"", image:"" },
  { id:103, name:"Solo Bar (Kit completo + esencias)", category:"Electrónica", subcategory:"Vapes", price:17, puffs:"30k–35k", range:"Gama alta", label:"", image:"" },
  { id:104, name:"Nixodine Katchmi Boost", category:"Electrónica", subcategory:"Vapes", price:14.67, puffs:"20k", range:"Gama media-alta", label:"", image:"" },
  { id:105, name:"Nimmbox Kit Flare", category:"Electrónica", subcategory:"Vapes", price:14.67, puffs:"25k", range:"Gama media-alta", label:"", image:"" },
  { id:106, name:"188 Baddie Bar", category:"Electrónica", subcategory:"Vapes", price:13, puffs:"15k", range:"Gama media", label:"", image:"" },
  { id:107, name:"North FT12000 / Crave", category:"Electrónica", subcategory:"Vapes", price:12, puffs:"12k", range:"Gama media", label:"", image:"" },
  { id:108, name:"Nicky Jam / Fume", category:"Electrónica", subcategory:"Vapes", price:11, puffs:"10k", range:"Gama media", label:"", image:"" },
  { id:109, name:"Nola Bar", category:"Electrónica", subcategory:"Vapes", price:11, puffs:"10k", range:"Gama media", label:"", image:"" },
  { id:110, name:"Fyre Tyson 2.0", category:"Electrónica", subcategory:"Vapes", price:10, puffs:"7k", range:"Gama económica", label:"", image:"" },
  { id:111, name:"Death Row", category:"Electrónica", subcategory:"Vapes", price:9, puffs:"7k", range:"Gama económica", label:"", image:"" },
  { id:112, name:"Luffbar Bubble 6000", category:"Electrónica", subcategory:"Vapes", price:10.33, preorder: true, puffs:"6k", range:"Gama económica", label:"", image:"img/vapes/luffbar/luffbar-1.png" },
  { id:113, name:"Viral 9000", category:"Electrónica", subcategory:"Vapes", price:10.67, preorder: true, puffs:"9k", range:"Gama media", label:"", image:"img/vapes/viral/viral-1.png" },
  { id:114, name:"Lost Mary Nera Fullview Kit", category:"Electrónica", subcategory:"Vapes", price:60, puffs:"70k", range:"Gama alta · Kit", label:"", image:"" },
  { id:115, name:"Vozol Gear & Sweet / Rave", category:"Electrónica", subcategory:"Vapes", price:50, puffs:"50k", range:"Gama alta", label:"", image:"" },
  { id:116, name:"Nexa Ultra", category:"Electrónica", subcategory:"Vapes", price:50, puffs:"50k", range:"Gama alta", label:"", image:"" },
  { id:117, name:"Lost Mary Adjust (MyCool/MySour)", category:"Electrónica", subcategory:"Vapes", price:50, puffs:"40k", range:"Gama alta", label:"", image:"" },
  { id:118, name:"Rifbar Mix Pro", category:"Electrónica", subcategory:"Vapes", price:50, puffs:"40k", range:"Gama alta", label:"", image:"" },
  { id:119, name:"Raz RX", category:"Electrónica", subcategory:"Vapes", price:50, puffs:"50k", range:"Gama alta", label:"", image:"" },
  { id:120, name:"IJoy SD40000 (IA Voice Control)", category:"Electrónica", subcategory:"Vapes", price:38.33, puffs:"40k", range:"Gama alta", label:"", image:"" },
  { id:121, name:"Oxbar 35K / Magic Maze 2.0", category:"Electrónica", subcategory:"Vapes", price:38.33, puffs:"30k–35k", range:"Gama alta", label:"", image:"" },
  { id:122, name:"Foger 30K Kit", category:"Electrónica", subcategory:"Vapes", price:43.33, puffs:"30k", range:"Gama alta · Kit", label:"", image:"" },
  { id:123, name:"Elfworld (Nic & Ice regulables)", category:"Electrónica", subcategory:"Vapes", price:38.33, puffs:"45k", range:"Línea económica", label:"", image:"" },
  { id:124, name:"Geek Bar Digiflavor / Raz LTX", category:"Electrónica", subcategory:"Vapes", price:38.33, puffs:"25k", range:"Gama alta", label:"", image:"" },
  { id:125, name:"Taijizen Judo", category:"Electrónica", subcategory:"Vapes", price:31.67, puffs:"24k", range:"Línea económica", label:"", image:"" },
  { id:126, name:"QSM Pulse X", category:"Electrónica", subcategory:"Vapes", price:25, puffs:"30k", range:"Gama alta", label:"", image:"" },
  { id:127, name:"Spaceman Nebula / Prism", category:"Electrónica", subcategory:"Vapes", price:24, puffs:"20k–25k", range:"Gama alta", label:"", image:"" },
  { id:128, name:"Chillax Shake / Beyond", category:"Electrónica", subcategory:"Vapes", price:20, puffs:"12k–15k", range:"Gama alta", label:"", image:"" },
  { id:129, name:"Waka Boost / RabBeats", category:"Electrónica", subcategory:"Vapes", price:20.67, puffs:"10k–15k", range:"Gama alta", label:"", image:"" },
  { id:130, name:"Dummy Vape / Pillow Talk / Waka Sopro", category:"Electrónica", subcategory:"Vapes", price:16.67, puffs:"8k–10k", range:"Gama alta", label:"", image:"" },
  { id:131, name:"Lost Vape 10000 / Raz 6000", category:"Electrónica", subcategory:"Vapes", price:16, puffs:"6k–10k", range:"Gama alta / económica", label:"", image:"" },
  { id:132, name:"Morfbar Smok", category:"Electrónica", subcategory:"Vapes", price:19.33, puffs:"20k", range:"Gama alta", label:"", image:"" },
  { id:133, name:"Lucky Wolf", category:"Electrónica", subcategory:"Vapes", price:19.33, puffs:"25k", range:"Línea económica", label:"", image:"" },
  { id:134, name:"Evo 16000", category:"Electrónica", subcategory:"Vapes", price:19.33, puffs:"16k", range:"Saldos / únicos", label:"", image:"" },
  { id:135, name:"Hulk Hogan's", category:"Electrónica", subcategory:"Vapes", price:13.33, puffs:"8k", range:"Saldos", label:"", image:"" },
  { id:136, name:"Death Row 5000", category:"Electrónica", subcategory:"Vapes", price:8.67, puffs:"5k", range:"Saldos / liquidación", label:"", image:"" },
  { id:137, name:"Snow Wolf 8000", category:"Electrónica", subcategory:"Vapes", price:13.33, puffs:"8k", range:"Saldos", label:"", image:"" }

  /* ---------- ELECTRÓNICA · CELULARES ----------
     Todavía sin productos. Cuando los tengas, copia un producto de arriba
     y usa: category: "Electrónica", subcategory: "Celulares" */
];

/* ==================================================
   TRADUCCIONES DE LA INTERFAZ
   ================================================== */

const translations = {
  es: {
    title: "VIBEX GLOBAL — Detalles que marcan la diferencia",
    metaDescription: "Vibex Global. Una selección de perfumería, joyería y tecnología con una visión contemporánea.",
    announcement: "VIBEX GLOBAL — DETALLES QUE MARCAN LA DIFERENCIA",
    collections: "Colecciones",
    discover: "Descubrir",
    ourVision: "Nuestra visión",
    contact: "Contacto",
    bag: "Bolsa",
    explore: "EXPLORA VIBEX",
    findYourStyle: "Encuentra tu estilo.",
    menuDescription: "Una selección pensada para acompañar cada detalle de tu vida.",
    perfume: "Perfumería",
    jewelry: "Joyería",
    electronics: "Electrónica",
    allProducts: "Todos los productos",
    imageHere: "[COLOCAR IMAGEN AQUÍ]",
    searchLabel: "¿Qué estás buscando?",
    searchPlaceholder: "Buscar productos...",
    close: "Cerrar",
    heroImageHere: "[COLOCAR IMAGEN O VÍDEO DE PORTADA AQUÍ]",
    heroImageNote: "Reemplaza este espacio con tu propio contenido visual.",
    heroEyebrow: "MÁS QUE PRODUCTOS, CONECTAMOS OPORTUNIDADES",
    heroTitle: "Tu estilo.<br>Tu esencia.<br><em>Tu elección.</em>",
    heroDescription: "Descubre una selección de productos pensada para quienes encuentran lo extraordinario en los pequeños detalles.",
    exploreCollection: "Explorar colección",
    heroBottom: "VIBEX GLOBAL · UNA VISIÓN CONTEMPORÁNEA",
    stripOne: "CALIDAD CON INTENCIÓN",
    stripTwo: "DISEÑO ATEMPORAL",
    stripThree: "DETALLES QUE PERDURAN",
    stripFour: "TU CONFIANZA, NUESTRO COMPROMISO",
    curatedSelection: "SELECCIÓN VIBEX",
    collectionsTitle: "El arte de elegir.",
    collectionsDescription: "Diferentes universos, una misma atención por los detalles.",
    collectionOne: "EL ARTE DE LA FRAGANCIA",
    collectionTwo: "DETALLES CON CARÁCTER",
    collectionThree: "TECNOLOGÍA Y DISEÑO",
    ourPhilosophy: "NUESTRA FILOSOFÍA",
    statementTitle: "Menos ruido.<br><em>Más significado.</em>",
    statementDescription: "Creemos en elegir con intención. En productos que expresan personalidad y en una experiencia de compra cuidada de principio a fin.",
    discoverSelection: "Descubrir la selección",
    selectionForYou: "UNA SELECCIÓN PARA TI",
    featuredTitle: "Piezas destacadas.",
    featuredDescription: "Explora nuestras categorías y encuentra tu próximo favorito.",
    all: "Todos",
    noProducts: "No encontramos productos con esos criterios.",
    demoNotice: "Catálogo de demostración. Los productos, precios y descripciones deberán verificarse antes de publicar la tienda.",
    vapesNotice: "Solo para mayores de edad",
    comingSoon: "Próximamente",
    puffsLabel: "Puffs indicados:",
    businessImageHere: "[ESPACIO PARA IMAGEN DE EMPRENDEDORES O NEGOCIOS]",
    businessSectionTitle: "Tu visión merece una oportunidad.<br><em>Crezcamos juntos.</em>",
    businessSectionText: "En Vibex Global creemos que las grandes oportunidades comienzan con una decisión. Descubre productos para tu negocio, explora opciones de compra por volumen y construye tu camino como emprendedor junto a nosotros.",
    businessLink: "Emprende con nosotros",
    benefitOneTitle: "Selección cuidada",
    benefitOneText: "Productos elegidos con atención al detalle.",
    benefitTwoTitle: "Compra sencilla",
    benefitTwoText: "Una experiencia clara desde el primer clic.",
    benefitThreeTitle: "Atención cercana",
    benefitThreeText: "Resolvemos tus dudas antes de confirmar el pedido.",
    benefitFourTitle: "Información clara",
    benefitFourText: "Precios, disponibilidad y condiciones por confirmar.",
    stayConnected: "MANTENTE EN CONTACTO",
    contactTitle: "Hablemos de<br><em>lo que buscas.</em>",
    contactDescription: "Si necesitas información sobre un producto, escríbenos. Estaremos encantados de ayudarte.",
    contactWhatsApp: "Consultar por WhatsApp",
     socialEyebrow: "SÍGUENOS",
    socialPhrase: "Sé parte de la comunidad Vibex.",
    socialText: "No olvides seguirnos en nuestras redes sociales: novedades, lanzamientos y detalles que no te puedes perder.",
    footerPhrase: "Detalles que marcan la diferencia.",
    backToTop: "Volver arriba",
    footerRights: "Todos los derechos reservados.",
    yourSelection: "TU SELECCIÓN",
    yourBag: "Tu bolsa",
    emptyBag: "Tu bolsa está esperando por algo especial.",
    subtotal: "Subtotal estimado",
    checkoutNotice: "El envío y el pago se confirmarán por WhatsApp.",
    sendOrder: "Enviar pedido por WhatsApp",
    continueShopping: "Seguir explorando",
    addToBag: "Añadir a la bolsa",
    askWhatsApp: "Consultar por WhatsApp",
        viewDetail: "Ver detalle",
    viewFragrance: "Descubrir fragancia",
    cookieTitle: "Tu privacidad importa.",
    cookieDescription: "Esta versión de prueba guarda preferencias básicas en tu navegador.",
    cookieClose: "Cerrar",
    cookieAccept: "Entendido",
    products: "productos",
    product: "producto",
    units: "unidades",
    unit: "unidad",
    added: "se añadió a tu bolsa.",
    removed: "Producto eliminado de la bolsa.",
    saveError: "No se pudo guardar la bolsa en este navegador.",
    orderIntro: "Hola, Vibex Global. Quisiera consultar este pedido:",
    singleIntro: "Hola, Vibex Global. Quisiera consultar por",
    totalMessage: "Total estimado:",
    orderEnd: "Por favor, confirmen disponibilidad, precio final, envío y métodos de pago.",
    imageLabel: "[COLOCAR IMAGEN AQUÍ]",
    slideLabel: "Mostrar diapositiva",
    productLabel: "Producto",
    reduceQuantity: "Reducir cantidad",
    increaseQuantity: "Aumentar cantidad",
    removeItem: "Eliminar",
    ariaHome: "Vibex Global, inicio",
    ariaOpenMenu: "Abrir menú",
    ariaCloseMenu: "Cerrar menú",
    ariaMainNav: "Navegación principal",
    ariaLanguage: "Seleccionar idioma",
    ariaSearch: "Buscar",
    ariaSearchPanel: "Búsqueda",
    ariaOpenBag: "Abrir bolsa",
    ariaCloseBag: "Cerrar bolsa",
    ariaBagDrawer: "Bolsa de compras",
    ariaPrev: "Anterior",
    ariaNext: "Siguiente",
    ariaBrandStrip: "Identidad de marca",
    ariaFilter: "Filtrar productos",
    ariaCloseProduct: "Cerrar producto",
    ariaWhatsapp: "Contactar por WhatsApp",
    ariaCookies: "Preferencias de cookies",
    preorderNotice: "En camino a Ecuador · Producto importado",
    preorderButton: "Realizar la pre-reserva",
    preorderIntro: "Hola, Vibex Global. Quisiera hacer la pre-reserva de",
    preorderEnd: "Por favor, indíquenme la fecha estimada de llegada y las condiciones de la pre-reserva.",
  },

  en: {
    title: "VIBEX GLOBAL — Details that make the difference",
    metaDescription: "Vibex Global. A selection of fragrance, jewelry and technology with a contemporary vision.",
    announcement: "VIBEX GLOBAL — DETAILS THAT MAKE THE DIFFERENCE",
    collections: "Collections",
    discover: "Discover",
    ourVision: "Our vision",
    contact: "Contact",
    bag: "Bag",
    explore: "EXPLORE VIBEX",
    findYourStyle: "Find your style.",
    menuDescription: "A selection designed to complement every detail of your life.",
    perfume: "Fragrance",
    jewelry: "Jewelry",
    electronics: "Electronics",
    allProducts: "All products",
    imageHere: "[PLACE IMAGE HERE]",
    searchLabel: "What are you looking for?",
    searchPlaceholder: "Search products...",
    close: "Close",
    heroImageHere: "[PLACE HERO IMAGE OR VIDEO HERE]",
    heroImageNote: "Replace this space with your own visual content.",
    heroEyebrow: "MORE THAN PRODUCTS, WE CONNECT OPPORTUNITIES",
    heroTitle: "Your style.<br>Your essence.<br><em>Your choice.</em>",
    heroDescription: "Discover a selection designed for those who find the extraordinary in the smallest details.",
    exploreCollection: "Explore collection",
    heroBottom: "VIBEX GLOBAL · A CONTEMPORARY VISION",
    stripOne: "QUALITY WITH INTENTION",
    stripTwo: "TIMELESS DESIGN",
    stripThree: "DETAILS THAT LAST",
    stripFour: "YOUR TRUST, OUR COMMITMENT",
    curatedSelection: "THE VIBEX SELECTION",
    collectionsTitle: "The art of choosing.",
    collectionsDescription: "Different worlds, united by attention to detail.",
    collectionOne: "THE ART OF FRAGRANCE",
    collectionTwo: "DETAILS WITH CHARACTER",
    collectionThree: "TECHNOLOGY AND DESIGN",
    ourPhilosophy: "OUR PHILOSOPHY",
    statementTitle: "Less noise.<br><em>More meaning.</em>",
    statementDescription: "We believe in choosing with intention, products that express personality, and a thoughtful shopping experience from beginning to end.",
    discoverSelection: "Discover the selection",
    selectionForYou: "A SELECTION FOR YOU",
    featuredTitle: "Featured pieces.",
    featuredDescription: "Explore our categories and find your next favorite.",
    all: "All",
    noProducts: "We couldn't find products matching your search.",
    demoNotice: "Demo catalog. Products, prices, and descriptions must be verified before the store goes live.",
    vapesNotice: "Adults only",
    comingSoon: "Coming soon",
    puffsLabel: "Advertised puffs:",
    businessImageHere: "[SPACE FOR ENTREPRENEURS OR BUSINESS IMAGE]",
    businessSectionTitle: "Your vision deserves an opportunity.<br><em>Let's grow together.</em>",
    businessSectionText: "At Vibex Global we believe great opportunities begin with a decision. Discover products for your business, explore volume purchase options and build your path as an entrepreneur with us.",
    businessLink: "Start your venture with us",
    benefitOneTitle: "Thoughtful selection",
    benefitOneText: "Products selected with attention to detail.",
    benefitTwoTitle: "Simple shopping",
    benefitTwoText: "A clear experience from the very first click.",
    benefitThreeTitle: "Personal assistance",
    benefitThreeText: "We answer your questions before confirming an order.",
    benefitFourTitle: "Clear information",
    benefitFourText: "Prices, availability, and terms to be confirmed.",
    stayConnected: "STAY IN TOUCH",
    contactTitle: "Let's talk about<br><em>what you're looking for.</em>",
    contactDescription: "Need information about a product? Send us a message. We'll be happy to help.",
    contactWhatsApp: "Contact us on WhatsApp",
    socialEyebrow: "FOLLOW US",
    socialPhrase: "Be part of the Vibex community.",
    socialText: "Don't forget to follow us on social media: news, launches and details you can't miss.",
    footerPhrase: "Details that make the difference.",
    backToTop: "Back to top",
    footerRights: "All rights reserved.",
    yourSelection: "YOUR SELECTION",
    yourBag: "Your bag",
    emptyBag: "Your bag is waiting for something special.",
    subtotal: "Estimated subtotal",
    checkoutNotice: "Shipping and payment will be confirmed on WhatsApp.",
    sendOrder: "Send order on WhatsApp",
    continueShopping: "Continue exploring",
    addToBag: "Add to bag",
    askWhatsApp: "Ask on WhatsApp",
        viewDetail: "View details",
    viewFragrance: "Discover fragrance",
    cookieTitle: "Your privacy matters.",
    cookieDescription: "This demo stores basic preferences in your browser.",
    cookieClose: "Close",
    cookieAccept: "Got it",
    products: "products",
    product: "product",
    units: "units",
    unit: "unit",
    added: "was added to your bag.",
    removed: "Product removed from your bag.",
    saveError: "The bag could not be saved in this browser.",
    orderIntro: "Hello, Vibex Global. I would like to ask about this order:",
    singleIntro: "Hello, Vibex Global. I would like to ask about",
    totalMessage: "Estimated total:",
    orderEnd: "Please confirm availability, final price, shipping and payment methods.",
    imageLabel: "[PLACE IMAGE HERE]",
    slideLabel: "Show slide",
    productLabel: "Product",
    reduceQuantity: "Reduce quantity",
    increaseQuantity: "Increase quantity",
    removeItem: "Remove",
    ariaHome: "Vibex Global, home",
    ariaOpenMenu: "Open menu",
    ariaCloseMenu: "Close menu",
    ariaMainNav: "Main navigation",
    ariaLanguage: "Select language",
    ariaSearch: "Search",
    ariaSearchPanel: "Search",
    ariaOpenBag: "Open bag",
    ariaCloseBag: "Close bag",
    ariaBagDrawer: "Shopping bag",
    ariaPrev: "Previous",
    ariaNext: "Next",
    ariaBrandStrip: "Brand identity",
    ariaFilter: "Filter products",
    ariaCloseProduct: "Close product",
    ariaWhatsapp: "Contact us on WhatsApp",
    ariaCookies: "Cookie preferences",
    preorderNotice: "On its way to Ecuador · Imported product",
    preorderButton: "Make a pre-reservation",
    preorderIntro: "Hello, Vibex Global. I would like to pre-reserve",
    preorderEnd: "Please let me know the estimated arrival date and the pre-reservation terms.",
  }
};

/* ==================================================
   HERRAMIENTAS GENERALES
   ================================================== */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

const CATEGORY_ORDER = ["Perfumería", "Joyería", "Electrónica"];
const SUBCATEGORY_ORDER = ["Vapes", "Celulares", "Otros"];

const categoryLabels = {
  es: {
    "Todos": "Todos",
    "Perfumería": "Perfumería",
    "Joyería": "Joyería",
    "Electrónica": "Electrónica"
  },
  en: {
    "Todos": "All",
    "Perfumería": "Fragrance",
    "Joyería": "Jewelry",
    "Electrónica": "Electronics"
  }
};

const subcategoryLabels = {
  es: { Vapes: "Vapes", Celulares: "Celulares", Otros: "Otros electrónicos" },
  en: { Vapes: "Vapes", Celulares: "Mobile phones", Otros: "Other electronics" }
};

/* Gamas de los vapes (se traducen al inglés) */
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
  if (currentLanguage !== "en") return range;
  return RANGE_EN.reduce((text, [es, en]) => text.split(es).join(en), range);
}

function readStorage(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function money(amount) {
  const locale = currentLanguage === "en" ? "en-US" : "es-EC";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD"
  }).format(amount);
}

let currentLanguage = readStorage(STORAGE_LANGUAGE, "es");
if (!["es", "en"].includes(currentLanguage)) currentLanguage = "es";

let activeFilter = "Todos";
let searchTerm = "";
let currentSlide = 0;
let currentProductId = null;
let slideTimer = null;
let toastTimer = null;

function translatedProductCategory(category) {
  return categoryLabels[currentLanguage][category] || category;
}

/* Texto descriptivo de cada producto, en el idioma activo */
function productDescription(product) {
  if (product.puffs) {
    const range = translateRange(product.range || "");
    const puffs = `${translations[currentLanguage].puffsLabel} ${product.puffs}`;
    return range ? `${range} · ${puffs}` : puffs;
  }

  if (currentLanguage === "en") return product.descriptionEn || "";
  return product.description || "";
}

/* ==================================================
   IDIOMAS
   ================================================== */

function updateMenuLabel() {
  const open = mainNav?.classList.contains("open");
  const key = open ? "ariaCloseMenu" : "ariaOpenMenu";
  mobileMenuButton?.setAttribute("aria-label", translations[currentLanguage][key]);
}

function applyTranslations() {
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
   if (!document.body.hasAttribute("data-product-page")) {
    document.title = dictionary.title;
    $("meta[name='description']")?.setAttribute("content", dictionary.metaDescription);
  }
  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      const value = dictionary[key];

      /* Los textos con <br> o <em> están escritos por nosotros en este archivo */
      if (/<[a-z]/i.test(value)) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    }
  });

  $$("[data-i18n-placeholder]").forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.placeholder = value;
  });

  $$("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });

  $$("[data-i18n-title]").forEach((element) => {
    const value = dictionary[element.dataset.i18nTitle];
    if (value) element.setAttribute("title", value);
  });

  $$("[data-language]").forEach((button) => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  $$(".filter-button").forEach((button) => {
    button.textContent =
      categoryLabels[currentLanguage][button.dataset.filter] ||
      button.dataset.filter;
  });

  heroDots?.querySelectorAll("button").forEach((button, index) => {
    button.setAttribute("aria-label", `${dictionary.slideLabel} ${index + 1}`);
  });

  updateMenuLabel();
  updateSlideCounter();
  renderProducts();
  renderCart();
}

$$("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    writeStorage(STORAGE_LANGUAGE, currentLanguage);
    applyTranslations();
  });
});

/* ==================================================
   MENSAJES TEMPORALES
   ================================================== */

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* ==================================================
   MENÚ DESPLEGABLE
   ================================================== */

const collectionsTrigger = $("#collectionsTrigger");
const megaMenu = $("#megaMenu");
const mainNav = $("#mainNav");
const mobileMenuButton = $("#mobileMenuButton");

function setMegaMenu(open) {
  if (!megaMenu || !collectionsTrigger) return;

  megaMenu.classList.toggle("open", open);
  megaMenu.setAttribute("aria-hidden", String(!open));
  collectionsTrigger.setAttribute("aria-expanded", String(open));
}

collectionsTrigger?.addEventListener("click", (event) => {
  event.stopPropagation();
  setMegaMenu(!megaMenu.classList.contains("open"));
});

collectionsTrigger?.addEventListener("mouseenter", () => {
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    setMegaMenu(true);
  }
});

megaMenu?.addEventListener("mouseleave", () => {
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    setMegaMenu(false);
  }
});

mobileMenuButton?.addEventListener("click", () => {
  const open = !mainNav.classList.contains("open");

  mainNav.classList.toggle("open", open);
  mobileMenuButton.setAttribute("aria-expanded", String(open));
  updateMenuLabel();

  if (!open) setMegaMenu(false);
});

$$(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav?.classList.remove("open");
    mobileMenuButton?.setAttribute("aria-expanded", "false");
    updateMenuLabel();
    setMegaMenu(false);
  });
});

document.addEventListener("click", (event) => {
  if (
    megaMenu &&
    !megaMenu.contains(event.target) &&
    !collectionsTrigger?.contains(event.target)
  ) {
    setMegaMenu(false);
  }
});

$$("[data-category-link]").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.categoryLink);
    setMegaMenu(false);
    mainNav?.classList.remove("open");
    mobileMenuButton?.setAttribute("aria-expanded", "false");
    updateMenuLabel();

    $("#destacados")?.scrollIntoView({ behavior: "smooth" });
  });
});

/* ==================================================
   BUSCADOR
   ================================================== */

const searchPanel = $("#searchPanel");
const searchInput = $("#searchInput");

$("#searchToggle")?.addEventListener("click", () => {
  const open = !searchPanel.classList.contains("open");
  searchPanel.classList.toggle("open", open);

  if (open) window.setTimeout(() => searchInput?.focus(), 100);
});

$("#closeSearch")?.addEventListener("click", () => {
  searchPanel?.classList.remove("open");
});

searchInput?.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLocaleLowerCase(
    currentLanguage === "es" ? "es" : "en"
  );
  renderProducts();
});

/* ==================================================
   CARRUSEL DE PORTADA
   Son tres composiciones de color, sin fotografías.
   Más adelante podrás colocar tus propias imágenes.
   ================================================== */

const slideBackgrounds = [
  "radial-gradient(ellipse at 76% 36%, rgba(180,154,101,.18), transparent 32%), linear-gradient(125deg,#30382e 0%,#1c251e 55%,#101511 100%)",
  "radial-gradient(ellipse at 70% 45%, rgba(191,175,139,.2), transparent 36%), linear-gradient(130deg,#34352c 0%,#24271f 55%,#131712 100%)",
  "radial-gradient(ellipse at 80% 40%, rgba(137,153,133,.2), transparent 36%), linear-gradient(125deg,#28342d 0%,#1b251e 58%,#111611 100%)"
];

const heroImage = $("#heroImage");
const heroDots = $("#heroDots");

function updateSlideCounter() {
  const number = $("#slideNumber");
  if (number) number.textContent = String(currentSlide + 1).padStart(2, "0");

  heroDots?.querySelectorAll("button").forEach((button, index) => {
    button.classList.toggle("active", index === currentSlide);
    button.setAttribute("aria-pressed", String(index === currentSlide));
  });
}

function showSlide(index) {
  currentSlide = (index + slideBackgrounds.length) % slideBackgrounds.length;

  if (heroImage) {
    heroImage.style.background = slideBackgrounds[currentSlide];
  }

  updateSlideCounter();
}

function restartSlideTimer() {
  window.clearInterval(slideTimer);

  slideTimer = window.setInterval(() => {
    if (!document.hidden) showSlide(currentSlide + 1);
  }, 6500);
}

if (heroDots) {
  slideBackgrounds.forEach((background, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute(
      "aria-label",
      `${translations[currentLanguage].slideLabel} ${index + 1}`
    );

    button.addEventListener("click", () => {
      showSlide(index);
      restartSlideTimer();
    });

    heroDots.appendChild(button);
  });
}

$("#heroPrev")?.addEventListener("click", () => {
  showSlide(currentSlide - 1);
  restartSlideTimer();
});

$("#heroNext")?.addEventListener("click", () => {
  showSlide(currentSlide + 1);
  restartSlideTimer();
});

showSlide(0);
restartSlideTimer();

/* ==================================================
   CATÁLOGO
   ================================================== */

/* Cantidad elegida en cada tarjeta antes de añadir (por producto) */
const cardQuantities = {};

function getCardQuantity(productId) {
  return cardQuantities[productId] || 1;
}

function setCardQuantity(productId, quantity) {
  cardQuantities[productId] = Math.max(1, Math.min(99, quantity));
}

/* Tarjeta tipo Apple/Amazon: TODA la tarjeta es un enlace a la página del producto.
   La etiqueta va DEBAJO de la foto para no tapar el diseño de la imagen. */
function buildLinkCard(product, index) {
  const dictionary = translations[currentLanguage];

    /* Con página propia (url) es un enlace; sin página todavía, abre la vista rápida */
  const card = el(product.url ? "a" : "button", "product-card product-card--link");

  if (product.url) {
    card.href = product.url;
  } else {
    card.type = "button";
    card.addEventListener("click", () => openProductModal(product.id));
  }
  card.style.animationDelay = `${Math.min(index * 50, 250)}ms`;
  card.setAttribute("aria-label", `${product.name} — ${money(product.price)}`);

  /* Foto a todo el marco */
  const visual = el("div", "product-visual");
  const frame = el("div", "product-image-frame");

  if (product.image) {
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";
    frame.appendChild(image);
  } else {
    const placeholder = el("span", "product-placeholder-label");
    placeholder.append(
      el("span", "placeholder-symbol", "＋"),
      el("span", "", dictionary.imageLabel)
    );
    frame.appendChild(placeholder);
  }

  visual.appendChild(frame);

  /* Categoría a la izquierda y etiqueta a la derecha */
  const meta = el("div", "product-meta");
    meta.appendChild(el("span", "product-category", translatedProductCategory(product.category)));

  /* Si está en pre-reserva y no tiene otra etiqueta, muestra PRÓXIMAMENTE */
  const labelKey = product.label || (product.preorder ? "PRÓXIMAMENTE" : "");

  if (labelKey) {
    const info = labelConfig[labelKey];
    const text = info && currentLanguage === "en" ? info.en : labelKey;
    const label = el("span", "product-label", text);
    label.dataset.tone = info ? info.tone : "gold";
    meta.appendChild(label);
  }

  /* Nombre, frase corta, precio y enlace */
  const details = el("div", "product-details");
  details.append(
    meta,
    el("h3", "product-name", product.name),
    el("p", "product-description", productDescription(product))
  );

  const row = el("div", "product-price-row product-price-row--link");
  const linkText = product.category === "Perfumería"
    ? dictionary.viewFragrance
    : dictionary.viewDetail;

  const view = el("span", "product-view", linkText);
  const arrow = el("span", "arrow");
  arrow.setAttribute("aria-hidden", "true");
  view.appendChild(arrow);

  row.append(el("span", "product-price", money(product.price)), view);
  details.appendChild(row);
  card.append(visual, details);

  return card;
}

function buildProductCard(product, index) {
   if (product.url || product.category === "Perfumería") return buildLinkCard(product, index);

  const dictionary = translations[currentLanguage];

  const card = el("article", "product-card");
  card.style.animationDelay = `${Math.min(index * 50, 250)}ms`;

  /* Imagen y etiqueta */
  const visual = el("div", "product-visual");

  const imageButton = el("button", "product-image-button");
  imageButton.type = "button";
  imageButton.setAttribute("aria-label", `${dictionary.productLabel}: ${product.name}`);

  if (product.image) {
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";
    imageButton.appendChild(image);
  } else {
    const placeholder = el("span", "product-placeholder-label");
    placeholder.append(
      el("span", "placeholder-symbol", "＋"),
      el("span", "", dictionary.imageLabel)
    );
    imageButton.appendChild(placeholder);
  }

  imageButton.addEventListener("click", () => openProductModal(product.id));
  visual.appendChild(imageButton);

  if (product.label) {
    const info = labelConfig[product.label];
    const text = info && currentLanguage === "en" ? info.en : product.label;
    const label = el("span", "product-label", text);
    label.dataset.tone = info ? info.tone : "gold";
    visual.appendChild(label);
  }

  /* Datos del producto */
  const details = el("div", "product-details");

  const categoryText = product.subcategory
    ? `${translatedProductCategory(product.category)} · ${subcategoryLabels[currentLanguage][product.subcategory]}`
    : translatedProductCategory(product.category);

  const category = el("span", "product-category", categoryText);
  const name = el("h3", "product-name", product.name);
  const description = el("p", "product-description", productDescription(product));

  /* Precio y cantidad */
  const priceRow = el("div", "product-price-row");
  const price = el("span", "product-price", money(product.price));

  const quantityBox = el("div", "card-quantity");

  const minus = el("button", "", "−");
  minus.type = "button";
  minus.setAttribute("aria-label", `${dictionary.reduceQuantity}: ${product.name}`);

  const quantityValue = el("span", "", String(getCardQuantity(product.id)));

  const plus = el("button", "", "+");
  plus.type = "button";
  plus.setAttribute("aria-label", `${dictionary.increaseQuantity}: ${product.name}`);

  minus.addEventListener("click", () => {
    setCardQuantity(product.id, getCardQuantity(product.id) - 1);
    quantityValue.textContent = String(getCardQuantity(product.id));
  });

  plus.addEventListener("click", () => {
    setCardQuantity(product.id, getCardQuantity(product.id) + 1);
    quantityValue.textContent = String(getCardQuantity(product.id));
  });

  quantityBox.append(minus, quantityValue, plus);
  priceRow.append(price, quantityBox);

  /* Botones */
  const actions = el("div", "product-actions");

  const addButton = el("button", "card-button card-button--add", dictionary.addToBag);
  addButton.type = "button";
  addButton.addEventListener("click", () => {
    addToCart(product.id, getCardQuantity(product.id));
    setCardQuantity(product.id, 1);
    quantityValue.textContent = "1";
  });

  const askButton = el("button", "card-button card-button--ask", dictionary.askWhatsApp);
const askArrow = el("span", "arrow");
askArrow.setAttribute("aria-hidden", "true");
askButton.appendChild(askArrow);
  askButton.type = "button";
  askButton.addEventListener("click", () => {
    consultProduct(product, getCardQuantity(product.id));
  });

  actions.append(addButton, askButton);

  details.append(category, name, description, priceRow, actions);
  card.append(visual, details);

  return card;
}

function renderProducts() {
  const grid = $("#productGrid");
  const total = $("#productTotal");
  const empty = $("#emptyMessage");

  if (!grid) return;

  const dictionary = translations[currentLanguage];

  const filtered = products.filter((product) => {
    const categoryMatches =
      activeFilter === "Todos" || product.category === activeFilter;

    const text = [
      product.name,
      product.category,
      translatedProductCategory(product.category),
      product.subcategory ? subcategoryLabels[currentLanguage][product.subcategory] : "",
      productDescription(product)
    ].join(" ").toLocaleLowerCase(currentLanguage);

    return categoryMatches && text.includes(searchTerm);
  });

  /* En "Todos" los productos se ordenan por categoría */
  filtered.sort((a, b) =>
    CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
  );

  grid.replaceChildren();

  if (activeFilter === "Electrónica") {
    /* Electrónica se muestra dividida: Vapes, Celulares y Otros */
    let index = 0;

    SUBCATEGORY_ORDER.forEach((key) => {
      const items = filtered.filter((product) => product.subcategory === key);

      if (items.length === 0 && searchTerm) return;

      const heading = el("div", "subcategory-heading");
      heading.appendChild(el("h3", "", subcategoryLabels[currentLanguage][key]));

      const note = key === "Vapes" && items.length ? dictionary.vapesNotice : "";
      if (note) heading.appendChild(el("p", "", note));

      grid.appendChild(heading);

      if (items.length === 0) {
        grid.appendChild(el("p", "subcategory-soon", dictionary.comingSoon));
        return;
      }

      items.forEach((product) => {
        grid.appendChild(buildProductCard(product, index));
        index += 1;
      });
    });
  } else {
    filtered.forEach((product, index) => {
      grid.appendChild(buildProductCard(product, index));
    });
  }

  if (total) {
    const count = filtered.length;
    total.textContent = `${count} ${count === 1 ? dictionary.product : dictionary.products}`;
  }

  if (empty) empty.hidden = filtered.length !== 0;
}

function setFilter(category) {
  activeFilter = category;

  $$(".filter-button").forEach((button) => {
    const active = button.dataset.filter === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderProducts();
}

$$(".filter-button").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

$$("[data-collection]").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.collection);
    $("#destacados")?.scrollIntoView({ behavior: "smooth" });
  });
});

/* ==================================================
   VISTA AMPLIADA DE PRODUCTO
   ================================================== */

const productModal = $("#productModal");

function openProductModal(productId) {
  const product = products.find((entry) => entry.id === productId);
  if (!product) return;

  currentProductId = productId;

  $("#modalCategory").textContent =
    translatedProductCategory(product.category);

  $("#modalName").textContent = product.name;
  $("#modalPrice").textContent = money(product.price);
  $("#modalDescription").textContent = productDescription(product);
    /* Pre-reserva: aviso "en camino" y un solo botón */
  const dictionary = translations[currentLanguage];
  const notice = $("#modalNotice");

  if (notice) {
    notice.textContent = dictionary.preorderNotice;
    notice.hidden = !product.preorder;
  }

  const addLabel = $("#modalAddLabel");
  if (addLabel) {
    addLabel.textContent = product.preorder ? dictionary.preorderButton : dictionary.addToBag;
  }

  const addIcon = $("#modalAddIcon");
  if (addIcon) addIcon.hidden = Boolean(product.preorder);

  const modalImage = $("#modalImage");
  const placeholder = $(".modal-image-placeholder");

  if (product.image) {
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalImage.hidden = false;
    placeholder.hidden = true;
  } else {
    modalImage.removeAttribute("src");
    modalImage.alt = "";
    modalImage.hidden = true;
    placeholder.hidden = false;
  }

  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  $("#modalClose")?.focus();
}

function closeProductModal() {
  productModal?.classList.remove("open");
  productModal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
  currentProductId = null;
}

$("#modalClose")?.addEventListener("click", closeProductModal);
$("#modalBackdrop")?.addEventListener("click", closeProductModal);

$("#modalAdd")?.addEventListener("click", () => {
  if (currentProductId === null) return;

  const product = products.find((entry) => entry.id === currentProductId);

  /* En camino: la pre-reserva se envía por WhatsApp y no entra a la bolsa */
  if (product && product.preorder) {
    preorderProduct(product);
    closeProductModal();
    return;
  }

  addToCart(currentProductId, 1);
  closeProductModal();
});

/* ==================================================
   BOLSA DE COMPRA
   Cada producto es una sola línea; si se añade otra vez, suma cantidad.
   ================================================== */

function loadCart() {
  try {
    const saved = readStorage(STORAGE_CART, "[]");
    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((item) =>
        products.some((product) => product.id === Number(item.id))
      )
      .map((item) => ({
        id: Number(item.id),
        quantity: Math.max(1, Math.min(99, Number(item.quantity) || 1))
      }));
  } catch {
    return [];
  }
}

let cart = loadCart();

function saveCart() {
  const success = writeStorage(STORAGE_CART, JSON.stringify(cart));

  if (!success) showToast(translations[currentLanguage].saveError);
}

function getCartDetails() {
  return cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return null;

      return {
        ...product,
        quantity: item.quantity,
        lineTotal: product.price * item.quantity
      };
    })
    .filter(Boolean);
}

function bumpCartCount() {
  const counter = $("#cartCount");
  if (!counter) return;

  counter.classList.remove("bump");
  void counter.offsetWidth;
  counter.classList.add("bump");
}

function addToCart(productId, quantity = 1) {
  const product = products.find((entry) => entry.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity = Math.min(99, existing.quantity + quantity);
  } else {
    cart.push({ id: productId, quantity: Math.min(99, quantity) });
  }

  saveCart();
  renderCart();
  bumpCartCount();

  const prefix = quantity > 1 ? `${quantity} × ` : "";
  showToast(`${prefix}${product.name} ${translations[currentLanguage].added}`);
}

function changeQuantity(productId, amount) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.id !== productId);
  } else {
    item.quantity = Math.min(99, item.quantity);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();

  showToast(translations[currentLanguage].removed);
}

function renderCart() {
  const itemsContainer = $("#cartItems");
  if (!itemsContainer) return;

  const dictionary = translations[currentLanguage];
  const details = getCartDetails();
  const units = details.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = details.reduce((sum, item) => sum + item.lineTotal, 0);

  $("#cartCount").textContent = units;
  $("#drawerCount").textContent = `(${units})`;
  $("#cartSubtotal").textContent = money(subtotal);

  const summary = $("#cartSummary");
  if (summary) {
    const productWord = details.length === 1 ? dictionary.product : dictionary.products;
    const unitWord = units === 1 ? dictionary.unit : dictionary.units;
    summary.textContent = `${details.length} ${productWord} · ${units} ${unitWord}`;
  }

  itemsContainer.replaceChildren();

  details.forEach((product) => {
    const line = el("div", "cart-line");

    let image;
    if (product.image) {
      image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
    } else {
      image = el("div", "cart-line-image", "＋");
    }

    const info = el("div", "cart-line-info");
    const name = el("h3", "", product.name);
    const category = el("small", "", translatedProductCategory(product.category));

    const controls = el("div", "quantity-controls");

    const minus = el("button", "", "−");
    minus.type = "button";
    minus.setAttribute("aria-label", `${dictionary.reduceQuantity}: ${product.name}`);
    minus.addEventListener("click", () => changeQuantity(product.id, -1));

    const quantity = el("span", "", String(product.quantity));

    const plus = el("button", "", "+");
    plus.type = "button";
    plus.setAttribute("aria-label", `${dictionary.increaseQuantity}: ${product.name}`);
    plus.addEventListener("click", () => changeQuantity(product.id, 1));

    controls.append(minus, quantity, plus);
    info.append(name, category, controls);

    const side = el("div", "cart-line-side");
    const price = el("span", "cart-line-price", money(product.lineTotal));

    const remove = el("button", "remove-item", dictionary.removeItem);
    remove.type = "button";
    remove.addEventListener("click", () => removeFromCart(product.id));

    side.append(price, remove);
    line.append(image, info, side);
    itemsContainer.appendChild(line);
  });

  const isEmpty = details.length === 0;

  $("#cartEmpty").hidden = !isEmpty;
  $("#cartFooter").hidden = isEmpty;
  itemsContainer.hidden = isEmpty;
}

function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#drawerBackdrop").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  $("#cartClose")?.focus();
}

function closeCart() {
  $("#cartDrawer")?.classList.remove("open");
  $("#drawerBackdrop")?.classList.remove("open");
  $("#cartDrawer")?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
}

$("#cartToggle")?.addEventListener("click", openCart);
$("#cartClose")?.addEventListener("click", closeCart);
$("#drawerBackdrop")?.addEventListener("click", closeCart);

$("#continueShopping")?.addEventListener("click", () => {
  closeCart();
  $("#destacados")?.scrollIntoView({ behavior: "smooth" });
});

/* ==================================================
   MENSAJES DE WHATSAPP
   ================================================== */

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");

  if (!newWindow) window.location.href = url;
}

/* Un solo producto: "Quisiera consultar por Hawas Pink × 2 — $64,00." */
/* Pre-reserva de un producto que viene en camino */
function preorderProduct(product) {
  const dictionary = translations[currentLanguage];

  openWhatsApp(
    `${dictionary.preorderIntro} ${product.name} — ${money(product.price)}.\n\n${dictionary.preorderEnd}`
  );
}
function consultProduct(product, quantity) {
  const dictionary = translations[currentLanguage];

  const message =
    `${dictionary.singleIntro} ${product.name} × ${quantity} — ` +
    `${money(product.price * quantity)}.`;

  openWhatsApp(message);
}

/* Pedido completo: agrupado por categoría, con cantidades y total */
function buildOrderMessage(details) {
  const dictionary = translations[currentLanguage];

  const groups = [];

  details.forEach((item) => {
    let group = groups.find((entry) => entry.category === item.category);

    if (!group) {
      group = { category: item.category, items: [] };
      groups.push(group);
    }

    group.items.push(item);
  });

  groups.sort((a, b) =>
    CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
  );

  const lines = [dictionary.orderIntro, ""];

  groups.forEach((group) => {
    lines.push(translatedProductCategory(group.category));

    group.items.forEach((item) => {
      lines.push(`• ${item.name} × ${item.quantity} — ${money(item.lineTotal)}`);
    });

    lines.push("");
  });

  const units = details.reduce((sum, item) => sum + item.quantity, 0);
  const total = details.reduce((sum, item) => sum + item.lineTotal, 0);
  const unitWord = units === 1 ? dictionary.unit : dictionary.units;

  lines.push(`${dictionary.totalMessage} ${money(total)} (${units} ${unitWord})`);
  lines.push("");
  lines.push(dictionary.orderEnd);

  return lines.join("\n");
}

$("#checkoutButton")?.addEventListener("click", () => {
  const details = getCartDetails();

  if (details.length === 0) {
    showToast(translations[currentLanguage].emptyBag);
    return;
  }

  openWhatsApp(buildOrderMessage(details));
});

/* ==================================================
   AVISO DE COOKIES DE DEMOSTRACIÓN
   ================================================== */

const cookieNotice = $("#cookieNotice");
const cookieChoice = readStorage(STORAGE_COOKIE);

if (!cookieChoice) {
  window.setTimeout(() => cookieNotice?.classList.add("open"), 1200);
}

function saveCookieChoice(choice) {
  writeStorage(STORAGE_COOKIE, choice);
  cookieNotice?.classList.remove("open");
}

$("#cookieAccept")?.addEventListener("click", () => saveCookieChoice("accepted"));
$("#cookieDismiss")?.addEventListener("click", () => saveCookieChoice("dismissed"));

/* ==================================================
   ANIMACIONES AL DESPLAZARSE
   ================================================== */

const revealElements = $$(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -25px 0px"
  });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

/* ==================================================
   CERRAR ELEMENTOS CON ESCAPE
   ================================================== */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    closeProductModal();
    setMegaMenu(false);
    searchPanel?.classList.remove("open");
    mainNav?.classList.remove("open");
    mobileMenuButton?.setAttribute("aria-expanded", "false");
    updateMenuLabel();
  }
});

/* AÑO DEL PIE DE PÁGINA */

const yearElement = $("#currentYear");
if (yearElement) yearElement.textContent = new Date().getFullYear();

/* PRIMER DIBUJO DE LA PÁGINA */

applyTranslations();