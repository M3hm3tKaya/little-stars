"use client";

import { useState } from "react";
import FloatingShapes from "@/components/FloatingShapes";
import SectionTitle from "@/components/SectionTitle";

const categories = ["Tumu", "Siniflar", "Bahce", "Etkinlikler", "Yemek", "Kutlamalar"];

const galleryItems = [
  { id: 1, category: "Siniflar", title: "Mini Yildizlar Sinifi", bg: "bg-accent-pink", height: "h-48" },
  { id: 2, category: "Bahce", title: "Dis Mekan Oyun Alani", bg: "bg-accent-green", height: "h-64" },
  { id: 3, category: "Etkinlikler", title: "Sanat Atolyesi", bg: "bg-accent-purple", height: "h-52" },
  { id: 4, category: "Yemek", title: "Organik Kahvalti", bg: "bg-primary-yellow", height: "h-48" },
  { id: 5, category: "Kutlamalar", title: "Dogum Gunu Partisi", bg: "bg-accent-pink", height: "h-56" },
  { id: 6, category: "Siniflar", title: "Kesficiler Sinifi", bg: "bg-accent-blue", height: "h-52" },
  { id: 7, category: "Bahce", title: "Kum Havuzu", bg: "bg-accent-green", height: "h-48" },
  { id: 8, category: "Etkinlikler", title: "Drama Gosterisi", bg: "bg-accent-purple", height: "h-60" },
  { id: 9, category: "Yemek", title: "Ogle Yemegi", bg: "bg-primary-yellow", height: "h-48" },
  { id: 10, category: "Kutlamalar", title: "23 Nisan Kutlamasi", bg: "bg-accent-pink", height: "h-56" },
  { id: 11, category: "Siniflar", title: "Yaraticilar Atollye", bg: "bg-accent-blue", height: "h-52" },
  { id: 12, category: "Etkinlikler", title: "Bilim Deneyleri", bg: "bg-accent-green", height: "h-48" },
];

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState("Tumu");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "Tumu"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <FloatingShapes />

      {/* Header */}
      <section className="bg-gradient-to-br from-pastel-green via-warm-white to-pastel-blue py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Foto"
            highlight="Galeri"
            subtitle="Okulumuzdan kareler, mutlu anlar ve renkli aktiviteler."
          />
        </div>
      </section>

      {/* Filter buttons */}
      <section className="py-8 bg-warm-white relative z-10 sticky top-16 md:top-20 backdrop-blur-sm bg-warm-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                  activeFilter === cat
                    ? "bg-primary-yellow text-dark-navy shadow-md"
                    : "bg-white text-dark-navy/60 hover:bg-pastel-yellow border border-dark-navy/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-8 pb-20 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="masonry-grid">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item.id)}
                className={`${item.bg} ${item.height} rounded-[20px] flex items-center justify-center cursor-pointer card-hover group`}
              >
                <div className="text-center text-white">
                  <svg className="w-10 h-10 mx-auto mb-2 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <p className="font-bold text-sm opacity-80 group-hover:opacity-100 transition-opacity">{item.title}</p>
                  <p className="text-xs opacity-60">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="relative max-w-3xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {(() => {
              const item = galleryItems.find((g) => g.id === lightbox);
              if (!item) return null;
              return (
                <div className={`${item.bg} rounded-[24px] aspect-video flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="font-bold text-xl">{item.title}</p>
                    <p className="text-sm opacity-70">{item.category}</p>
                  </div>
                </div>
              );
            })()}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => {
                  const idx = galleryItems.findIndex((g) => g.id === lightbox);
                  const prev = idx > 0 ? galleryItems[idx - 1].id : galleryItems[galleryItems.length - 1].id;
                  setLightbox(prev);
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const idx = galleryItems.findIndex((g) => g.id === lightbox);
                  const next = idx < galleryItems.length - 1 ? galleryItems[idx + 1].id : galleryItems[0].id;
                  setLightbox(next);
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
