import { book } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink py-14">
      <div className="container-content flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg text-parchment">{book.title}</p>
          <p className="mt-1 text-xs text-stone">© {book.year} — Tous droits réservés</p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone">
          <a href="/mentions-legales" className="transition-colors hover:text-parchment">
            Mentions légales
          </a>
          <a href="/cgv" className="transition-colors hover:text-parchment">
            CGV
          </a>
          <a href="/confidentialite" className="transition-colors hover:text-parchment">
            Politique de confidentialité
          </a>
          <a href="/contact" className="transition-colors hover:text-parchment">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
