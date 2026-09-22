import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { book } from "@/lib/content";

export const metadata: Metadata = { title: "Contact — " + book.title };

export default function ContactPage() {
  return (
    <LegalPage title="Contact">
      <p>
        Une question avant ou après votre achat, un souci pour recevoir votre e-book, ou simplement
        envie d&rsquo;échanger ? Écrivez-nous, nous répondons rapidement.
      </p>

      <a
        href={`mailto:${book.contactEmail}`}
        className="mt-4 inline-flex items-center gap-2 border border-bone/40 px-6 py-3 text-sm text-parchment transition-colors hover:border-bone hover:bg-parchment/5"
      >
        {book.contactEmail}
      </a>

      <p className="text-xs text-stone">
        Pour toute question liée à un paiement, merci de préciser l&rsquo;adresse e-mail utilisée lors
        de votre achat.
      </p>
    </LegalPage>
  );
}
