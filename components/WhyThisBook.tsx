import { whyThisBook } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function WhyThisBook() {
  return (
    <section className="border-t border-hairline bg-charcoal py-28 sm:py-36">
      <div className="container-content">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-4xl text-parchment sm:text-5xl">Pourquoi ce livre ?</h2>
        </ScrollReveal>
        <div className="mx-auto max-w-2xl">
          {whyThisBook.map((reason, i) => (
            <ScrollReveal key={reason} delay={Math.min(i * 0.06, 0.3)}>
              <div className="flex items-center gap-6 border-b border-hairline py-6 last:border-b-0">
                <span aria-hidden className="h-px w-8 flex-shrink-0 bg-bone/40" />
                <p className="font-display text-xl text-parchment sm:text-2xl">{reason}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
