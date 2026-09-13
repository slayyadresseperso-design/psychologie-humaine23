import Link from "next/link";
import { book } from "@/lib/content";

export default function MerciPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <p className="text-sm text-stone">Paiement confirmé</p>
      <h1 className="font-display mt-4 text-4xl text-parchment sm:text-5xl">Merci pour votre achat</h1>
      <p className="mt-6 max-w-md text-bone">
        Votre accès à <span className="text-parchment">{book.title}</span> vous sera envoyé par e-mail
        dans quelques instants. Pensez à vérifier vos courriers indésirables.
      </p>
      <p className="mt-3 max-w-md text-xs text-stone">
        Remarque : la livraison automatique du fichier se branche dans{" "}
        <code className="text-bone">app/api/webhook/route.ts</code> — voir le README.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 border border-bone/40 px-6 py-3 text-sm text-parchment transition-colors hover:border-bone"
      >
        Retour à l&rsquo;accueil
      </Link>
    </main>
  );
}
