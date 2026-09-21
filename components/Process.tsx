import { process } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function Process() {
  return (
    <section className="border-t border-hairline bg-ink py-28 sm:py-36">
      <div className="container-content">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-4xl text-parchment sm:text-5xl">Comment ça marche</h2>
        </ScrollReveal>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <ScrollReveal key={step.number} delay={Math.min(i * 0.08, 0.3)}>
              <div>
                <span className="font-display text-3xl text-stone">{step.number}</span>
                <h3 className="mt-4 text-lg text-parchment">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{step.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
