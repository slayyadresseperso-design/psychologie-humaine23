import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { book } from "@/lib/content";

export const metadata: Metadata = { title: "Conditions Générales de Vente — " + book.title };

export default function CGVPage() {
  return (
    <LegalPage title="Conditions Générales de Vente">
      <p>
        <strong className="text-parchment">⚠️ Modèle à faire relire avant mise en ligne définitive.</strong>{" "}
        Ce texte couvre les points essentiels pour la vente d&rsquo;un e-book, mais ne remplace pas un
        avis juridique adapté à votre situation précise.
      </p>

      <section>
        <h2 className="font-display text-xl text-parchment">1. Objet</h2>
        <p>
          Les présentes CGV encadrent la vente de l&rsquo;e-book {book.title} ({book.subtitle}), au
          format PDF, proposé au prix de {book.price} TTC, par téléchargement immédiat après paiement.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">2. Prix</h2>
        <p>
          Le prix affiché ({book.price}) est indiqué toutes taxes comprises, en euros. Il peut être
          présenté avec un prix barré à titre indicatif dans le cadre d&rsquo;une offre promotionnelle.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">3. Paiement</h2>
        <p>
          Le paiement s&rsquo;effectue en ligne, par carte bancaire, via la plateforme sécurisée Stripe.
          La commande n&rsquo;est validée qu&rsquo;après confirmation du paiement par Stripe.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">4. Livraison</h2>
        <p>
          Le fichier est livré exclusivement par voie numérique : un lien de téléchargement sécurisé et
          à durée limitée est envoyé par e-mail à l&rsquo;adresse renseignée lors du paiement,
          immédiatement après la confirmation de la transaction.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">5. Droit de rétractation</h2>
        <p>
          Conformément à l&rsquo;article L221-28 du Code de la consommation, le droit de rétractation ne
          peut être exercé pour la fourniture d&rsquo;un contenu numérique non fourni sur un support
          matériel dont l&rsquo;exécution a commencé après accord préalable exprès du consommateur, qui a
          renoncé expressément à son droit de rétractation. En validant votre achat et en accédant
          immédiatement au téléchargement, vous reconnaissez et acceptez cette renonciation.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">6. Réclamations et remboursement</h2>
        <p>
          En cas de problème technique empêchant l&rsquo;accès au fichier (lien défaillant, e-mail non
          reçu), contactez-nous à{" "}
          <a href={`mailto:${book.contactEmail}`} className="text-parchment underline underline-offset-2">
            {book.contactEmail}
          </a>{" "}
          — une solution ou un remboursement sera proposé au cas par cas.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">7. Propriété intellectuelle</h2>
        <p>
          L&rsquo;achat de l&rsquo;e-book donne droit à un usage strictement personnel. Toute revente,
          rediffusion ou reproduction du contenu est interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">8. Droit applicable</h2>
        <p>Les présentes CGV sont soumises au droit français.</p>
      </section>
    </LegalPage>
  );
}
