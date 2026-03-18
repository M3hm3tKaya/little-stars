import FloatingShapes from "@/components/FloatingShapes";
import PastelWave from "@/components/PastelWave";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const programs = [
  {
    name: "Mini Yildizlar",
    age: "1-2 Yas",
    bg: "bg-pastel-pink",
    accent: "text-accent-pink",
    borderColor: "border-accent-pink",
    desc: "Bebeklerimiz icin ozel tasarlanmis, duyusal kesfin on planda oldugu guvenli ve sicak bir ortam.",
    features: [
      "Duyusal oyun istasyonlari",
      "Temel motor beceri gelistirme",
      "Guvenli baglanma aktiviteleri",
      "Muzik ve ritim atollyeleri",
      "Uyku ve beslenme takibi",
      "Bireysel ilgi ve bakim",
    ],
    schedule: "08:00 - 17:00 | Maks 8 cocuk / 2 egitmen",
    image: "bg-accent-pink",
  },
  {
    name: "Kesficiler",
    age: "2-3 Yas",
    bg: "bg-pastel-green",
    accent: "text-accent-green",
    borderColor: "border-accent-green",
    desc: "Dil gelisimi ve sosyal becerilerin hizla gelistigi bu donemde, kesfetme tutkusunu destekliyoruz.",
    features: [
      "Dil ve iletisim gelistirme",
      "Yaratici oyun alanlari",
      "Dogayla etkilesim",
      "Hikaye zamani ve kukla oyunlari",
      "Temel renk ve sekil kavramlari",
      "Sosyal beceri oyunlari",
    ],
    schedule: "08:00 - 17:00 | Maks 10 cocuk / 2 egitmen",
    image: "bg-accent-green",
  },
  {
    name: "Yaraticilar",
    age: "3-4 Yas",
    bg: "bg-pastel-purple",
    accent: "text-accent-purple",
    borderColor: "border-accent-purple",
    desc: "Sanat, muzik ve erken akademik kavramlarla yaraticiligin sinirlarini zorluyoruz.",
    features: [
      "Sanat ve el becerileri",
      "Muzik ve drama",
      "Erken matematik kavramlari",
      "Fen ve doga bilimleri",
      "Hikaye yazma ve anlatma",
      "Proje bazli ogrenme",
    ],
    schedule: "08:00 - 17:00 | Maks 12 cocuk / 2 egitmen",
    image: "bg-accent-purple",
  },
  {
    name: "Okul Oncesi",
    age: "4-6 Yas",
    bg: "bg-pastel-blue",
    accent: "text-accent-blue",
    borderColor: "border-accent-blue",
    desc: "Ilkokula hazirlik programimiz ile cocuklariniz ozguvenli ve donanimi bir sekilde okula baslar.",
    features: [
      "Okuma yazmaya hazirlik",
      "Matematik ve mantik oyunlari",
      "Ingilizce tanitim",
      "Bilim deneyleri",
      "Liderlik ve takim calismasi",
      "Portfolyo hazirlama",
    ],
    schedule: "08:00 - 17:00 | Maks 15 cocuk / 2 egitmen",
    image: "bg-accent-blue",
  },
];

export default function ProgramlarPage() {
  return (
    <>
      <FloatingShapes />

      {/* Header */}
      <section className="bg-gradient-to-br from-pastel-yellow via-warm-white to-pastel-pink py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Egitim"
            highlight="Programlarimiz"
            subtitle="Her yas grubuna ozel, gelisim odakli ve oyun temelli egitim programlari ile cocuklarinizin potansiyelini ortaya cikariyoruz."
          />
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, i) => (
        <div key={i}>
          <PastelWave color={i % 2 === 0 ? "#FFFDF5" : program.bg.replace("bg-", "")} />
          <section className={`${i % 2 === 0 ? "bg-warm-white" : program.bg} py-16 md:py-20 relative z-10`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-16`}>
                {/* Image placeholder */}
                <div className="w-full lg:w-1/2">
                  <div className={`${program.image} rounded-[24px] aspect-[4/3] flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <p className="font-bold text-lg">{program.name}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className={`inline-block ${program.bg} border ${program.borderColor} rounded-full px-4 py-1.5 text-sm font-bold ${program.accent} mb-4`}>
                    {program.age}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-dark-navy mb-4">{program.name}</h3>
                  <p className="text-dark-navy/60 mb-6 leading-relaxed">{program.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {program.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2">
                        <svg className={`w-5 h-5 ${program.accent} shrink-0`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        <span className="text-sm text-dark-navy/70">{f}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-dark-navy/50 bg-white/50 inline-block rounded-full px-4 py-2 mb-4">
                    {program.schedule}
                  </p>

                  <div className="block">
                    <Link href="/kayit" className="btn-pill bg-primary-yellow text-dark-navy font-bold shadow-md text-sm">
                      Kayit Icin Basvur
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-yellow to-[#FFD060] py-14 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">
            Hangi Program Cocugunuz Icin Uygun?
          </h2>
          <p className="text-dark-navy/70 mb-8">
            Ucretsiz danismanlik icin bizi arayin veya tur randevusu alin.
          </p>
          <Link href="/kayit" className="btn-pill bg-dark-navy text-white font-bold shadow-lg text-base">
            Tur Randevusu Al
          </Link>
        </div>
      </section>
    </>
  );
}
