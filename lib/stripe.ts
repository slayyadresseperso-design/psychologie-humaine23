import Stripe from "stripe";

// La clé secrète n'est lue que côté serveur (jamais dans un composant "use client").
// Elle provient uniquement de la variable d'environnement STRIPE_SECRET_KEY.
if (!process.env.STRIPE_SECRET_KEY) {
  // On ne lève pas d'erreur au build pour permettre `next build` sans clés réelles,
  // mais tout appel à l'API échouera tant que la variable n'est pas définie.
  console.warn("[stripe] STRIPE_SECRET_KEY n'est pas définie. Configurez .env.local avant la mise en production.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2025-03-31.basil" as Stripe.LatestApiVersion
});
