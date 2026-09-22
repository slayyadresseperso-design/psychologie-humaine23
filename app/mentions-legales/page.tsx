import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { book } from "@/lib/content";

export const metadata: Metadata = { title: "Mentions légales — " + book.title };

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <p>
        <strong className="text-parchment">⚠️ Modèle à compléter avant mise en ligne définitive.</strong>{" "}
        Les mentions légales sont obligatoires en France pour tout site marchand et doivent identifier
        précisément l&rsquo;éditeur du site (personne physique ou morale). Remplacez les champs entre
        crochets ci-dessous par vos informations réelles.
      </p>

      <section>
        <h2 className="font-display text-xl text-parchment">Éditeur du site</h2>
        <p>
          Le présent site est édité par [Nom et prénom, ou raison sociale si vous avez une entreprise],
          [statut : entrepreneur individuel / micro-entrepreneur / société — SIRET si applicable],
          domicilié·e à [adresse complète].
        </p>
        <p>
          Contact :{" "}
          <a href={`mailto:${book.contactEmail}`} className="text-parchment underline underline-offset-2">
            {book.contactEmail}
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis —{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-parchment underline underline-offset-2"
          >
            vercel.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">Propriété intellectuelle</h2>
        <p>
          L&rsquo;ensemble du contenu de ce site (textes, mise en page, identité visuelle) ainsi que le
          contenu de l&rsquo;e-book {book.title} sont protégés par le droit d&rsquo;auteur. Toute
          reproduction ou diffusion, totale ou partielle, sans autorisation est interdite.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-parchment">Paiement</h2>
        <p>
          Les paiements effectués sur ce site sont traités par Stripe Payments Europe, Ltd., prestataire
          certifié PCI-DSS. Aucune donnée bancaire n&rsquo;est stockée sur les serveurs de ce site.
        </p>
      </section>
    </LegalPage>
  );
}
