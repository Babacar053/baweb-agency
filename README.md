# BaWeb Agency — site vitrine

Site vitrine d'agence web, **100 % statique** : HTML + Bootstrap 5 + CSS + JavaScript natif.
Aucun langage serveur, aucune base de données, aucun build : il s'héberge gratuitement sur **GitHub Pages**.

## Structure

```
baweb-agency/
├── index.html            Accueil
├── services.html         Nos services
├── realisations.html     Portfolio
├── tarifs.html           Tarifs + fonctionnalités offertes + FAQ
├── a-propos.html         À propos
├── contact.html          Formulaire de devis → WhatsApp
├── 404.html              Page introuvable
├── creation-site-*.html, site-web-*.html   Pages SEO (solutions par métier)
├── robots.txt / sitemap.xml / .nojekyll
├── assets/
│   ├── css/style.css     Styles (couleurs dans :root)
│   ├── js/config.js      ⭐ Nom, WhatsApp, téléphone, e-mail, tarifs, réseaux
│   ├── js/data.js        ⭐ Services, réalisations, offres, processus, formules
│   ├── js/main.js        En-tête, pied de page, rendu, animations, formulaire
│   └── img/              Favicon, image de partage, captures du portfolio
└── .github/workflows/deploy.yml   Déploiement automatique
```

## Modifier les contenus

| Je veux changer…                         | Fichier                         |
|------------------------------------------|---------------------------------|
| Numéro WhatsApp, téléphone, e-mail        | `assets/js/config.js`           |
| Nom de l'agence, tarif du site vitrine    | `assets/js/config.js`           |
| Réseaux sociaux (s'affichent si remplis)  | `assets/js/config.js`           |
| Ajouter une réalisation                   | `assets/js/data.js` → `PROJECTS`|
| Services, fonctionnalités offertes        | `assets/js/data.js`             |
| Couleurs                                  | `assets/css/style.css` (`:root`)|

**Ajouter une réalisation :** déposez une capture (1200 × 750, format `.webp`) dans
`assets/img/portfolio/`, puis copiez un bloc dans `PROJECTS` de `data.js`.
Elle apparaît automatiquement sur l'accueil, la page Réalisations et À propos.

## Tester en local

Ouvrez le dossier avec XAMPP (`http://localhost/.../baweb-agency/`) ou n'importe quel
serveur statique, par exemple :

```bash
npx serve .
```

## Publier sur GitHub Pages

1. Créez un dépôt sur GitHub nommé **`baweb-agency`** (public).
2. Dans ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Site BaWeb Agency"
   git branch -M main
   git remote add origin https://github.com/Babacar053/baweb-agency.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : « GitHub Actions »**.
4. L'onglet **Actions** lance le déploiement (≈ 1 minute). Le site est en ligne sur
   `https://bawebagency.com/` (ou `https://babacar053.github.io/baweb-agency/` sans domaine).

Chaque `git push` sur `main` republie le site automatiquement.

### Nom de domaine : bawebagency.com

Les balises `canonical`/`og:`, `robots.txt`, `sitemap.xml` et `url` dans `config.js`
pointent déjà vers `https://bawebagency.com/`. Une fois le domaine acheté :

1. Chez le registrar, zone DNS :
   - 4 enregistrements **A** sur `@` : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 enregistrement **CNAME** `www` → `babacar053.github.io`
2. GitHub → dépôt → **Settings → Pages → Custom domain** : `bawebagency.com` → Save.
3. Quand la vérification DNS est verte, cocher **Enforce HTTPS**.

## Notes

- Les URL propres (`/services`, `/tarifs`…) fonctionnent nativement sur GitHub Pages.
- Le formulaire n'enregistre aucune donnée : il prépare un message et ouvre WhatsApp.
- Aucune clé secrète n'est utilisée.
