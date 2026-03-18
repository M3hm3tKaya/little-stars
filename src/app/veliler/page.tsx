"use client";

import { useState } from "react";
import FloatingShapes from "@/components/FloatingShapes";
import PastelWave from "@/components/PastelWave";
import SectionTitle from "@/components/SectionTitle";

const registrationSteps = [
  { step: 1, title: "On Basvuru", desc: "Online formu doldurun veya bizi arayin.", icon: "form" },
  { step: 2, title: "Okul Turu", desc: "Tesislerimizi ziyaret edin, egitmenlerle tanisin.", icon: "tour" },
  { step: 3, title: "Evrak Teslimi", desc: "Gerekli belgeleri tamamlayin.", icon: "docs" },
  { step: 4, title: "Kayit Onay", desc: "Kaydiniz onaylanir, uyum sureci baslar.", icon: "check" },
];

const documents = [
  "Nufus cuzdani fotokopisi (veli + cocuk)",
  "4 adet vesikalik fotograf",
  "Asi karti fotokopisi",
  "Saglik raporu (son 1 ay)",
  "Ikametgah belgesi",
  "Kan grubu belgesi",
  "Alerji / ozel durum bilgi formu",
];

const weeklyMenu = [
  {
    day: "Pazartesi",
    breakfast: "Peynir, zeytin, domates, ekmek, sut",
    lunch: "Mercimek corbasi, pilav, tavuk sote, salata",
    snack: "Meyve tabagi, kraker",
  },
  {
    day: "Sali",
    breakfast: "Yumurta, bal, tereyagi, ekmek, sut",
    lunch: "Sehriye corbasi, makarna, koftee, cacik",
    snack: "Kurabiye, ayran",
  },
  {
    day: "Carsamba",
    breakfast: "Kasar peyniri, recel, ekmek, sut",
    lunch: "Domates corbasi, bulgur pilavi, et sote, salata",
    snack: "Muzlu puding",
  },
  {
    day: "Persembe",
    breakfast: "Peynir, zeytin, salatalik, ekmek, sut",
    lunch: "Tarhana corbasi, pilav, balık, havuc salata",
    snack: "Meyve suyu, pogaca",
  },
  {
    day: "Cuma",
    breakfast: "Omlet, peynir, domates, ekmek, sut",
    lunch: "Ezogelin corbasi, eriste, tavuk, yoğurt",
    snack: "Kek, sut",
  },
];

const faqItems = [
  { q: "Kayit icin yas siniri nedir?", a: "1 yas ile 6 yas arasi cocuklari kabul ediyoruz. Her yas grubuna ozel programlarimiz vardir." },
  { q: "Calisma saatleriniz nedir?", a: "Hafta ici 07:30 - 18:00 arasi hizmet veriyoruz. Cumartesi gunleri 09:00 - 13:00 arasi ozel etkinlikler duzenliyoruz." },
  { q: "Beslenme nasil saglaniyor?", a: "Diyetisyen tarafindan hazirlanan haftalik menu uygulanir. Organik ve mevsimsel urunler tercih edilir. Alerji durumunda ozel menu hazirlanir." },
  { q: "Guvenlik onlemleri nelerdir?", a: "7/24 kamera sistemi, kimlik kontroller giris sistemi, ilk yardim sertifikali personel ve duzenli tatbikatlar yapilmaktadir." },
  { q: "Uyum sureci nasil isliyor?", a: "Ilk hafta veli esliginde kademeli gecis programi uygulanir. Cocugunuzun uyumuna gore sure ayarlanir." },
  { q: "Servis hizmetiniz var mi?", a: "Bakirkoy ve cevre ilcelere servis hizmetimiz mevcuttur. Detayli bilgi icin bizi arayabilirsiniz." },
  { q: "Veli-okul iletisimi nasil saglaniyor?", a: "Gunluk dijital rapor, aylik veli toplantilari, yillik gelisim raporlari ve WhatsApp grubu ile surekli iletisim halindeyiz." },
  { q: "Ozel gereksinimli cocuklar icin programiniz var mi?", a: "Evet, uzman egitmenlerimiz esliginde bireysel egitim planlari hazirlanir. Gerektiginde dis uzmanlarla is birligi yapilir." },
  { q: "Tatil gunleri kapali misiniz?", a: "Resmi tatillerde kapaliyiz. Yaz doneminde ozel yaz okulu programimiz devam eder." },
  { q: "Ucretlendirme nasil yapiliyor?", a: "Aylik ucretlendirme uygulanir. Kardes indirimi ve erken kayit indirimleri mevcuttur. Detayli bilgi icin gorusme talep edebilirsiniz." },
];

export default function VelilerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <FloatingShapes />

      {/* Header */}
      <section className="bg-gradient-to-br from-pastel-blue via-warm-white to-pastel-green py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Veli"
            highlight="Bilgilendirme"
            subtitle="Kayit sureci, gerekli evraklar, haftalik menu ve sik sorulan sorular hakkinda bilgi alin."
          />
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 md:py-24 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-dark-navy mb-10 text-center">
            Kayit <span className="text-primary-yellow">Sureci</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {registrationSteps.map((s, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-[20px] p-6 card-hover text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-primary-yellow/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-extrabold text-primary-yellow">{s.step}</span>
                  </div>
                  <h4 className="font-bold text-dark-navy mb-2">{s.title}</h4>
                  <p className="text-sm text-dark-navy/60">{s.desc}</p>
                </div>
                {i < registrationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-primary-yellow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <PastelWave color="#EEF3FF" />
      <section className="py-16 md:py-24 bg-pastel-blue relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-dark-navy mb-10 text-center">
            Gerekli <span className="text-primary-yellow">Evraklar</span>
          </h3>
          <div className="bg-white rounded-[20px] p-8 shadow-sm">
            <div className="space-y-4">
              {documents.map((doc, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-6 h-6 rounded-lg border-2 border-primary-yellow/40 flex items-center justify-center group-hover:border-primary-yellow transition-colors shrink-0">
                    <svg className="w-4 h-4 text-primary-yellow opacity-0 group-hover:opacity-50 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-dark-navy/70">{doc}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Menu */}
      <PastelWave color="#FFFDF5" />
      <section className="py-16 md:py-24 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-dark-navy mb-10 text-center">
            Haftalik <span className="text-primary-yellow">Menu</span>
          </h3>
          <div className="overflow-x-auto rounded-[20px] shadow-sm">
            <table className="w-full bg-white rounded-[20px] overflow-hidden">
              <thead>
                <tr className="bg-primary-yellow/10">
                  <th className="px-6 py-4 text-left text-sm font-bold text-dark-navy">Gun</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-dark-navy">Kahvalti</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-dark-navy">Ogle Yemegi</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-dark-navy">Ara Ogun</th>
                </tr>
              </thead>
              <tbody>
                {weeklyMenu.map((menu, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-pastel-yellow/30"} border-t border-dark-navy/5`}>
                    <td className="px-6 py-4 text-sm font-bold text-dark-navy">{menu.day}</td>
                    <td className="px-6 py-4 text-sm text-dark-navy/60">{menu.breakfast}</td>
                    <td className="px-6 py-4 text-sm text-dark-navy/60">{menu.lunch}</td>
                    <td className="px-6 py-4 text-sm text-dark-navy/60">{menu.snack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-dark-navy/40 text-center">
            * Menu diyetisyen onayli olup mevsime gore degisiklik gosterebilir. Alerjik durumlar icin ozel menu hazirlanir.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <PastelWave color="#F5F0FF" />
      <section className="py-16 md:py-24 bg-pastel-purple relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-dark-navy mb-10 text-center">
            Sik Sorulan <span className="text-primary-yellow">Sorular</span>
          </h3>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <div key={i} className="bg-white rounded-[16px] overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-bold text-dark-navy text-sm pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-primary-yellow shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="accordion-content"
                  style={{ maxHeight: openFaq === i ? "200px" : "0px" }}
                >
                  <div className="px-6 pb-4">
                    <p className="text-sm text-dark-navy/60 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
