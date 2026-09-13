"use client";

import { useState } from "react";
import { book } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

const included = [
  "Livre numérique complet",
  `Environ ${book.chaptersCount} chapitres`,
  "Cas pratiques",
  "Exercices",
  "Outils psychologiques",
  "Lecture immédiate"
];

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error(data.error);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <section id="prix" className="border-t border-hairline bg-charcoal py-28 sm:py-36">
      <div className="container-content">
        <ScrollReveal className="mx-auto max-w-md border border-bone/20 p-10 text-center sm:p-14">
          <p className="text-sm text-stone">E-book numérique</p>
          <h2 className="font-display mt-3 text-3xl text-parchment sm:text-4xl">{book.title}</h2>
          <div className="mt-6 flex items-end justify-center gap-3">
            <span className="text-2xl text-stone line-through decoration-stone/60">{book.originalPrice}</span>
            <p className="font-display text-5xl text-parchment">{book.price}</p>
          </div>
          <p className="mt-2 text-xs uppercase tracking-wide text-stone">Offre de lancement</p>

          <ul className="mx-auto mt-8 max-w-xs space-y-3 text-left">
            {included.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-bone">
                <span aria-hidden className="mt-1 text-stone">
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-10 inline-flex w-full items-center justify-center gap-2 bg-parchment px-7 py-4 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? "Redirection…" : "Obtenir le livre"}
          </button>

          <p className="mt-5 text-xs text-stone">Paiement sécurisé, traité par Stripe.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
