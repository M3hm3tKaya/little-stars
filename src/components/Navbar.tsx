"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/programlar", label: "Programlar" },
  { href: "/egitmenler", label: "Eğitmenler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/veliler", label: "Veli Bilgilendirme" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <svg className="w-8 h-8 text-primary-yellow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-xl md:text-2xl font-extrabold text-dark-navy">
              Little <span className="text-primary-yellow">Stars</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-dark-navy/80 hover:text-primary-yellow transition-colors rounded-full hover:bg-pastel-yellow/50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kayit"
              className="ml-3 btn-pill bg-primary-yellow text-dark-navy text-sm font-bold shadow-md hover:shadow-lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Kayıt Ol
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-pastel-yellow/30 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-dark-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-warm-white border-t border-pastel-yellow/30 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-dark-navy/80 hover:text-primary-yellow hover:bg-pastel-yellow/30 rounded-2xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kayit"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-3 btn-pill bg-primary-yellow text-dark-navy text-sm font-bold shadow-md"
            >
              Kayıt Ol
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
