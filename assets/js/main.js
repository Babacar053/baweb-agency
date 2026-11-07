/* =========================================================
   BaWeb Agency — script principal (JavaScript natif)
   Rendu de l'en-tête, du pied de page, des sections
   alimentées par data.js, animations et formulaire.
   ========================================================= */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");
  var S = window.SITE || {};
  var page = document.body.getAttribute("data-page") || "";

  /* ---------- Utilitaires ---------- */
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function waLink(message) {
    return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(message || S.whatsappMessage);
  }

  var LOGO =
    '<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true"><defs><linearGradient id="bwg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3D7BFF"/><stop offset="1" stop-color="#1F4FE0"/></linearGradient></defs><rect width="40" height="40" rx="11" fill="url(#bwg)"/><path d="M12 10h9.2c4.3 0 6.8 2 6.8 5.3 0 2.2-1.2 3.7-3.1 4.3 2.5.5 4.1 2.3 4.1 4.9 0 3.6-2.8 5.5-7.3 5.5H12V10Zm8.4 8.2c2 0 3.1-.8 3.1-2.3s-1.1-2.2-3.1-2.2h-3.7v4.5h3.7Zm.5 8.1c2.2 0 3.4-.8 3.4-2.5 0-1.6-1.2-2.4-3.4-2.4h-4.2v4.9h4.2Z" fill="#fff"/></svg>';

  var NAV = [
    { href: "index.html", label: "Accueil", id: "home" },
    { href: "services.html", label: "Services", id: "services" },
    { href: "realisations.html", label: "Réalisations", id: "portfolio" },
    { href: "tarifs.html", label: "Tarifs", id: "pricing" },
    { href: "a-propos.html", label: "À propos", id: "about" },
    { href: "contact.html", label: "Contact", id: "contact" }
  ];

  /* ---------- En-tête ---------- */
  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    var links = NAV.map(function (n) {
      var active = n.id === page;
      return (
        '<li class="nav-item"><a class="nav-link' + (active ? " active" : "") + '"' +
        (active ? ' aria-current="page"' : "") + ' href="' + n.href + '">' + n.label + "</a></li>"
      );
    }).join("");

    el.innerHTML =
      '<nav class="navbar navbar-expand-lg site-nav" aria-label="Navigation principale">' +
      '<div class="container">' +
      '<a class="navbar-brand" href="index.html" aria-label="' + esc(S.name) + ' — Accueil">' + LOGO +
      '<span>' + esc(S.shortName) + '<em>' + esc(S.name.replace(S.shortName, "").trim()) + "</em></span></a>" +
      '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Ouvrir le menu">' +
      '<span class="burger"><span></span><span></span><span></span></span></button>' +
      '<div class="collapse navbar-collapse" id="mainNav">' +
      '<ul class="navbar-nav mx-auto">' + links + "</ul>" +
      '<a class="btn btn-primary btn-nav" href="contact.html"><i class="bi bi-lightning-charge-fill" aria-hidden="true"></i> Devis gratuit</a>' +
      "</div></div></nav>";

    var nav = el.querySelector(".site-nav");
    function onScroll() {
      nav.classList.toggle("is-scrolled", window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Pied de page ---------- */
  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;

    var socials = [
      ["facebook", "bi-facebook", "Facebook"],
      ["instagram", "bi-instagram", "Instagram"],
      ["tiktok", "bi-tiktok", "TikTok"],
      ["linkedin", "bi-linkedin", "LinkedIn"]
    ]
      .filter(function (s) { return S.social && S.social[s[0]]; })
      .map(function (s) {
        return '<a href="' + esc(S.social[s[0]]) + '" target="_blank" rel="noopener" aria-label="' + s[2] + '"><i class="bi ' + s[1] + '"></i></a>';
      })
      .join("");

    var emailLine = S.email
      ? '<li><i class="bi bi-envelope"></i><a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a></li>"
      : "";

    // Le bandeau d'appel à l'action n'apparaît que si la page n'en a pas déjà un
    var showCta = !document.querySelector("main .cta-band");

    el.innerHTML =
      '<footer class="site-footer">' +
      '<div class="container">' +
      (showCta ? '<div class="footer-cta reveal">' : '<div class="d-none">') +
      "<div><h2>Prêt à lancer votre site&nbsp;?</h2><p>Parlez-nous de votre projet. Réponse rapide sur WhatsApp.</p></div>" +
      '<div class="d-flex flex-wrap gap-2">' +
      '<a class="btn btn-light btn-lg" href="' + waLink() + '" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i> Écrire sur WhatsApp</a>' +
      '<a class="btn btn-outline-light btn-lg" href="contact.html">Demander un devis</a>' +
      "</div></div>" +
      '<div class="row g-4 footer-grid">' +
      '<div class="col-lg-4"><a class="navbar-brand footer-brand" href="index.html">' + LOGO +
      "<span>" + esc(S.shortName) + "<em>" + esc(S.name.replace(S.shortName, "").trim()) + "</em></span></a>" +
      "<p>Création de sites web modernes, rapides et professionnels pour les entreprises, commerçants et indépendants.</p>" +
      (socials ? '<div class="footer-social">' + socials + "</div>" : "") +
      "</div>" +
      '<div class="col-6 col-lg-2"><h3>Navigation</h3><ul>' +
      NAV.map(function (n) { return '<li><a href="' + n.href + '">' + n.label + "</a></li>"; }).join("") +
      "</ul></div>" +
      '<div class="col-6 col-lg-3"><h3>Prestations</h3><ul>' +
      '<li><a href="services.html#vitrine">Site vitrine</a></li>' +
      '<li><a href="services.html#ecommerce">Site e-commerce</a></li>' +
      '<li><a href="services.html#sur-mesure">Site sur mesure</a></li>' +
      '<li><a href="tarifs.html#offerts">Fonctionnalités offertes</a></li>' +
      "</ul></div>" +
      '<div class="col-lg-3"><h3>Contact</h3><ul class="footer-contact">' +
      '<li><i class="bi bi-whatsapp"></i><a href="' + waLink() + '" target="_blank" rel="noopener">WhatsApp</a></li>' +
      '<li><i class="bi bi-telephone"></i><a href="tel:' + esc(S.phoneLink) + '">' + esc(S.phoneDisplay) + "</a></li>" +
      emailLine +
      '<li><i class="bi bi-globe2"></i><span>' + esc(S.zone) + "</span></li>" +
      "</ul></div>" +
      "</div>" +
      '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " " + esc(S.name) + ". Tous droits réservés.</span>" +
      '<a href="#top" class="to-top" aria-label="Retour en haut"><i class="bi bi-arrow-up"></i></a></div>' +
      "</div></footer>";
  }

  /* ---------- Bouton WhatsApp flottant ---------- */
  function renderWhatsAppButton() {
    var a = document.createElement("a");
    a.className = "wa-float";
    a.href = waLink();
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Discuter avec nous sur WhatsApp");
    a.innerHTML = '<i class="bi bi-whatsapp" aria-hidden="true"></i><span class="wa-label">Discutons sur WhatsApp</span>';
    document.body.appendChild(a);
  }

  /* ---------- Liaison des données de configuration ---------- */
  function bindConfig() {
    document.querySelectorAll("[data-cfg]").forEach(function (el) {
      var path = el.getAttribute("data-cfg").split(".");
      var v = path.reduce(function (o, k) { return o ? o[k] : undefined; }, S);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      el.href = waLink(el.getAttribute("data-wa") || S.whatsappMessage);
      el.target = "_blank";
      el.rel = "noopener";
    });
    document.querySelectorAll("[data-tel]").forEach(function (el) {
      el.href = "tel:" + S.phoneLink;
    });
    document.querySelectorAll("[data-email]").forEach(function (el) {
      if (!S.email) { el.remove(); return; }
      var a = el.querySelector("a") || el;
      a.href = "mailto:" + S.email;
      var t = el.querySelector("[data-email-text]");
      if (t) t.textContent = S.email;
    });
  }

  /* ---------- Sections alimentées par data.js ---------- */
  function renderProjects() {
    document.querySelectorAll("[data-projects]").forEach(function (grid) {
      var limit = parseInt(grid.getAttribute("data-projects"), 10) || 0;
      var list = (window.PROJECTS || []).slice(0, limit || undefined);
      grid.innerHTML = list.map(function (p, i) {
        var host = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
        return (
          '<div class="col-md-6 col-lg-4 reveal" style="--d:' + i * 80 + 'ms">' +
          '<article class="project-card">' +
          '<a class="project-shot" href="' + esc(p.url) + '" target="_blank" rel="noopener" aria-label="Visiter ' + esc(p.name) + '">' +
          '<span class="browser-bar"><i></i><i></i><i></i><em>' + esc(host) + "</em></span>" +
          '<img src="' + esc(p.image) + '" alt="Capture d\'écran du site ' + esc(p.name) + '" width="1200" height="750" loading="lazy" decoding="async">' +
          (p.imageMobile
            ? '<span class="project-phone"><img src="' + esc(p.imageMobile) + '" alt="" width="390" height="844" loading="lazy" decoding="async"></span>'
            : "") +
          "</a>" +
          '<div class="project-body">' +
          '<span class="chip">' + esc(p.category) + "</span>" +
          "<h3>" + esc(p.name) + "</h3>" +
          '<p class="project-type">' + esc(p.type) + "</p>" +
          "<p>" + esc(p.description) + "</p>" +
          (p.tags ? '<ul class="tags">' + p.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" : "") +
          '<a class="btn btn-outline-primary w-100" href="' + esc(p.url) + '" target="_blank" rel="noopener">Visiter le site <i class="bi bi-box-arrow-up-right"></i></a>' +
          "</div></article></div>"
        );
      }).join("");
    });
  }

  function renderServices() {
    document.querySelectorAll("[data-services]").forEach(function (grid) {
      var compact = grid.getAttribute("data-services") === "compact";
      grid.innerHTML = (window.SERVICES || []).map(function (s, i) {
        var feats = compact ? s.features.slice(0, 4) : s.features;
        return (
          '<div class="col-md-6 col-lg-4 reveal" style="--d:' + i * 80 + 'ms"' + (compact ? "" : ' id="' + s.id + '"') + ">" +
          '<article class="service-card' + (i === 0 ? " is-featured" : "") + '">' +
          '<div class="service-head"><span class="icon-box"><i class="bi ' + s.icon + '"></i></span>' +
          '<span class="chip ' + (s.badge.indexOf("48") > -1 ? "chip-accent" : "") + '">' + esc(s.badge) + "</span></div>" +
          "<h3>" + esc(s.title) + "</h3>" +
          '<p class="muted">' + esc(s.audience) + "</p>" +
          '<ul class="check-list">' + feats.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
          (s.note && !compact ? '<p class="service-note"><i class="bi bi-info-circle"></i> ' + esc(s.note) + "</p>" : "") +
          (compact
            ? '<a class="link-arrow" href="services.html#' + s.id + '">En savoir plus <i class="bi bi-arrow-right"></i></a>'
            : '<a class="btn btn-primary w-100 mt-auto" href="contact.html?type=' + encodeURIComponent(s.title) + '">Demander ce site</a>') +
          "</article></div>"
        );
      }).join("");
    });
  }

  function renderFreeFeatures() {
    document.querySelectorAll("[data-free-features]").forEach(function (grid) {
      grid.innerHTML = (window.FREE_FEATURES || []).map(function (f, i) {
        return (
          '<li class="free-item reveal" style="--d:' + i * 40 + 'ms">' +
          '<i class="bi ' + f.icon + '" aria-hidden="true"></i><span>' + esc(f.title) + "</span>" +
          '<em class="free-tag">Offert</em></li>'
        );
      }).join("");
    });
  }

  function renderProcess() {
    document.querySelectorAll("[data-process]").forEach(function (grid) {
      grid.innerHTML = (window.PROCESS || []).map(function (p, i) {
        return (
          '<li class="col-sm-6 col-lg-3 reveal" style="--d:' + i * 90 + 'ms"><div class="step">' +
          '<span class="step-num">0' + (i + 1) + "</span>" +
          '<span class="icon-box"><i class="bi ' + p.icon + '"></i></span>' +
          "<h3>" + esc(p.title) + "</h3><p>" + esc(p.text) + "</p></div></li>"
        );
      }).join("");
    });
  }

  function renderPricing() {
    document.querySelectorAll("[data-pricing]").forEach(function (grid) {
      grid.innerHTML = (window.PRICING || []).map(function (p, i) {
        var price = p.priceKey ? S.pricing[p.priceKey] : p.price;
        var cur = p.priceKey ? '<span class="cur">' + esc(S.pricing.currency) + "</span>" : "";
        var href = p.ctaHref || waLink(p.ctaMessage);
        var ext = p.ctaHref ? "" : ' target="_blank" rel="noopener"';
        return (
          '<div class="col-md-6 col-lg-5 reveal" style="--d:' + i * 90 + 'ms">' +
          '<article class="price-card' + (p.featured ? " is-featured" : "") + '">' +
          '<span class="price-badge">' + (p.featured ? '<i class="bi bi-lightning-charge-fill"></i> ' : "") + esc(p.badge) + "</span>" +
          "<h3>" + esc(p.title) + "</h3>" +
          '<p class="muted">' + esc(p.description) + "</p>" +
          '<div class="price">' + (p.prefix ? '<span class="from">' + esc(p.prefix) + "</span>" : "") +
          '<strong>' + esc(price) + "</strong>" + cur + "</div>" +
          '<ul class="check-list">' + p.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
          '<a class="btn ' + (p.featured ? "btn-primary" : "btn-outline-primary") + ' btn-lg w-100" href="' + href + '"' + ext + ">" +
          (p.ctaHref ? "" : '<i class="bi bi-whatsapp"></i> ') + esc(p.cta) + "</a>" +
          '<ul class="price-notes">' + p.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" +
          "</article></div>"
        );
      }).join("");
    });
  }

  /* ---------- Animations d'apparition ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Formulaire de devis → WhatsApp ---------- */
  function initQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) return;

    // Pré-sélection du type de site via ?type=...
    var params = new URLSearchParams(window.location.search);
    var preType = params.get("type");
    var typeSel = form.querySelector("#f-type");
    if (preType && typeSel) {
      Array.prototype.forEach.call(typeSel.options, function (o) {
        if (o.value === preType) typeSel.value = preType;
      });
    }

    var wa = form.querySelector("#f-whatsapp");
    wa.addEventListener("input", function () {
      var digits = wa.value.replace(/[^\d]/g, "");
      wa.setCustomValidity(digits.length >= 8 && digits.length <= 15 ? "" : "invalid");
    });

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      wa.dispatchEvent(new Event("input"));
      form.querySelectorAll("input, textarea, select").forEach(function (f) {
        if (f.type !== "checkbox" && typeof f.value === "string" && f.value.trim() !== f.value) f.value = f.value.trim();
      });

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      function val(id) { return (form.querySelector(id).value || "").trim(); }
      var lines = [
        "Bonjour " + S.name + ", je souhaite obtenir un devis pour un site web.",
        "",
        "*Nom :* " + val("#f-name"),
        val("#f-company") ? "*Entreprise :* " + val("#f-company") : null,
        "*WhatsApp :* " + val("#f-whatsapp"),
        val("#f-email") ? "*E-mail :* " + val("#f-email") : null,
        "*Type de site :* " + val("#f-type"),
        "*Budget estimé :* " + val("#f-budget"),
        "",
        "*Description du projet :*",
        val("#f-message")
      ].filter(function (l) { return l !== null; });

      var url = waLink(lines.join("\n"));
      var success = document.getElementById("form-success");
      if (success) {
        success.querySelector("a").href = url;
        success.hidden = false;
      }
      // Pas de "noopener" ici : avec, window.open renvoie toujours null.
      var win = window.open(url, "_blank");
      if (win) win.opener = null;
      else window.location.href = url;
    });
  }

  /* ---------- Initialisation ---------- */
  renderHeader();
  renderFooter();
  renderWhatsAppButton();
  renderProjects();
  renderServices();
  renderFreeFeatures();
  renderProcess();
  renderPricing();
  bindConfig();
  initReveal();
  initQuoteForm();
})();
