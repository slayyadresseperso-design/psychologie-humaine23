"use client";

import { useEffect, useState } from "react";
import { book } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between">
        <a href="#" className="font-display text-lg tracking-wide text-parchment">
          {book.title}
        </a>
        <a
          href="#prix"
          className="hidden sm:inline-flex items-center gap-2 border border-bone/40 px-5 py-2 text-sm text-parchment transition-colors duration-300 hover:border-bone hover:bg-parchment/5"
        >
          Obtenir l&rsquo;e-book
        </a>
      </div>
    </header>
  );
}
