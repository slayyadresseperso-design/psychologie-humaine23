import Link from "next/link";
import type { ReactNode } from "react";
import { book } from "@/lib/content";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-ink px-6 py-20 text-parchment">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm text-stone transition-colors hover:text-parchment">
          ← Retour à l&rsquo;accueil
        </Link>

        <h1 className="font-display mt-8 text-3xl text-parchment sm:text-4xl">{title}</h1>

        <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-bone sm:text-base">
          {children}
        </div>

        <p className="mt-16 text-xs text-stone">
          {book.title} — {book.year}
        </p>
      </div>
    </main>
  );
}
