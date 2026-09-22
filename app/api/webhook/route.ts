import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { createDownloadToken } from "@/lib/download-token";
import { sendDownloadEmail } from "@/lib/email";

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
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;

    if (!email) {
      console.error("[webhook] paiement confirmé mais aucun e-mail trouvé pour la session :", session.id);
    } else {
      try {
        const token = createDownloadToken(email);
        const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/download/${token}`;
        await sendDownloadEmail(email, downloadUrl);
        console.log("[webhook] e-mail de livraison envoyé à", email);
      } catch (error) {
        // On ne fait jamais échouer la réponse au webhook à cause d'un souci d'e-mail :
        // Stripe considère alors le paiement comme "livré" côté plateforme, et on peut
        // toujours renvoyer le lien manuellement si besoin.
        console.error("[webhook] échec de l'envoi de l'e-mail :", error);
      }
    }
  }

  return NextResponse.json({ received: true });
}
