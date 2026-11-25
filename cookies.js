"use strict";

/* ==================================================
   VIBEX GLOBAL — CENTRO LEGAL (ventana emergente)
   Un solo lugar para condiciones, devoluciones, privacidad y cookies.
   Lo usan la tienda, las páginas de producto, Vibex Business y las
   páginas legales. Español e inglés.
   ================================================== */

(function () {
  const CHOICE_KEY = "vibexGlobalCookieChoiceV1";
  const PREFERENCE_KEYS = [
    "vibexGlobalLanguageV1",
    "vibexGlobalPromoV1",
    "vibexBusinessLanguage"
  ];

  /* ==============================================
     TEXTOS DE LA VENTANA
     ============================================== */

  const UI = {
    es: {
      eyebrow: "VIBEX GLOBAL",
      titleFirst: "Antes de continuar",
      titleReturn: "Condiciones y privacidad",
      introFirst: "Queremos que tu compra sea clara y segura. Esto es lo esencial; toca cada tema para ver el detalle.",
      introReturn: "Toca cada tema para ver el detalle de nuestras condiciones.",
      points: [
        ["Pago previo", "Por depósito o transferencia. No hay pago contra entrega."],
        ["Entrega en 24 horas", "Con motorizado y seguimiento, desde que se confirma tu pago."],
        ["Revisa tu pedido", "Reporta daños o faltantes dentro de las 24 horas de recibir."],
        ["Mayores de 18 años", "Los vapes se venden solo a adultos, con verificación al entregar."]
      ],
      docsLabel: "Texto completo:",
      docTerms: "Términos de compra",
      docPrivacy: "Política de privacidad",
      note: "Al comprar aceptas los Términos y Condiciones de Compra. Estas condiciones se rigen por las leyes del Ecuador. En caso de discrepancia entre idiomas, prevalece el español. Versión 1.1 · 24 de noviembre de 2026.",
      accept: "Aceptar",
      reject: "Rechazar",
      settings: "Configurar",
      save: "Guardar elección",
      close: "Cerrar",
      essentialTitle: "Esenciales",
      essentialText: "Necesarias para que la bolsa y esta ventana funcionen. Siempre activas.",
      prefsTitle: "Preferencias",
      prefsText: "Recuerdan tu idioma y tu código promocional entre visitas."
    },
    en: {
      eyebrow: "VIBEX GLOBAL",
      titleFirst: "Before you continue",
      titleReturn: "Terms and privacy",
      introFirst: "We want your purchase to be clear and safe. Here is the essence; tap each topic for the details.",
      introReturn: "Tap each topic to see the details of our conditions.",
      points: [
        ["Prepaid orders", "By bank deposit or transfer. No cash on delivery."],
        ["Delivery within 24 hours", "By courier with tracking, from the moment your payment is confirmed."],
        ["Check your order", "Report damage or missing items within 24 hours of receiving."],
        ["Adults only (18+)", "Vapes are sold only to adults, with age verification at delivery."]
      ],
      docsLabel: "Full text:",
      docTerms: "Terms of purchase",
      docPrivacy: "Privacy policy",
      note: "By purchasing, you accept the Terms and Conditions of Purchase. These conditions are governed by the laws of Ecuador. In case of discrepancy between languages, the Spanish version prevails. Version 1.1 · November 24, 2026.",
      accept: "Accept",
      reject: "Reject",
      settings: "Settings",
      save: "Save my choice",
      close: "Close",
      essentialTitle: "Essential",
      essentialText: "Needed for the bag and this window to work. Always on.",
      prefsTitle: "Preferences",
      prefsText: "Remember your language and promo code between visits."
    }
  };

  /* ==============================================
     TEMAS DESPLEGABLES
     Cada bloque puede ser: { p: "texto" }, { list: [ ["Título", "texto"] ] },
     { subs: [ { title, blocks } ] } o { cookies: true }
     ============================================== */

  const SECTIONS = {
    es: [
      {
        id: "payment",
        title: "Pago y confirmación del pedido",
        blocks: [{ list: [
          ["Cómo se paga", "Solo por depósito o transferencia bancaria. No hay pago contra entrega, para garantizar la disponibilidad de los productos y la seriedad de cada pedido."],
          ["Cuándo queda confirmado", "Cuando te confirmamos por escrito la disponibilidad, el precio final, la entrega y la forma de pago, y verificamos tu pago. Ningún pedido se despacha sin pago verificado."],
          ["Evita fraudes", "Solo entregamos datos de cuenta por nuestros canales oficiales: WhatsApp +593 98 469 2292, contact.vibexglobal@gmail.com y @vibex.global. Nunca pedimos claves ni códigos de verificación."],
          ["Precios", "En dólares (USD). El valor final, con impuestos aplicables y envío si lo hubiera, se confirma por escrito antes de pagar, y ese valor se respeta."],
          ["Códigos promocionales", "Uno por pedido, solo en las categorías y fechas indicadas. No son acumulables ni aplican a productos de venta restringida."]
        ] }]
      },
      {
        id: "reserve",
        title: "Pedidos bajo reserva",
        blocks: [{ list: [
          ["Cuándo aplica", "Productos que no están disponibles de inmediato en el Ecuador (“Próximamente” o “En camino”), productos de emprendedores y pedidos de Vibex Business que lo requieran. Te lo informamos antes de pagar."],
          ["Cómo se paga", "Reserva del 30% del precio y el 70% restante antes del despacho."],
          ["Seguimiento", "Te damos por escrito el plazo estimado y te enviamos un reporte semanal por WhatsApp sobre dónde está tu pedido."],
          ["Mitad del plazo", "Si pasada la mitad del plazo comprometido no podemos demostrar un avance verificable, puedes cancelar y recibir el reembolso íntegro en un máximo de 5 días hábiles."],
          ["Si desistes tú", "Antes de que pidamos el producto al proveedor, devolvemos la reserva completa. Después, solo descontamos costos reales y no recuperables, justificados por escrito, hasta el monto de la reserva."],
          ["Causas ajenas", "Aduana o transporte pueden extender los plazos; te avisamos y, en ese caso, puedes cancelar con reembolso íntegro."]
        ] }]
      },
      {
        id: "delivery",
        title: "Entrega y seguimiento",
        blocks: [{ list: [
          ["Plazo", "Productos disponibles: máximo 24 horas desde la confirmación del pago, en las zonas de cobertura que confirmamos por WhatsApp antes de pagar."],
          ["Seguimiento", "Entregamos con motorizados que comparten contigo su ubicación durante el envío."],
          ["Tu parte", "Dirección correcta, teléfono activo y alguien disponible para recibir. Si la entrega falla por causas del cliente, coordinamos una nueva y te avisamos antes de cualquier costo adicional."],
          ["Fecha de recepción", "Para los plazos de revisión y devolución contamos desde la entrega registrada por el motorizado."]
        ] }]
      },
      {
        id: "check",
        title: "Revisa tu pedido (24 horas)",
        blocks: [{ list: [
          ["Antes de despachar", "Revisamos el estado de cada producto. Si eres cliente natural, puedes pedir una foto o un video de esa revisión."],
          ["Al recibirlo", "Revisa empaque, producto y cantidad, idealmente frente al motorizado. Reporta cualquier daño visible, faltante o error por WhatsApp dentro de las 24 horas, con fotos o video."],
          ["Emprendedores", "Haz el conteo y la verificación completa de paquetes y unidades, y reporta diferencias dentro de las 24 horas, con evidencia (idealmente un video de apertura)."],
          ["Tus derechos siguen", "Esta revisión no limita tu derecho de devolución ni la garantía por defectos que no se vean al recibir."]
        ] }]
      },
      {
        id: "returns",
        title: "Devoluciones y cambios",
        blocks: [
          { p: "Si eres consumidor final, puedes devolver o cambiar tu compra dentro de un término de 15 días hábiles contados desde que la recibes (artículo 45 de la Ley Orgánica de Defensa del Consumidor), siempre que su naturaleza lo permita y regrese en el mismo estado en que la recibiste. Así funciona en Vibex:" },
          { list: [
            ["Cómo pedirla", "Escríbenos por WhatsApp o correo con tu número de pedido. Te confirmamos por escrito cómo entregarnos el producto. No envíes nada sin esa confirmación."],
            ["Estado del producto", "Sin uso, con sellos de seguridad y etiquetas intactos, en su empaque original y con todos sus accesorios, manuales y documentos."],
            ["Qué verificamos", "Sellos, número de serie, lote y accesorios. Si lo que regresa no coincide con lo que entregamos, rechazamos la devolución."],
            ["Revisión", "Revisamos el producto dentro de 3 días hábiles desde que lo recibimos. Si cumple, aprobamos la devolución; si no, te explicamos el motivo por escrito."],
            ["Reembolso", "Devolvemos el valor pagado por transferencia en un máximo de 5 días hábiles desde que aprobamos la devolución. No imponemos notas de crédito ni bonos en lugar de tu dinero."],
            ["Envío de regreso", "Corre por tu cuenta si desistes por decisión propia. Corre por cuenta de Vibex si hubo error nuestro, defecto o un producto distinto al ofertado."],
            ["Personalizados", "Los productos hechos o grabados a tu medida no admiten devolución, salvo defecto."]
          ] },
          { p: "Reglas por tipo de producto:" },
          { subs: [
            { title: "Perfumería", blocks: [{ list: [
              ["Se puede devolver", "Frasco con su sello o film de seguridad intacto, en su caja original y sin uso."],
              ["No se puede devolver", "Perfumes abiertos, probados o usados, sets abiertos y muestras. Es por higiene y seguridad."],
              ["Si falla", "Atomizador que no funciona o frasco con fuga: aplica la garantía, aunque esté abierto."]
            ] }] },
            { title: "Joyería y accesorios", blocks: [{ list: [
              ["Se puede devolver", "Pieza sin usar, con sus etiquetas, estuche y empaque original."],
              ["No se puede devolver", "Piezas usadas, ajustadas o modificadas, grabadas o personalizadas, y aretes o piezas de uso íntimo sin su sello de higiene."],
              ["Si falla", "Defecto de fabricación: aplica la garantía."]
            ] }] },
            { title: "Electrónica y gaming (Alexa, PlayStation, audio y más)", blocks: [{ list: [
              ["Se puede devolver", "Equipo sin uso, con todos sus accesorios, cables, manuales, empaque y el mismo número de serie que te entregamos. Puedes abrir la caja para verificar el contenido."],
              ["Antes de devolver", "Cierra sesión, desvincula tus cuentas (Amazon/Alexa, PlayStation Network, Apple, Google u otras) y restablece el equipo de fábrica. No aprobamos equipos que sigan vinculados a una cuenta."],
              ["No se puede devolver", "Equipos usados o configurados con marcas de uso, golpes o líquidos, sin accesorios o con otra serie, abiertos o reparados por terceros. Videojuegos físicos con el sello roto (solo cambio por falla). Códigos digitales, tarjetas de regalo, recargas y suscripciones una vez entregado el código."],
              ["Si falla", "Aplica la garantía del fabricante o del proveedor, que te informamos por escrito antes de pagar."]
            ] }] },
            { title: "Vapes", blocks: [{ list: [
              ["Se puede devolver", "Solo si el producto sigue sellado y sin uso."],
              ["No se puede devolver", "Abiertos, usados o con el sello roto, por salud y seguridad. Líquidos y recargas abiertos."],
              ["Si falla", "Si no enciende o falla desde el primer uso, repórtalo de inmediato con un video: aplica la garantía."]
            ] }] },
            { title: "Juguetes", blocks: [{ list: [
              ["Se puede devolver", "Completo, sin uso, con todas sus piezas y en su empaque original. Puedes abrirlo para verificarlo."],
              ["No se puede devolver", "Juguetes armados, usados o incompletos, o con el empaque dañado por el cliente."],
              ["Si falla", "Pieza defectuosa o faltante: aplica la garantía."]
            ] }] }
          ] },
          { p: "Defecto de fábrica o producto distinto al ofertado: aplica la garantía aunque el producto esté abierto. Lo resolvemos con reparación, reposición o devolución del valor, y asumimos el envío. Las compras de Vibex Business se rigen por su propio tema." }
        ]
      },
      {
        id: "restricted",
        title: "Productos de venta restringida (vapes)",
        blocks: [{ list: [
          ["Solo mayores de 18", "Los vapes y productos similares se venden únicamente a adultos. Al pedirlos declaras ser mayor de edad."],
          ["Verificación", "El repartidor puede pedir tu documento al entregar. Si no es posible verificar tu edad, no entregamos y reembolsamos lo pagado, descontando solo los costos logísticos reales que te hayamos comunicado."],
          ["Advertencia de salud", "Pueden contener nicotina, que genera adicción, y su uso puede perjudicar la salud. Respeta las advertencias del empaque. No se ofrecen como tratamiento ni como alternativa terapéutica."],
          ["Tu responsabilidad", "Conoces la normativa ecuatoriana aplicable, incluidas las restricciones de consumo en espacios públicos y cerrados, y eres responsable de su uso."],
          ["Devoluciones", "Solo si el producto sigue sellado y sin uso."]
        ] }]
      },
      {
        id: "perfume",
        title: "Perfumes: originales y equivalentes",
        blocks: [{ list: [
          ["Original o equivalente", "Antes de comprar identificamos cada perfume como original (de la marca indicada y de origen comprobable) o equivalente, un “dupe”: inspirado en otra fragancia y hecho por otro fabricante."],
          ["Sin confusiones", "Nunca presentamos un equivalente como si fuera el producto de otra marca. Las notas olfativas son orientativas y el aroma se percibe distinto en cada piel."],
          ["Pregunta antes de pagar", "Si tienes dudas sobre el origen de un perfume, pídenos la información antes de pagar."],
          ["Marcas de terceros", "Se mencionan solo para identificar los productos; no estamos afiliados a ellas, salvo que se indique."]
        ] }]
      },
      {
        id: "business",
        title: "Compras mayoristas (Vibex Business)",
        blocks: [{ list: [
          ["Para reventa", "Paquetes de 3, 6, 9 y 12 unidades para negocios y emprendedores. Al no ser consumo final, y en la medida en que la ley lo permita, no aplica el derecho de devolución de 15 días."],
          ["Errores y defectos", "Haz el conteo y la verificación completa al recibir y repórtanos diferencias, daños o defectos dentro de las 24 horas, con evidencia. Reponemos, cambiamos o reembolsamos según corresponda."],
          ["Pago y reserva", "Aplican las reglas de pago previo y de pedidos bajo reserva."],
          ["Reventa responsable", "Revendes cumpliendo la normativa: edad mínima para productos restringidos, advertencias sanitarias y permisos que correspondan. Vibex no responde por la reventa."]
        ] }]
      },
      {
        id: "privacy",
        title: "Privacidad y tus datos",
        blocks: [
          { list: [
            ["Qué recopilamos", "Solo lo necesario para atenderte: nombre, contacto, dirección y datos del pedido. No guardamos datos de tarjetas."],
            ["Con quién los compartimos", "Repartidores (solo lo necesario para entregar), WhatsApp como canal de pedidos, proveedores técnicos y autoridades cuando la ley lo exige. No vendemos tus datos."],
            ["Edad y documento", "En vapes, el repartidor puede pedir tu documento solo para verificar tu edad. No conservamos copia."],
            ["Tus derechos", "Acceso, rectificación y actualización, eliminación, oposición, portabilidad, suspensión del tratamiento y retiro del consentimiento. Escribe a contact.vibexglobal@gmail.com con el asunto “Derechos de datos personales”; respondemos en un máximo de 15 días."],
            ["Autoridad de control", "Si no se atienden tus derechos, puedes reclamar ante la Superintendencia de Protección de Datos Personales del Ecuador."]
          ] },
          { p: "El texto completo está en la Política de privacidad (enlace al final de esta ventana)." }
        ]
      },
      {
        id: "cookies",
        title: "Cookies y preferencias",
        blocks: [
          { p: "Usamos almacenamiento esencial para que tu bolsa funcione. Con tu permiso, también recordamos tu idioma y tu código promocional. No usamos cookies de publicidad ni de analítica. Puedes cambiar tu elección cuando quieras." },
          { cookies: true }
        ]
      }
    ],

    en: [
      {
        id: "payment",
        title: "Payment and order confirmation",
        blocks: [{ list: [
          ["How to pay", "Only by bank deposit or transfer. Cash on delivery is not available, to ensure product availability and the seriousness of every order."],
          ["When it is confirmed", "When we confirm in writing the availability, final price, delivery and payment method, and verify your payment. No order is dispatched without verified payment."],
          ["Avoid fraud", "We only share account details through our official channels: WhatsApp +593 98 469 2292, contact.vibexglobal@gmail.com and @vibex.global. We never ask for passwords or verification codes."],
          ["Prices", "In US dollars (USD). The final amount, with applicable taxes and shipping if any, is confirmed in writing before payment, and that amount is honored."],
          ["Promo codes", "One per order, only for the categories and dates indicated. They cannot be combined and do not apply to age-restricted products."]
        ] }]
      },
      {
        id: "reserve",
        title: "Reservation orders",
        blocks: [{ list: [
          ["When it applies", "Products not immediately available in Ecuador (“Coming soon” or “On its way”), entrepreneurs’ products and Vibex Business orders that require it. We tell you before payment."],
          ["How to pay", "A 30% reservation of the price, and the remaining 70% before dispatch."],
          ["Tracking", "We give you the estimated timeframe in writing and send a weekly WhatsApp report on where your order is."],
          ["Halfway point", "If, once half of the committed timeframe has passed, we cannot show verifiable progress, you may cancel and receive a full refund within a maximum of 5 business days."],
          ["If you withdraw", "Before we place the order with the supplier, the reservation is fully refunded. After that, we only deduct real, non-recoverable costs, justified in writing, up to the amount of the reservation."],
          ["Causes beyond control", "Customs or transport may extend timeframes; we will tell you and, in that case, you may cancel with a full refund."]
        ] }]
      },
      {
        id: "delivery",
        title: "Delivery and tracking",
        blocks: [{ list: [
          ["Timeframe", "Available products: a maximum of 24 hours from payment confirmation, in the coverage areas we confirm on WhatsApp before payment."],
          ["Tracking", "We deliver with couriers who share their location with you during the shipment."],
          ["Your part", "A correct address, an active phone and someone available to receive. If delivery fails for reasons attributable to the customer, we arrange a new one and tell you before any additional cost."],
          ["Date of receipt", "For inspection and return timeframes, we count from the delivery recorded by the courier."]
        ] }]
      },
      {
        id: "check",
        title: "Check your order (24 hours)",
        blocks: [{ list: [
          ["Before dispatch", "We check the condition of each product. As an individual customer, you may request a photo or video of that check."],
          ["Upon receipt", "Check packaging, product and quantity, ideally in front of the courier. Report any visible damage, missing item or error via WhatsApp within 24 hours, with photos or video."],
          ["Entrepreneurs", "Do the full count and verification of packages and units, and report differences within 24 hours, with evidence (ideally an unboxing video)."],
          ["Your rights continue", "This check does not limit your right of return or the warranty for defects that are not visible upon receipt."]
        ] }]
      },
      {
        id: "returns",
        title: "Returns and exchanges",
        blocks: [
          { p: "If you are an end consumer, you may return or exchange your purchase within a term of 15 business days counted from receipt (Article 45 of the Organic Law on Consumer Protection), provided its nature allows it and it comes back in the same condition in which you received it. This is how it works at Vibex:" },
          { list: [
            ["How to request it", "Write to us on WhatsApp or by email with your order number. We confirm in writing how to send the product to us. Do not send anything without that confirmation."],
            ["Product condition", "Unused, with security seals and labels intact, in its original packaging and with all its accessories, manuals and documents."],
            ["What we verify", "Seals, serial number, batch and accessories. If what comes back does not match what we delivered, we reject the return."],
            ["Inspection", "We inspect the product within 3 business days of receiving it. If it complies, we approve the return; if not, we explain the reason in writing."],
            ["Refund", "We refund the amount paid by transfer within a maximum of 5 business days after approving the return. We do not impose store credit or vouchers in place of your money."],
            ["Return shipping", "Borne by you if you withdraw by your own decision. Borne by Vibex if there was an error on our side, a defect or a product different from what was offered."],
            ["Custom items", "Products made or engraved to your specifications cannot be returned, except for defects."]
          ] },
          { p: "Rules by product type:" },
          { subs: [
            { title: "Fragrances", blocks: [{ list: [
              ["Can be returned", "Bottle with its security seal or film intact, in its original box and unused."],
              ["Cannot be returned", "Opened, tested or used fragrances, opened sets and samples. This is for hygiene and safety."],
              ["If it fails", "A sprayer that does not work or a leaking bottle: the warranty applies, even if opened."]
            ] }] },
            { title: "Jewelry and accessories", blocks: [{ list: [
              ["Can be returned", "Unworn piece, with its tags, case and original packaging."],
              ["Cannot be returned", "Worn, resized or modified pieces, engraved or personalized items, and earrings or intimate-use pieces without their hygiene seal."],
              ["If it fails", "Manufacturing defect: the warranty applies."]
            ] }] },
            { title: "Electronics and gaming (Alexa, PlayStation, audio and more)", blocks: [{ list: [
              ["Can be returned", "Unused device, with all its accessories, cables, manuals, packaging and the same serial number we delivered. You may open the box to check the contents."],
              ["Before returning", "Sign out, unlink your accounts (Amazon/Alexa, PlayStation Network, Apple, Google or others) and factory reset the device. We do not approve devices that remain linked to an account."],
              ["Cannot be returned", "Used or configured devices with signs of use, impacts or liquids, without accessories or with a different serial number, opened or repaired by third parties. Physical video games with a broken seal (exchange only if faulty). Digital codes, gift cards, top-ups and subscriptions once the code has been delivered."],
              ["If it fails", "The manufacturer’s or supplier’s warranty applies, which we tell you in writing before payment."]
            ] }] },
            { title: "Vapes", blocks: [{ list: [
              ["Can be returned", "Only if the product is still sealed and unused."],
              ["Cannot be returned", "Opened, used or with a broken seal, for health and safety. Opened liquids and refills."],
              ["If it fails", "If it does not turn on or fails from first use, report it immediately with a video: the warranty applies."]
            ] }] },
            { title: "Toys", blocks: [{ list: [
              ["Can be returned", "Complete, unused, with all its pieces and in its original packaging. You may open it to check it."],
              ["Cannot be returned", "Assembled, used or incomplete toys, or with packaging damaged by the customer."],
              ["If it fails", "Defective or missing piece: the warranty applies."]
            ] }] }
          ] },
          { p: "Manufacturing defect or a product different from what was offered: the warranty applies even if the product has been opened. We resolve it with repair, replacement or a refund of the amount paid, and we cover shipping. Vibex Business purchases follow their own topic." }
        ]
      },
      {
        id: "restricted",
        title: "Age-restricted products (vapes)",
        blocks: [{ list: [
          ["Adults 18+ only", "Vapes and similar products are sold only to adults. By ordering them, you declare that you are of legal age."],
          ["Verification", "The courier may ask for your ID at delivery. If your age cannot be verified, we do not deliver and refund what you paid, deducting only the real logistics costs we have told you about."],
          ["Health warning", "They may contain nicotine, which is addictive, and their use may harm health. Follow the warnings on the package. They are not offered as a treatment or therapeutic alternative."],
          ["Your responsibility", "You know the applicable Ecuadorian regulations, including restrictions on use in public and enclosed spaces, and you are responsible for their use."],
          ["Returns", "Only if the product is still sealed and unused."]
        ] }]
      },
      {
        id: "perfume",
        title: "Fragrances: originals and equivalents",
        blocks: [{ list: [
          ["Original or equivalent", "Before purchase, we identify each fragrance as original (of the indicated brand and with verifiable origin) or equivalent, a “dupe”: inspired by another fragrance and made by a different manufacturer."],
          ["No confusion", "We never present an equivalent as if it were another brand’s product. Scent notes are indicative and a scent is perceived differently on each skin."],
          ["Ask before paying", "If you have questions about a fragrance’s origin, ask us for the information before paying."],
          ["Third-party brands", "They are mentioned only to identify products; we are not affiliated with them unless stated."]
        ] }]
      },
      {
        id: "business",
        title: "Wholesale purchases (Vibex Business)",
        blocks: [{ list: [
          ["For resale", "Packages of 3, 6, 9 and 12 units for businesses and entrepreneurs. As this is not end consumption, and to the extent the law allows, the 15-day right of return does not apply."],
          ["Errors and defects", "Do the full count and verification upon receipt and report differences, damage or defects within 24 hours, with evidence. We replace, exchange or refund as appropriate."],
          ["Payment and reservation", "The prepayment and reservation-order rules apply."],
          ["Responsible resale", "You resell in compliance with the regulations: minimum age for restricted products, health warnings and any required permits. Vibex is not liable for the resale."]
        ] }]
      },
      {
        id: "privacy",
        title: "Privacy and your data",
        blocks: [
          { list: [
            ["What we collect", "Only what is needed to serve you: name, contact, address and order data. We do not store card data."],
            ["Who we share it with", "Couriers (only what is needed to deliver), WhatsApp as the ordering channel, technical providers and authorities when the law requires it. We do not sell your data."],
            ["Age and ID", "For vapes, the courier may ask for your ID solely to verify your age. We do not keep a copy."],
            ["Your rights", "Access, rectification and updating, erasure, objection, portability, suspension of processing and withdrawal of consent. Write to contact.vibexglobal@gmail.com with the subject “Personal data rights”; we respond within a maximum of 15 days."],
            ["Supervisory authority", "If your rights are not addressed, you may file a complaint with Ecuador’s Superintendence of Personal Data Protection."]
          ] },
          { p: "The full text is in the Privacy policy (link at the end of this window)." }
        ]
      },
      {
        id: "cookies",
        title: "Cookies and preferences",
        blocks: [
          { p: "We use essential storage so your bag works. With your permission, we also remember your language and promo code. We do not use advertising or analytics cookies. You can change your choice whenever you want." },
          { cookies: true }
        ]
      }
    ]
  };

  /* Para probar: abre la página con ?cookies=reset al final y la ventana vuelve a salir */
  if (window.location.search.indexOf("cookies=reset") !== -1) {
    try { localStorage.removeItem(CHOICE_KEY); } catch { /* sin almacenamiento */ }
  }

  /* ==============================================
     ELECCIÓN GUARDADA
     ============================================== */

  function readChoice() {
    try {
      const raw = localStorage.getItem(CHOICE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (data && data.v === 1 && typeof data.preferences === "boolean") return data;
    } catch {
      /* valor antiguo o inválido: se vuelve a preguntar */
    }
    return null;
  }

  let choice = readChoice();
  let preferencesDraft = false;
  let overlay = null;
  let dialog = null;
  let lastFocus = null;
  const openState = {};

  function clearPreferences() {
    PREFERENCE_KEYS.forEach((key) => {
      try { localStorage.removeItem(key); } catch { /* sin almacenamiento */ }
    });
  }

  function saveChoice(preferences) {
    choice = { v: 1, preferences, date: new Date().toISOString() };
    try {
      localStorage.setItem(CHOICE_KEY, JSON.stringify(choice));
    } catch {
      /* si no se puede guardar, la elección vale solo en esta visita */
    }
    if (!preferences) clearPreferences();
  }

  function preferencesAllowed() {
    return Boolean(choice && choice.preferences);
  }

  function currentLanguage() {
    return document.documentElement.lang === "en" ? "en" : "es";
  }

  function isLegalPage() {
    return document.body.classList.contains("legal-body");
  }

  /* ==============================================
     PIEZAS DE LA VENTANA
     ============================================== */

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function anchor(label, href) {
    const node = el("a", "", label);
    node.href = href;
    return node;
  }

  function button(label, ghost, handler) {
    const node = el("button", "vx-btn" + (ghost ? " vx-btn--ghost" : ""), label);
    node.type = "button";
    node.addEventListener("click", handler);
    return node;
  }

  function option(title, description, checked, locked, onChange) {
    const row = el("label", "vx-option");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = checked;
    input.disabled = locked;
    if (onChange) input.addEventListener("change", () => onChange(input.checked));

    const body = el("span", "vx-option-body");
    body.append(el("strong", "", title), el("span", "", description));

    row.append(input, body);
    return row;
  }

  function buildCookieOptions() {
    const t = UI[currentLanguage()];
    const wrap = el("div", "vx-options");

    wrap.append(
      option(t.essentialTitle, t.essentialText, true, true),
      option(t.prefsTitle, t.prefsText, preferencesDraft, false, (checked) => {
        preferencesDraft = checked;
      })
    );

    const save = button(t.save, false, () => commit(preferencesDraft));
    save.classList.add("vx-btn--inline");
    wrap.appendChild(save);

    return wrap;
  }

  function trackToggle(details, id) {
    details.open = Boolean(openState[id]);
    details.addEventListener("toggle", () => {
      openState[id] = details.open;
    });
  }

  function renderBlocks(container, blocks, prefix) {
    blocks.forEach((block, blockIndex) => {
      if (block.p) {
        container.appendChild(el("p", "vx-p", block.p));
      }

      if (block.list) {
        const list = el("ul", "vx-list");
        block.list.forEach((entry) => {
          const item = document.createElement("li");
          if (Array.isArray(entry)) {
            item.append(el("strong", "", entry[0] + ": "), document.createTextNode(entry[1]));
          } else {
            item.textContent = entry;
          }
          list.appendChild(item);
        });
        container.appendChild(list);
      }

      if (block.subs) {
        block.subs.forEach((sub, subIndex) => {
          const subId = `${prefix}-${blockIndex}-${subIndex}`;
          const details = el("details", "vx-sub");
          details.appendChild(el("summary", "", sub.title));

          const body = el("div", "vx-sub-body");
          renderBlocks(body, sub.blocks, subId);
          details.appendChild(body);

          trackToggle(details, subId);
          container.appendChild(details);
        });
      }

      if (block.cookies) {
        container.appendChild(buildCookieOptions());
      }
    });
  }

  function buildSection(section) {
    const item = el("details", "vx-item");
    item.id = "vx-" + section.id;
    item.appendChild(el("summary", "", section.title));

    const body = el("div", "vx-item-body");
    renderBlocks(body, section.blocks, section.id);
    item.appendChild(body);

    trackToggle(item, section.id);
    return item;
  }

  function ensureDom() {
    if (overlay) return;

    overlay = el("div", "vx-overlay");
    overlay.hidden = true;

    dialog = el("section", "vx-cookie");
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "vxTitle");
    dialog.tabIndex = -1;

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    /* Tocar fuera de la ventana solo la cierra si ya existe una elección */
    overlay.addEventListener("mousedown", (event) => {
      if (event.target === overlay && choice) hide();
    });
  }

  function render() {
    if (!dialog) return;

    const language = currentLanguage();
    const t = UI[language];

    const previous = dialog.querySelector(".vx-scroll");
    const previousScroll = previous ? previous.scrollTop : 0;

    dialog.replaceChildren();

    if (choice) {
      const closeButton = el("button", "vx-close", "×");
      closeButton.type = "button";
      closeButton.setAttribute("aria-label", t.close);
      closeButton.addEventListener("click", hide);
      dialog.appendChild(closeButton);
    }

    const scroll = el("div", "vx-scroll");

    const title = el("h2", "vx-title", choice ? t.titleReturn : t.titleFirst);
    title.id = "vxTitle";
    scroll.append(
      el("p", "vx-eyebrow", t.eyebrow),
      title,
      el("p", "vx-intro", choice ? t.introReturn : t.introFirst)
    );

    const points = el("ul", "vx-points");
    t.points.forEach(([head, body]) => {
      const item = document.createElement("li");
      item.append(el("strong", "", head), el("span", "", body));
      points.appendChild(item);
    });
    scroll.appendChild(points);

    const accordion = el("div", "vx-accordion");
    SECTIONS[language].forEach((section) => accordion.appendChild(buildSection(section)));
    scroll.appendChild(accordion);

    const docs = el("p", "vx-docs");
    docs.append(
      document.createTextNode(t.docsLabel + " "),
      anchor(t.docTerms, "terminos.html"),
      anchor(t.docPrivacy, "privacidad.html")
    );
    scroll.append(docs, el("p", "vx-note", t.note));

    const actions = el("div", "vx-actions");
    actions.append(
      button(t.reject, false, () => commit(false)),
      button(t.settings, true, () => openSection("cookies")),
      button(t.accept, false, () => commit(true))
    );

    dialog.append(scroll, actions);
    scroll.scrollTop = previousScroll;
  }

  function openSection(id) {
    const node = document.getElementById("vx-" + id);
    if (!node) return;

    openState[id] = true;
    node.open = true;
    window.requestAnimationFrame(() => {
      node.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }

  function show() {
    ensureDom();
    render();
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("vx-lock");
    dialog.focus();
  }

  function hide() {
    if (!overlay) return;
    overlay.hidden = true;
    document.body.classList.remove("vx-lock");

    if (lastFocus && document.contains(lastFocus) && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  function commit(preferences) {
    saveChoice(preferences);
    hide();
    document.dispatchEvent(
      new CustomEvent("vibex:consent", { detail: { preferences } })
    );
  }

  function open(sectionId) {
    preferencesDraft = preferencesAllowed();
    show();
    if (sectionId) openSection(sectionId);
  }

  /* ==============================================
     ENLACES DE LOS PIES DE PÁGINA
     Los enlaces a terminos.html y privacidad.html abren esta ventana
     en el tema correspondiente, sin tener que editar cada página.
     ============================================== */

  function legalTarget(href) {
    if (!href) return null;
    const clean = href.split("?")[0];

    if (/(^|\/)terminos\.html(#.*)?$/.test(clean)) return "payment";

    if (/(^|\/)privacidad\.html(#.*)?$/.test(clean)) {
      const hash = clean.indexOf("#") >= 0 ? clean.slice(clean.indexOf("#")) : "";
      return /cookies|-5$/.test(hash) ? "cookies" : "privacy";
    }

    return null;
  }

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const trigger = event.target.closest("[data-cookie-settings]");
    if (trigger) {
      event.preventDefault();
      open("cookies");
      return;
    }

    const link = event.target.closest("a[href]");
    if (!link || isLegalPage()) return;
    if (dialog && dialog.contains(link)) return;

    const target = legalTarget(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      open(target);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay || overlay.hidden) return;

    if (event.key === "Escape" && choice) {
      hide();
      return;
    }

    /* Mantiene el teclado dentro de la ventana mientras está abierta */
    if (event.key === "Tab") {
      const focusable = Array.from(
        dialog.querySelectorAll("a[href], button, input:not([disabled]), summary")
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === dialog)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  new MutationObserver(() => {
    if (overlay && !overlay.hidden) render();
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });

  function start() {
    if (!choice && !isLegalPage()) {
      preferencesDraft = false;
      show();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  window.VibexConsent = Object.freeze({ preferencesAllowed, open });
})();