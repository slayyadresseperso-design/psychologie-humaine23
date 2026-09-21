import { forWho } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function ForWho() {
  return (
    <section className="border-t border-hairline bg-charcoal py-28 sm:py-36">
      <div className="container-content">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-4xl text-parchment sm:text-5xl">Pour qui ?</h2>
        </ScrollReveal>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {forWho.map((line, i) => (
            <ScrollReveal key={line} delay={Math.min(i * 0.06, 0.24)}>
              <p className="text-balance border-l border-bone/30 pl-6 text-lg leading-relaxed text-parchment">
                {line}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
