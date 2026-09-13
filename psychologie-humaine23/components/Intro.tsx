import ScrollReveal from "./ScrollReveal";

export default function Intro() {
  return (
    <section id="decouvrir" className="border-t border-hairline bg-ink py-28 sm:py-36">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-balance text-4xl leading-tight text-parchment sm:text-5xl">
              Comprendre l&rsquo;humain, c&rsquo;est aussi mieux se comprendre soi-même.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-8 text-balance text-lg leading-relaxed text-bone">
              Ce livre explore les mécanismes qui façonnent nos pensées, nos émotions et nos
              relations : la perception, la communication, l&rsquo;influence, la confiance en
              soi. Sans promesse magique — avec une progression claire, des exemples concrets
              et des outils que l&rsquo;on peut réellement mettre en pratique.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
