import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

// Cette route crée une session Stripe Checkout et redirige l'utilisateur
// vers la page de paiement hébergée par Stripe. Aucune clé secrète ni aucun
// fichier protégé ne transite jamais côté client.
export async function POST() {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const priceId = process.env.STRIPE_PRICE_ID;

    if (!priceId) {
      return NextResponse.json(
        { error: "STRIPE_PRICE_ID n'est pas configuré. Ajoutez-le dans .env.local." },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/?checkout=annule`,
      billing_address_collection: "auto"
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout] erreur Stripe:", error);
    return NextResponse.json({ error: "Impossible de créer la session de paiement." }, { status: 500 });
  }
}
