/* =========================================================
   CONTENUS — services, réalisations, offres, processus.
   Pour ajouter une réalisation : copiez un bloc de PROJECTS,
   déposez la capture dans assets/img/portfolio/ et modifiez
   les champs. Elle apparaîtra automatiquement sur le site.
   ========================================================= */

window.PROJECTS = [
  {
    name: "Saveurs du Delta",
    category: "Gastronomie",
    type: "Site de présentation gastronomique",
    description:
      "Mise en valeur des produits du delta du Saloum (miel, huîtres, crevettes) avec catalogue produits, site multilingue et contact WhatsApp.",
    url: "https://saveursdudelta.com",
    image: "assets/img/portfolio/saveurs-du-delta.webp",
    imageMobile: "assets/img/portfolio/saveurs-du-delta-mobile.webp",
    tags: ["Catalogue", "Multilingue", "WhatsApp"]
  },
  {
    name: "École du Savon",
    category: "Formation",
    type: "Site de formation professionnelle",
    description:
      "Plateforme de l'École du Savon à Dakar : présentation des formations en saponification, inscriptions en ligne et boutique.",
    url: "https://ecoledusavon.com",
    image: "assets/img/portfolio/ecole-du-savon.webp",
    imageMobile: "assets/img/portfolio/ecole-du-savon-mobile.webp",
    tags: ["Formations", "Inscriptions", "Boutique"]
  },
  {
    name: "Loyer Mensuel",
    category: "Immobilier",
    type: "Plateforme immobilière",
    description:
      "Plateforme d'annonces de location : recherche par ville, type de bien et budget, avec contact direct des propriétaires et agences.",
    url: "https://loyermensuel.com",
    image: "assets/img/portfolio/loyer-mensuel.webp",
    imageMobile: "assets/img/portfolio/loyer-mensuel-mobile.webp",
    tags: ["Annonces", "Recherche", "Espace propriétaire"]
  },
  {
    name: "Themis Sport",
    category: "Sport",
    type: "Site de club et d'académie de sport",
    description:
      "Site complet d'un club et d'une académie de sport : disciplines, planning, tarifs, équipe, actualités, galerie et inscriptions, avec espace d'administration.",
    url: "https://themis.rf.gd",
    image: "assets/img/portfolio/themis-sport.webp",
    imageMobile: "assets/img/portfolio/themis-sport-mobile.webp",
    tags: ["Inscriptions", "Planning", "Administration"]
  },
  {
    name: "Académie Banlieu FC",
    category: "Sport",
    type: "Site d'académie de football",
    description:
      "Site de l'Académie Banlieu FC à Pikine : catégories de U7 à U19, calendrier des matchs, actualités, vidéos et inscriptions en ligne.",
    url: "https://banlieufc.infinityfree.io",
    image: "assets/img/portfolio/academie-banlieu-fc.webp",
    imageMobile: "assets/img/portfolio/academie-banlieu-fc-mobile.webp",
    tags: ["Matchs", "Catégories", "Inscriptions"]
  }
];

window.SERVICES = [
  {
    id: "vitrine",
    icon: "bi-window-sidebar",
    title: "Site vitrine",
    audience: "Pour les entreprises, indépendants et professionnels.",
    features: [
      "Présentation de l'entreprise",
      "Présentation des services",
      "Galerie photos",
      "Formulaire de contact",
      "Bouton WhatsApp",
      "Carte Google Maps",
      "Liens vers les réseaux sociaux"
    ],
    badge: "Livré en 48 h"
  },
  {
    id: "ecommerce",
    icon: "bi-bag-check",
    title: "Site e-commerce",
    audience: "Pour vendre vos produits en ligne.",
    features: [
      "Catalogue de produits",
      "Fiches produits détaillées",
      "Panier",
      "Présentation des moyens de paiement",
      "Commande via WhatsApp",
      "Interface responsive"
    ],
    badge: "Sur devis"
  },
  {
    id: "sur-mesure",
    icon: "bi-stars",
    title: "Site professionnel sur mesure",
    audience: "Pour les entreprises aux besoins spécifiques.",
    features: [
      "Sites immobiliers",
      "Sites de restaurants",
      "Sites de formation",
      "Sites d'entreprises",
      "Plateformes de réservation",
      "Sites de présentation de services"
    ],
    badge: "Sur devis",
    note: "Les projets complexes font l'objet d'un devis et d'un délai spécifiques."
  }
];

window.FREE_FEATURES = [
  { icon: "bi-whatsapp", title: "Bouton WhatsApp" },
  { icon: "bi-geo-alt", title: "Intégration Google Maps" },
  { icon: "bi-share", title: "Liens Facebook, Instagram, TikTok" },
  { icon: "bi-images", title: "Galerie photos" },
  { icon: "bi-telephone", title: "Bouton d'appel direct" },
  { icon: "bi-envelope-paper", title: "Formulaire de contact" },
  { icon: "bi-phone", title: "Adaptation mobile" },
  { icon: "bi-search", title: "Optimisation SEO de base" },
  { icon: "bi-magic", title: "Animations légères" },
  { icon: "bi-play-circle", title: "Vidéo de présentation" }
];

window.PROCESS = [
  {
    icon: "bi-chat-dots",
    title: "Discussion",
    text: "Vous nous présentez votre activité, vos objectifs et vos besoins."
  },
  {
    icon: "bi-vector-pen",
    title: "Conception",
    text: "Nous préparons le design et développons votre site."
  },
  {
    icon: "bi-check2-circle",
    title: "Validation",
    text: "Vous examinez le résultat et demandez les ajustements prévus."
  },
  {
    icon: "bi-rocket-takeoff",
    title: "Livraison",
    text: "Votre site est mis en ligne après validation et réception de vos éléments."
  }
];

window.PRICING = [
  {
    id: "vitrine",
    title: "Site Vitrine",
    prefix: "À partir de",
    priceKey: "vitrine",
    badge: "Livraison en 48 heures",
    featured: true,
    description: "L'essentiel pour être visible et crédible sur Internet.",
    features: [
      "Conception professionnelle",
      "Design responsive",
      "Présentation de l'entreprise",
      "Pages de services",
      "Galerie photos",
      "Bouton WhatsApp",
      "Formulaire de contact",
      "SEO de base",
      "Mise en ligne et livraison"
    ],
    notes: [
      "Tarif valable pour les projets standards éligibles au délai de 48 heures.",
      "Hébergement et nom de domaine non inclus dans le tarif de base."
    ],
    cta: "Commander mon site vitrine",
    ctaMessage: "Bonjour, je suis intéressé(e) par l'offre Site Vitrine. Pouvez-vous me donner plus d'informations ?"
  },
  {
    id: "sur-mesure",
    title: "Sur mesure",
    prefix: "",
    price: "Sur devis",
    badge: "Projet spécifique",
    featured: false,
    description: "Pour les projets nécessitant des fonctionnalités spécifiques.",
    features: [
      "Analyse détaillée de vos besoins",
      "E-commerce, réservation, immobilier…",
      "Fonctionnalités personnalisées",
      "Design sur mesure",
      "Délai défini ensemble",
      "Accompagnement personnalisé"
    ],
    notes: ["Devis gratuit et sans engagement."],
    cta: "Demander un devis",
    ctaHref: "contact.html"
  }
];
