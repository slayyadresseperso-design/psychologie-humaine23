# Psychologie Humaine — site de vente premium

Landing page haut de gamme pour vendre l'e-book *Psychologie Humaine*, construite avec
Next.js 14 (App Router), TypeScript, Tailwind CSS et Framer Motion.

## ⚠️ À lire avant de personnaliser

- **Le prix n'est pas défini.** Il apparaît partout comme `[PRIX]` — à modifier dans
  `lib/content.ts` (`book.price`).
- **La couverture utilisée est celle que vous avez fournie**, avec le titre
  "LES MÉCANISMES DE L'ESPRIT HUMAIN". Le texte du site, lui, utilise le titre officiel
  donné dans votre brief : "PSYCHOLOGIE HUMAINE". Si la couverture définitive du livre
  diffère de l'image fournie, remplacez simplement `public/images/book-cover.png`.
- **La galerie "Aperçu du livre"** contient déjà votre couverture et votre page de
  sommaire (des vraies images). Les 4 autres emplacements sont des placeholders
  clairement identifiés, à remplacer dans `public/images/preview/` puis dans
  `components/BookPreview.tsx` — voir `public/images/preview/README.txt`.
- **L'intégration Stripe est prête mais désactivée tant que les clés ne sont pas
  renseignées** (voir plus bas).

## Structure du projet

```
app/
  layout.tsx          Polices, métadonnées SEO, Open Graph
  page.tsx             Assemble toutes les sections de la page
  globals.css          Styles globaux, accessibilité (reduced-motion)
  merci/page.tsx        Page de confirmation après paiement
  api/checkout/route.ts Crée une session Stripe Checkout
  api/webhook/route.ts  Reçoit la confirmation de paiement Stripe
components/            Un composant par section (Hero, Chapters, Pricing, FAQ, ...)
lib/content.ts         Tous les textes du site (titre, sommaire, FAQ, prix...)
lib/stripe.ts          Client Stripe (clé secrète, jamais exposée au frontend)
public/images/         Couverture, page de sommaire, placeholders de la galerie
```

Pour changer un texte (FAQ, arguments, sommaire, extrait...), il suffit de modifier
`lib/content.ts` — aucun composant n'a besoin d'être touché.

## Installation

Prérequis : Node.js 18.18 ou supérieur.

```bash
npm install
cp .env.example .env.local
```

Renseignez ensuite `.env.local` avec vos propres clés (voir section Stripe ci-dessous).

## Lancer le site en local

```bash
npm run dev
```

Le site est disponible sur http://localhost:3000

## Configurer le paiement (Stripe)

1. Créez un compte sur https://dashboard.stripe.com
2. Créez un produit "Psychologie Humaine" avec un prix unique → copiez son `price_id`.
3. Dans **Développeurs > Clés API**, copiez la clé publique et la clé secrète.
4. Dans **Développeurs > Webhooks**, ajoutez un endpoint pointant vers
   `https://votre-domaine.com/api/webhook`, écoutant l'événement
   `checkout.session.completed`, puis copiez le secret de signature.
5. Renseignez ces valeurs dans `.env.local` :

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
STRIPE_SECRET_KEY=...
STRIPE_PRICE_ID=...
STRIPE_WEBHOOK_SECRET=...
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### Livraison du fichier après paiement

Le PDF ne doit **jamais** se trouver dans `public/` (il serait accessible sans payer).
Dans `app/api/webhook/route.ts`, un `TODO` indique où brancher :

1. la génération d'un lien de téléchargement signé et à durée limitée, à partir d'un
   stockage privé (S3, Cloudflare R2, Supabase Storage...) référencé par la variable
   `PROTECTED_EBOOK_SOURCE_PATH` ;
2. l'envoi de ce lien par e-mail (par exemple via Resend, clé `RESEND_API_KEY`).

Tant que cette étape n'est pas branchée, le paiement fonctionne mais aucun e-mail
n'est envoyé automatiquement — pensez-y avant la mise en ligne.

## Build et déploiement

```bash
npm run build
npm run start
```

Déploiement recommandé : [Vercel](https://vercel.com) (créateur de Next.js).

1. Poussez le projet sur un dépôt Git.
2. Importez-le sur Vercel.
3. Renseignez les mêmes variables d'environnement que dans `.env.local`
   (dashboard Vercel > Settings > Environment Variables).
4. Une fois déployé, mettez à jour `NEXT_PUBLIC_SITE_URL` avec l'URL définitive,
   et mettez à jour l'URL du webhook Stripe en conséquence.

## Pages légales

Les liens du footer (`/mentions-legales`, `/cgv`, `/confidentialite`, `/contact`)
pointent vers des pages à créer — elles ne sont pas incluses, car leur contenu dépend
de votre statut juridique et de vos conditions de vente réelles.
