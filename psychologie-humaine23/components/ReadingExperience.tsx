import { readingExperience } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function ReadingExperience() {
  return (
    <section className="border-t border-hairline bg-ink py-28 sm:py-36">
      <div className="container-content">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-4xl text-parchment sm:text-5xl">
            Une expérience de lecture, pas un simple document
          </h2>
          <p className="mt-5 text-bone">
            Chaque chapitre alterne explications, exemples et mise en pratique.
          </p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {readingExperience.map((item, i) => (
            <ScrollReveal key={item.label} delay={Math.min(i * 0.05, 0.3)}>
              <div className="border-t border-bone/30 pt-5">
                <h3 className="font-display text-lg text-parchment">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
