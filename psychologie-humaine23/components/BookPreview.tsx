"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type PreviewItem =
  | { kind: "image"; src: string; alt: string; label: string }
  | { kind: "placeholder"; label: string; hint: string };

const items: PreviewItem[] = [
  { kind: "image", src: "/images/book-cover.png", alt: "Couverture du livre", label: "Couverture" },
  {
    kind: "image",
    src: "/images/book-spread-sommaire.png",
    alt: "Sommaire du livre",
    label: "Sommaire"
  },
  {
    kind: "placeholder",
    label: "Page de titre",
    hint: "Remplacez /public/images/preview/page-titre.png"
  },
  {
    kind: "placeholder",
    label: "Page de contenu",
    hint: "Remplacez /public/images/preview/page-contenu.png"
  },
  {
    kind: "placeholder",
    label: "Page avec exercices",
    hint: "Remplacez /public/images/preview/page-exercices.png"
  },
  {
    kind: "placeholder",
    label: "Page de réflexion",
    hint: "Remplacez /public/images/preview/page-reflexion.png"
  }
];

export default function BookPreview() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="border-t border-hairline bg-ink py-28 sm:py-36">
      <div className="container-content">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-4xl text-parchment sm:text-5xl">Aperçu du livre</h2>
          <p className="mt-5 text-bone">
            Un aperçu de la mise en page, avant de commencer votre lecture.
          </p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={Math.min(i * 0.05, 0.3)}>
              <button
                onClick={() => item.kind === "image" && setActive(i)}
                className={`group relative block aspect-[3/4] w-full overflow-hidden border border-hairline bg-charcoal ${
                  item.kind === "image" ? "cursor-zoom-in" : "cursor-default"
                }`}
              >
                {item.kind === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-bone/25 p-4 text-center">
                    <span className="text-xs text-stone">{item.hint}</span>
                  </div>
                )}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-3 pb-3 pt-8 text-left text-sm text-parchment">
                  {item.label}
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && items[active].kind === "image" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[86vh] max-w-3xl"
            >
              <Image
                src={(items[active] as { src: string }).src}
                alt=""
                width={1200}
                height={1600}
                className="max-h-[86vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
