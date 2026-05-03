import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <div>
        <div className="font-serif text-warm text-base tracking-wide mb-1">
          Max Maistre Media
        </div>
        <div className="text-xs text-white/25">
          &copy; 2026 Max Maistre Media - maxmaistremedia.ca
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <Link
          href="#services"
          className="text-xs text-white/40 tracking-wider uppercase hover:text-orange transition-colors"
        >
          Services
        </Link>
        <Link
          href="#about"
          className="text-xs text-white/40 tracking-wider uppercase hover:text-orange transition-colors"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-xs text-white/40 tracking-wider uppercase hover:text-orange transition-colors"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
