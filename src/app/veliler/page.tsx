"use client";

import { useState } from "react";
import FloatingShapes from "@/components/FloatingShapes";
import PastelWave from "@/components/PastelWave";
import SectionTitle from "@/components/SectionTitle";

const registrationSteps = [
  { step: 1, title: "Ön Başvuru", desc: "Online formu doldurun veya bizi arayın.", icon: "form" },
  { step: 2, title: "Okul Turu", desc: "Tesislerimizi ziyaret edin, eğitmenlerle tanışın.", icon: "tour" },
  { step: 3, title: "Evrak Teslimi", desc: "Gerekli belgeleri tamamlayın.", icon: "docs" },
  { step: 4, title: "Kayıt Onay", desc: "Kaydınız onaylanır, uyum süreci başlar.", icon: "check" },
];

const documents = [
  "Nüfus cüzdanı fotokopisi (veli + çocuk)",
  "4 adet vesikalık fotoğraf",
  "Aşı kartı fotokopisi",
  "Sağlık raporu (son 1 ay)",
  "İkametgah belgesi",
  "Kan grubu belgesi",
  "Alerji / özel durum bilgi formu",
];

const weeklyMenu = [
  {
    day: "Pazartesi",
    breakfast: "Peynir, zeytin, domates, ekmek, sut",
    lunch: "Mercimek corbasi, pilav, tavuk sote, salata",
    snack: "Meyve tabagi, kraker",
  },
  {
    day: "Salı",
    breakfast: "Yumurta, bal, tereyagi, ekmek, sut",
    lunch: "Sehriye corbasi, makarna, koftee, cacik",
    snack: "Kurabiye, ayran",
  },
  {
    day: "Çarşamba",
    breakfast: "Kasar peyniri, recel, ekmek, sut",
    lunch: "Domates corbasi, bulgur pilavi, et sote, salata",
    snack: "Muzlu puding",
  },
  {
    day: "Perşembe",
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
  { q: "Kayıt için yaş sınırı nedir?", a: "1 yaş ile 6 yaş arası çocukları kabul ediyoruz. Her yaş grubuna özel programlarımız vardır." },
  { q: "Çalışma saatleriniz nedir?", a: "Hafta içi 07:30 - 18:00 arası hizmet veriyoruz. Cumartesi günleri 09:00 - 13:00 arası özel etkinlikler düzenliyoruz." },
  { q: "Beslenme nasıl sağlanıyor?", a: "Diyetisyen tarafından hazırlanan haftalık menü uygulanır. Organik ve mevsimsel ürünler tercih edilir. Alerji durumunda özel menü hazırlanır." },
  { q: "Güvenlik önlemleri nelerdir?", a: "7/24 kamera sistemi, kimlik kontrollü giriş sistemi, ilk yardım sertifikalı personel ve düzenli tatbikatlar yapılmaktadır." },
  { q: "Uyum süreci nasıl işliyor?", a: "İlk hafta veli eşliğinde kademeli geçiş programı uygulanır. Çocuğunuzun uyumuna göre süre ayarlanır." },
  { q: "Servis hizmetiniz var mı?", a: "Bakırköy ve çevre ilçelere servis hizmetimiz mevcuttur. Detaylı bilgi için bizi arayabilirsiniz." },
  { q: "Veli-okul iletişimi nasıl sağlanıyor?", a: "Günlük dijital rapor, aylık veli toplantıları, yıllık gelişim raporları ve WhatsApp grubu ile sürekli iletişim halindeyiz." },
  { q: "Özel gereksinimli çocuklar için programınız var mı?", a: "Evet, uzman eğitmenlerimiz eşliğinde bireysel eğitim planları hazırlanır. Gerektiğinde dış uzmanlarla iş birliği yapılır." },
  { q: "Tatil günleri kapalı mısınız?", a: "Resmi tatillerde kapalıyız. Yaz döneminde özel yaz okulu programımız devam eder." },
  { q: "Ücretlendirme nasıl yapılıyor?", a: "Aylık ücretlendirme uygulanır. Kardeş indirimi ve erken kayıt indirimleri mevcuttur. Detaylı bilgi için görüşme talep edebilirsiniz." },
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
            subtitle="Kayıt süreci, gerekli evraklar, haftalık menü ve sık sorulan sorular hakkında bilgi alın."
          />
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 md:py-24 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-dark-navy mb-10 text-center">
            Kayıt Süreci
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
            Haftalık <span className="text-primary-yellow">Menu</span>
          </h3>
          <div className="overflow-x-auto rounded-[20px] shadow-sm">
            <table className="w-full bg-white rounded-[20px] overflow-hidden">
              <thead>
                <tr className="bg-primary-yellow/10">
                  <th className="px-6 py-4 text-left text-sm font-bold text-dark-navy">Gun</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-dark-navy">Kahvalti</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-dark-navy">Öğle Yemeği</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-dark-navy">Ara Öğün</th>
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
            * Menü diyetisyen onaylı olup mevsime göre değişiklik gösterebilir. Alerjik durumlar için özel menü hazırlanır.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <PastelWave color="#F5F0FF" />
      <section className="py-16 md:py-24 bg-pastel-purple relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-dark-navy mb-10 text-center">
            Sıkça Sorulan <span className="text-primary-yellow">Sorular</span>
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
