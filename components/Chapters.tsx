"use client";

import { useState } from "react";
import { parts, fullSommaire, book } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function Chapters() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-t border-hairline bg-ink py-28 sm:py-36">
      <div className="container-content">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-4xl text-parchment sm:text-5xl">Ce que vous allez découvrir</h2>
          <p className="mt-5 text-bone">
            {book.partsCount} parties, {book.chaptersCount} chapitres — une progression pensée pour se
            construire, étape après étape.
          </p>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl divide-y divide-hairline border-y border-hairline">
          {parts.map((p, i) => (
            <ScrollReveal key={p.number} delay={Math.min(i * 0.04, 0.3)}>
              <div className="group flex items-baseline gap-6 py-6 sm:gap-10 sm:py-7">
                <span className="font-display text-2xl text-stone sm:text-3xl">{p.number}</span>
                <span className="text-lg text-parchment transition-colors duration-300 group-hover:text-bone sm:text-xl">
                  {p.title}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-sm text-stone underline decoration-hairline underline-offset-4 transition-colors duration-300 hover:text-parchment"
          >
            {open ? "Masquer le sommaire complet" : "Voir le sommaire complet des 35 chapitres"}
          </button>
        </div>

        {open && (
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {fullSommaire.map((section) => (
              <div key={section.part}>
                <h3 className="font-display text-lg text-parchment">{section.part}</h3>
                <ul className="mt-3 space-y-2">
                  {section.chapters.map((c) => (
                    <li key={c} className="text-sm leading-relaxed text-bone">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
