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

C'est maintenant branché automatiquement : à la réception de l'événement Stripe
`checkout.session.completed`, `app/api/webhook/route.ts` génère un lien de
téléchargement signé et valable 7 jours (`lib/download-token.ts`), puis l'envoie
par e-mail via Resend (`lib/email.ts`). Le lien pointe vers
`app/api/download/[token]/route.ts`, qui vérifie la signature avant de servir
`assets/ebook.pdf` (dossier privé, jamais exposé publiquement).

Pour l'activer :

1. Placez votre PDF final à `assets/ebook.pdf` (voir `assets/README.txt`).
2. Créez un compte sur https://resend.com, récupérez une `RESEND_API_KEY`
   (l'adresse d'envoi par défaut `onboarding@resend.dev` fonctionne sans
   configuration ; vérifiez votre propre domaine pour la production).
3. Générez une valeur aléatoire pour `DOWNLOAD_TOKEN_SECRET`
   (ex. `openssl rand -hex 32`).
4. Renseignez ces variables dans `.env.local` (ou sur Vercel) :

```
DOWNLOAD_TOKEN_SECRET=...
RESEND_API_KEY=...
RESEND_FROM_ADDRESS=Psychologie Humaine <onboarding@resend.dev>
```

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
