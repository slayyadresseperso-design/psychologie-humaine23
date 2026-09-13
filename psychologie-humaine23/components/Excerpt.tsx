"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { excerpt } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function Excerpt() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-t border-hairline bg-ink py-28 sm:py-36">
      <div className="container-content">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-parchment sm:text-5xl">Un aperçu avant de commencer</h2>
          <p className="mt-5 text-bone">Un extrait gratuit de l&rsquo;introduction du livre.</p>
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-2xl">
          <button
            onClick={() => setOpen((v) => !v)}
            className="mx-auto flex items-center gap-2 border border-bone/40 px-7 py-3.5 text-sm text-parchment transition-colors duration-300 hover:border-bone hover:bg-parchment/5"
          >
            {open ? "Fermer l'extrait" : "Lire un extrait"}
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-10 border-t border-hairline pt-10">
                  <h3 className="font-display text-2xl text-parchment">{excerpt.title}</h3>
                  <div className="mt-6 space-y-5">
                    {excerpt.paragraphs.map((p, i) => (
                      <p key={i} className="text-balance leading-relaxed text-bone">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
