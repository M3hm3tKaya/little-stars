import Link from "next/link";
import FloatingShapes from "@/components/FloatingShapes";
import PastelWave from "@/components/PastelWave";
import SectionTitle from "@/components/SectionTitle";

const values = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Guvenli Ortam",
    desc: "7/24 kamerali, MEB onayli, hijyenik ve cocuk dostu mekanlarimiz ile yavrulariniz guvende.",
    color: "bg-pastel-blue",
    accent: "text-accent-blue",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Eglenceli Egitim",
    desc: "Oyun temelli egitim programlarimiz ile cocuklariniz eglenerek ogrenir.",
    color: "bg-pastel-yellow",
    accent: "text-primary-yellow",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Uzman Kadro",
    desc: "Alaninda deneyimli, sertifikali egitmenlerimiz cocuklarinizin gelisimini yakindan takip eder.",
    color: "bg-pastel-purple",
    accent: "text-accent-purple",
  },
];

const programs = [
  { name: "Mini Yildizlar", age: "1-2 Yas", desc: "Duyusal kesif, motor gelisim, guvenli baglanma.", border: "border-l-accent-pink", bg: "bg-pastel-pink" },
  { name: "Kesficiler", age: "2-3 Yas", desc: "Dil gelisimi, sosyal beceriler, yaratici oyun.", border: "border-l-accent-green", bg: "bg-pastel-green" },
  { name: "Yaraticilar", age: "3-4 Yas", desc: "Sanat, muzik, erken matematik ve fen kavramlari.", border: "border-l-accent-purple", bg: "bg-pastel-purple" },
  { name: "Okul Oncesi", age: "4-6 Yas", desc: "Okula hazirlik, okuma yazmaya giris, proje bazli ogrenme.", border: "border-l-accent-blue", bg: "bg-pastel-blue" },
];

const dailyFlow = [
  { time: "08:00", activity: "Karsilama ve Serbest Oyun" },
  { time: "09:00", activity: "Kahvalti" },
  { time: "09:30", activity: "Cember Zamani" },
  { time: "10:00", activity: "Egitim Aktiviteleri" },
  { time: "11:00", activity: "Bahce / Fiziksel Aktivite" },
  { time: "12:00", activity: "Ogle Yemegi" },
  { time: "13:00", activity: "Uyku / Dinlenme" },
  { time: "14:30", activity: "Sanat ve Muzik" },
  { time: "15:30", activity: "Ikindi Kahvaltisi" },
  { time: "16:00-17:00", activity: "Serbest Oyun ve Ugurlama" },
];

const testimonials = [
  { name: "Ayse K.", child: "Elif, 4 yas", text: "Kizim her sabah heyecanla gelmeyi bekliyor. Egitmenler cok ilgili ve sevecen.", bg: "bg-pastel-pink" },
  { name: "Mehmet D.", child: "Can, 3 yas", text: "Oglumun gelisimindeki ilerlemeyi gormek bizi cok mutlu ediyor. Harika bir ekip.", bg: "bg-pastel-blue" },
  { name: "Zeynep A.", child: "Mira, 5 yas", text: "Temizlik ve guvenlik konusunda cok titizler. Gonul rahatligi ile birakiyorum.", bg: "bg-pastel-green" },
];

const galleryImages = [
  { title: "Siniflarimiz", bg: "bg-accent-blue" },
  { title: "Bahce Alanimiz", bg: "bg-accent-green" },
  { title: "Etkinlikler", bg: "bg-accent-pink" },
  { title: "Yemekhane", bg: "bg-primary-yellow" },
];

export default function HomePage() {
  return (
    <>
      <FloatingShapes />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pastel-yellow via-warm-white to-pastel-blue py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
            <svg className="w-4 h-4 text-primary-yellow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-sm font-semibold text-dark-navy/70">Bakirkoy, Istanbul | 1-6 Yas</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark-navy leading-tight mb-6">
            Kucuk{" "}
            <span className="text-primary-yellow relative inline-block">
              Yildizlar
              <svg className="absolute -top-4 -right-6 w-8 h-8 text-primary-yellow opacity-60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-navy/60">Kres ve Anaokulu</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-dark-navy/60 mb-8 leading-relaxed">
            Cocugunuzun mutlu, guvenli ve yaratici bir ortamda buyumesi icin
            uzman kadromuz ve modern egitim anlayisimizla yaninizdayiz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kayit" className="btn-pill bg-primary-yellow text-dark-navy font-bold shadow-lg hover:shadow-xl text-base">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Hemen Kayit Ol
            </Link>
            <Link href="/programlar" className="btn-pill bg-white text-dark-navy font-bold shadow-md border border-dark-navy/10 text-base">
              Programlari Incele
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <PastelWave color="#FFFDF5" />
      <section className="py-16 md:py-24 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Neden" highlight="Little Stars?" subtitle="Cocuklarinizin en degerli yillarini bize emanet etmeniz icin 3 onemli neden." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <div key={i} className={`${v.color} rounded-[20px] p-8 card-hover text-center`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/60 ${v.accent} mb-5`}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-navy mb-3">{v.title}</h3>
                <p className="text-dark-navy/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <PastelWave color="#EEF3FF" />
      <section className="py-16 md:py-24 bg-pastel-blue relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Yas Gruplarina Gore" highlight="Programlar" subtitle="Her yas grubuna ozel, gelisim odakli egitim programlari." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <div key={i} className={`bg-white rounded-[20px] p-6 border-l-4 ${p.border} card-hover`}>
                <span className={`inline-block ${p.bg} rounded-full px-3 py-1 text-xs font-bold text-dark-navy/70 mb-3`}>
                  {p.age}
                </span>
                <h3 className="text-lg font-bold text-dark-navy mb-2">{p.name}</h3>
                <p className="text-sm text-dark-navy/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/programlar" className="btn-pill bg-primary-yellow text-dark-navy font-bold shadow-md">
              Tum Programlari Gor
            </Link>
          </div>
        </div>
      </section>

      {/* DAILY FLOW */}
      <PastelWave color="#FFFDF5" />
      <section className="py-16 md:py-24 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Gunluk" highlight="Akis" subtitle="Cocuklarimizin bir gunu nasil geciyor?" />

          {/* Desktop horizontal */}
          <div className="hidden md:flex items-start justify-between gap-2 overflow-x-auto pb-4">
            {dailyFlow.map((item, i) => (
              <div key={i} className="flex flex-col items-center min-w-[100px] text-center group">
                <div className="w-12 h-12 rounded-full bg-primary-yellow/20 flex items-center justify-center mb-2 group-hover:bg-primary-yellow/40 transition-colors">
                  <span className="text-sm font-bold text-primary-yellow">{i + 1}</span>
                </div>
                <p className="text-xs font-bold text-dark-navy mb-1">{item.time}</p>
                <p className="text-xs text-dark-navy/60 leading-tight">{item.activity}</p>
              </div>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-4">
            {dailyFlow.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-yellow/20 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-primary-yellow">{i + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-dark-navy">{item.time}</p>
                  <p className="text-xs text-dark-navy/60">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <PastelWave color="#F5F0FF" />
      <section className="py-16 md:py-24 bg-pastel-purple relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Velilerimiz" highlight="Ne Diyor?" subtitle="Mutlu ailelerimizden geri bildirimler." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className={`${t.bg} rounded-[20px] p-8 card-hover relative`}>
                <svg className="absolute top-4 right-4 w-8 h-8 text-dark-navy/10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z"/>
                </svg>
                <p className="text-sm text-dark-navy/70 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-dark-navy text-sm">{t.name}</p>
                  <p className="text-xs text-dark-navy/50">{t.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <PastelWave color="#FFFDF5" />
      <section className="py-16 md:py-24 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Tesislerimiz" subtitle="Modern ve cocuk dostu alanlarimiz." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className={`${img.bg} rounded-[20px] aspect-[4/3] flex items-center justify-center card-hover cursor-pointer`}>
                <div className="text-center text-white">
                  <svg className="w-10 h-10 mx-auto mb-2 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <p className="font-bold text-sm">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/galeri" className="btn-pill bg-white text-dark-navy font-bold shadow-md border border-dark-navy/10">
              Tum Galeri
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-gradient-to-r from-primary-yellow to-[#FFD060] py-14 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">
            Cocugunuz Icin En Iyi Baslangic
          </h2>
          <p className="text-dark-navy/70 mb-8 text-base md:text-lg">
            Hemen kayit olun, okulumuzu ziyaret edin ve farki yerinde gorun!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kayit" className="btn-pill bg-dark-navy text-white font-bold shadow-lg text-base">
              Kayit Formu
            </Link>
            <Link href="/kayit" className="btn-pill bg-white text-dark-navy font-bold shadow-md text-base">
              Tur Randevusu Al
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
