import { book } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function CTAFinal() {
  return (
    <section className="border-t border-hairline bg-ink py-32 sm:py-40">
      <div className="container-content text-center">
        <ScrollReveal>
          <p className="text-balance mx-auto max-w-xl font-display text-3xl leading-snug text-parchment sm:text-4xl">
            Comprendre les autres commence souvent par se comprendre soi-même.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-sm uppercase tracking-wideish text-stone">{book.title}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <a
            href="#prix"
            className="mt-10 inline-flex items-center gap-2 bg-parchment px-8 py-4 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
          >
            Obtenir l&rsquo;e-book
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
