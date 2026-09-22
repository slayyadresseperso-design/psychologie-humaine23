import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Adresse d'envoi. "onboarding@resend.dev" fonctionne sans configuration de domaine
// (idéal pour démarrer) mais Resend recommande de vérifier votre propre domaine
// pour la production — voir https://resend.com/docs/dashboard/domains/introduction
const FROM_ADDRESS = process.env.RESEND_FROM_ADDRESS || "Psychologie Humaine <onboarding@resend.dev>";

export async function sendDownloadEmail(to: string, downloadUrl: string) {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY n'est pas définie, e-mail non envoyé. Lien généré :", downloadUrl);
    return;
  }

  await resend.emails.send({
    from: FROM_ADDRESS,
    to,
    subject: "Votre e-book Psychologie Humaine est prêt 📖",
    html: `
      <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 480px; margin: 0 auto; padding: 32px; color: #1c1a17; background: #f5f1e8;">
        <h1 style="font-size: 22px; margin-bottom: 16px;">Merci pour votre achat !</h1>
        <p style="font-size: 15px; line-height: 1.6;">
          Votre exemplaire de <strong>Psychologie Humaine</strong> vous attend. Cliquez sur le bouton
          ci-dessous pour le télécharger au format PDF.
        </p>
        <p style="margin: 28px 0;">
          <a href="${downloadUrl}"
             style="background: #1c1a17; color: #f5f1e8; padding: 12px 28px; text-decoration: none;
                    border-radius: 4px; font-size: 15px; display: inline-block;">
            Télécharger mon e-book
          </a>
        </p>
        <p style="font-size: 13px; color: #6b6558; line-height: 1.5;">
          Ce lien est valable 7 jours et réservé à votre usage personnel. Pensez à sauvegarder le
          fichier une fois téléchargé. Besoin d'aide ? Répondez simplement à cet e-mail.
        </p>
      </div>
    `
  });
}
