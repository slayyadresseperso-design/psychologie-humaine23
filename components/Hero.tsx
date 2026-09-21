"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { book } from "@/lib/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-28 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 620px at 50% -8%, rgba(201,194,180,0.10), transparent 60%)"
        }}
      />
      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? undefined : "hidden"}
        animate={shouldReduceMotion ? undefined : "show"}
        className="container-content relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
      >
        <div className="order-2 lg:order-1">
          <motion.p variants={item} className="mb-6 text-sm text-stone">
            Un e-book en 35 chapitres
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-balance text-5xl leading-[1.05] text-parchment sm:text-6xl lg:text-7xl"
          >
            {book.title}
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-bone">
            {book.subtitle}
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-md text-base italic text-stone">
            {book.tagline}
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#prix"
              className="inline-flex items-center gap-2 bg-parchment px-7 py-3.5 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Obtenir l&rsquo;e-book
            </a>
            <a
              href="#decouvrir"
              className="inline-flex items-center gap-2 border-b border-bone/50 pb-1 text-sm text-parchment transition-colors duration-300 hover:border-parchment"
            >
              Découvrir le livre
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[380px]">
            <div
              aria-hidden
              className="absolute -inset-16 -z-10 rounded-full opacity-90 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(255,232,186,0.35), rgba(201,194,180,0.14) 45%, transparent 70%)" }}
            />
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-full blur-2xl animate-glow-pulse"
              style={{ background: "radial-gradient(circle, rgba(255,244,214,0.45), transparent 70%)" }}
            />
            <Image
              src="/images/book-cover.png"
              alt={`Couverture du livre ${book.title}`}
              width={1024}
              height={1365}
              priority
              className="h-auto w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
