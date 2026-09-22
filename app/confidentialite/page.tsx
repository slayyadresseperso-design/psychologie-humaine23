import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { book } from "@/lib/content";

export const metadata: Metadata = { title: "Politique de confidentialité — " + book.title };

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        Cette page explique quelles données sont collectées lors de votre visite ou de votre achat sur
        ce site, et comment elles sont utilisées.
      </p>

      <section>
        <h2 className="font-display text-xl text-parchment">Données collectées</h2>
        <p>
          Lors d&rsquo;un achat, votre adresse e-mail est transmise à notre prestataire de paiement
          (Stripe) afin de vous envoyer votre lien de téléchargement. Aucune autre donnée personnelle
          n&rsquo;est collectée ou stockée sur nos propres serveurs.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">Paiement</h2>
        <p>
          Les informations de paiement (numéro de carte, etc.) sont saisies directement sur la page
          sécurisée de Stripe et ne transitent jamais par nos serveurs. Consultez la{" "}
          <a
            href="https://stripe.com/fr/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-parchment underline underline-offset-2"
          >
            politique de confidentialité de Stripe
          </a>{" "}
          pour plus de détails.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">Envoi d&rsquo;e-mail</h2>
        <p>
          Après votre achat, votre adresse e-mail est utilisée uniquement pour vous transmettre votre
          lien de téléchargement, via le service Resend. Elle n&rsquo;est ni revendue, ni utilisée à des
          fins publicitaires, ni transmise à un tiers pour un autre usage.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">Cookies</h2>
        <p>
          Ce site n&rsquo;utilise pas de cookies de suivi publicitaire. Seuls des éléments techniques
          strictement nécessaires au fonctionnement du site peuvent être utilisés.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&rsquo;un droit d&rsquo;accès, de rectification et de
          suppression de vos données. Pour l&rsquo;exercer, contactez-nous à{" "}
          <a href={`mailto:${book.contactEmail}`} className="text-parchment underline underline-offset-2">
            {book.contactEmail}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
