/* =========================================================
   Écran d'intro — affiché une fois par visite (session).
   Le contenu est visible par défaut : les animations ne font
   que l'embellir, et la fermeture repose sur un minuteur.
   Il reste donc affiché même si les animations sont désactivées.
   Ajoutez ?intro=1 à l'adresse pour le revoir.
   ========================================================= */
(function () {
  "use strict";

  var KEY = "baweb-intro-vue";
  var DUREE = 1400; // durée d'affichage en millisecondes
  var S = window.SITE || {};
  var force = /[?&]intro=1(&|$)/.test(window.location.search);

  function dejaVue() {
    try { return sessionStorage.getItem(KEY) === "1"; } catch (e) { return false; }
  }
  if (!force && dejaVue()) return;
  try { sessionStorage.setItem(KEY, "1"); } catch (e) { /* stockage indisponible */ }

  var shortName = S.shortName || "BaWeb";
  var rest = (S.name || "BaWeb Agency").replace(shortName, "").trim();

  var root = document.createElement("div");
  root.className = "site-intro";
  root.setAttribute("role", "group");
  root.setAttribute("aria-label", "Écran d'introduction");

  var inner = document.createElement("div");
  inner.className = "site-intro-inner";
  inner.innerHTML =
    '<svg class="site-intro-logo" viewBox="0 0 40 40" aria-hidden="true"><defs><linearGradient id="bwi" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3D7BFF"/><stop offset="1" stop-color="#1F4FE0"/></linearGradient></defs><rect width="40" height="40" rx="11" fill="url(#bwi)"/><path d="M12 10h9.2c4.3 0 6.8 2 6.8 5.3 0 2.2-1.2 3.7-3.1 4.3 2.5.5 4.1 2.3 4.1 4.9 0 3.6-2.8 5.5-7.3 5.5H12V10Zm8.4 8.2c2 0 3.1-.8 3.1-2.3s-1.1-2.2-3.1-2.2h-3.7v4.5h3.7Zm.5 8.1c2.2 0 3.4-.8 3.4-2.5 0-1.6-1.2-2.4-3.4-2.4h-4.2v4.9h4.2Z" fill="#fff"/></svg>';

  var name = document.createElement("div");
  name.className = "site-intro-name";
  name.appendChild(document.createTextNode(shortName + " "));
  var em = document.createElement("em");
  em.textContent = rest;
  name.appendChild(em);
  inner.appendChild(name);

  if (S.tagline) {
    var tag = document.createElement("p");
    tag.className = "site-intro-tagline";
    tag.textContent = S.tagline;
    inner.appendChild(tag);
  }

  var bar = document.createElement("div");
  bar.className = "site-intro-bar";
  bar.setAttribute("aria-hidden", "true");
  bar.appendChild(document.createElement("span"));
  inner.appendChild(bar);
  root.appendChild(inner);

  var skip = document.createElement("button");
  skip.type = "button";
  skip.className = "site-intro-skip";
  skip.textContent = "Passer";
  root.appendChild(skip);

  document.body.insertBefore(root, document.body.firstChild);
  document.documentElement.classList.add("intro-open");

  var ferme = false;
  var minuteur = window.setTimeout(fermer, DUREE);

  function fermer() {
    if (ferme) return;
    ferme = true;
    window.clearTimeout(minuteur);
    document.removeEventListener("keydown", surTouche);
    document.documentElement.classList.remove("intro-open");
    root.classList.add("is-leaving");
    // Retrait par minuteur : ne dépend d'aucun événement d'animation
    window.setTimeout(function () { root.remove(); }, 450);
  }

  function surTouche(ev) {
    if (ev.key === "Escape") fermer();
  }

  skip.addEventListener("click", fermer);
  document.addEventListener("keydown", surTouche);
})();
