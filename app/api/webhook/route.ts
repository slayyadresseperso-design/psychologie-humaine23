import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

// Webhook Stripe : confirme le paiement et déclenche la livraison du fichier.
// À connecter dans le dashboard Stripe > Développeurs > Webhooks
// URL à renseigner : https://votre-domaine.com/api/webhook
export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Webhook non configuré." }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error("[webhook] signature invalide:", error);
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    // TODO — brancher ici la livraison réelle :
    // 1. Récupérer l'e-mail de l'acheteur (event.data.object.customer_details.email)
    // 2. Générer un lien de téléchargement signé et à durée limitée vers
    //    process.env.PROTECTED_EBOOK_SOURCE_PATH (stockage privé, jamais /public)
    // 3. Envoyer ce lien par e-mail (ex. avec Resend, en utilisant RESEND_API_KEY)
    console.log("[webhook] paiement confirmé pour la session :", event.data.object);
  }

  return NextResponse.json({ received: true });
}
