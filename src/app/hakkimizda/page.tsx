"use client";

import FloatingShapes from "@/components/FloatingShapes";
import PastelWave from "@/components/PastelWave";
import SectionTitle from "@/components/SectionTitle";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Mezun", color: "text-primary-yellow" },
  { value: 8, suffix: "", label: "Yıl Deneyim", color: "text-accent-blue" },
  { value: 12, suffix: "", label: "Uzman Eğitmen", color: "text-accent-purple" },
  { value: 100, suffix: "%", label: "Memnuniyet", color: "text-accent-green" },
];

function CounterCard({ value, suffix, label, color }: { value: number; suffix: string; label: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const stepTime = 16;
          const steps = duration / stepTime;
          const increment = value / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, [value]);

  return (
    <div ref={ref} className="bg-white rounded-[20px] p-8 card-hover text-center">
      <p className={`text-4xl md:text-5xl font-extrabold ${color} mb-2`}>
        {count}{suffix}
      </p>
      <p className="text-sm font-semibold text-dark-navy/60">{label}</p>
    </div>
  );
}

const certificates = [
  { name: "MEB Onaylı Kurum", desc: "Milli Eğitim Bakanlığı tarafından onaylı eğitim kurumu.", icon: "gov" },
  { name: "ISO 9001:2015", desc: "Kalite Yönetim Sistemi sertifikası.", icon: "iso" },
  { name: "Hijyen Sertifikasi", desc: "Gıda ve çevre hijyeni standartlarına uygunluk belgesi.", icon: "clean" },
  { name: "İlk Yardım Sertifikalı", desc: "Tüm personel ilk yardım sertifikasına sahiptir.", icon: "first-aid" },
];

export default function HakkımızdaPage() {
  return (
    <>
      <FloatingShapes />

      {/* Header */}
      <section className="bg-gradient-to-br from-pastel-pink via-warm-white to-pastel-yellow py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Hakkımızda"
            highlight=""
            subtitle="8 yıllık tecrübemiz, sevgi dolu yaklaşımımız ve uzman kadromuz ile çocuklarınızın yanındayız."
          />
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 md:py-24 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Image placeholder */}
            <div className="w-full lg:w-1/2">
              <div className="bg-accent-pink rounded-[24px] aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="font-bold text-lg">Elif Yilmaz</p>
                  <p className="text-sm opacity-70">Kurucu</p>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-extrabold text-dark-navy mb-6">
                Kuruluş <span className="text-primary-yellow">Hikayemiz</span>
              </h3>
              <div className="space-y-4 text-dark-navy/60 leading-relaxed">
                <p>
                  2018 yilinda, kendi çocuklarım için aradığım ama bulamadığım
                  bir eğitim ortamı hayalini gerçeğe dönüştürmek için yola çıktım.
                  Little Stars, her çocuğun bir yıldız olduğuna inanan bir vizyonla kuruldu.
                </p>
                <p>
                  Bakirkoy&apos;de küçük bir sınıfla başlayan yolculuğumuz, bugün 12 uzman
                  eğitmen, modern tesisler ve yüzlerce mutlu aile ile devam ediyor.
                  Her çocuğun kendine özgü parlaklığını ortaya çıkarmayı hedefliyoruz.
                </p>
                <p>
                  Montessori, Reggio Emilia ve Türkiye Milli Eğitim müfredat yaklaşımlarını
                  harmanlayarak, çocuklarımıza en iyi başlangıcı vermeye çalışıyoruz.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-yellow/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-yellow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-dark-navy">Elif Yilmaz</p>
                  <p className="text-xs text-dark-navy/50">Kurucu & Müdür, Okul Öncesi Eğitim Uzmanı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <PastelWave color="#FFF8E6" />
      <section className="py-16 md:py-24 bg-pastel-yellow relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Rakamlarla" highlight="Little Stars" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <CounterCard key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <PastelWave color="#FFFDF5" />
      <section className="py-16 md:py-24 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Sertifika ve" highlight="Onaylar" subtitle="Kalite ve güvenlik standartlarımız." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, i) => (
              <div key={i} className="bg-white rounded-[20px] p-6 card-hover text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-primary-yellow/15 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-bold text-dark-navy mb-2 text-sm">{cert.name}</h4>
                <p className="text-xs text-dark-navy/50">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Mission */}
      <PastelWave color="#F5F0FF" />
      <section className="py-16 md:py-24 bg-pastel-purple relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle title="Misyonumuz" />
          <p className="text-dark-navy/70 leading-relaxed text-lg">
            Her çocuğun benzersiz bir yıldız olduğuna inanıyoruz. Amacimiz,
            güvende, sevgi dolu ve stimüle edici bir ortamda çocukların
            fiziksel, duygusal, sosyal ve bilişsel gelişimlerini desteklemek,
            onları hayata en iyi şekilde hazırlamaktır.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Sevgi", desc: "Her çocuğa şartsız sevgi ve saygı.", bg: "bg-pastel-pink" },
              { title: "Guven", desc: "Aileler için %100 güvenilir ortam.", bg: "bg-pastel-blue" },
              { title: "Gelisim", desc: "Bütünsel gelişim odaklı eğitim.", bg: "bg-pastel-green" },
            ].map((v, i) => (
              <div key={i} className={`${v.bg} rounded-[20px] p-6`}>
                <h4 className="font-bold text-dark-navy mb-2">{v.title}</h4>
                <p className="text-sm text-dark-navy/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
