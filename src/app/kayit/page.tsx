"use client";

import { useState } from "react";
import FloatingShapes from "@/components/FloatingShapes";
import PastelWave from "@/components/PastelWave";
import SectionTitle from "@/components/SectionTitle";

export default function KayitPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    birthDate: "",
    ageGroup: "",
    startPreference: "",
    message: "",
  });

  const [tourData, setTourData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTourChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTourData({ ...tourData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Kayit formunuz alindi! En kisa surede sizinle iletisime gececegiz.");
  };

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Tur randevunuz alindi! Onay icin sizinle iletisime gececegiz.");
  };

  return (
    <>
      <FloatingShapes />

      {/* Header */}
      <section className="bg-gradient-to-br from-pastel-yellow via-warm-white to-pastel-pink py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Kayit &"
            highlight="Iletisim"
            subtitle="Cocugunuz icin en iyi baslangici yapmak icin hemen basvurun veya bize ulasin."
          />
        </div>
      </section>

      {/* Registration Form + Tour */}
      <section className="py-16 md:py-24 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[20px] p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-dark-navy mb-6">
                  Kayit <span className="text-primary-yellow">Formu</span>
                </h3>
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark-navy mb-1.5">Veli Adi Soyadi *</label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleFormChange}
                        className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-warm-white"
                        placeholder="Adi Soyadi"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-navy mb-1.5">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-warm-white"
                        placeholder="0555 123 45 67"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-navy mb-1.5">E-posta *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-warm-white"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark-navy mb-1.5">Cocuk Adi *</label>
                      <input
                        type="text"
                        name="childName"
                        required
                        value={formData.childName}
                        onChange={handleFormChange}
                        className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-warm-white"
                        placeholder="Cocuk Adi"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-navy mb-1.5">Dogum Tarihi *</label>
                      <input
                        type="date"
                        name="birthDate"
                        required
                        value={formData.birthDate}
                        onChange={handleFormChange}
                        className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-warm-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark-navy mb-1.5">Yas Grubu *</label>
                      <select
                        name="ageGroup"
                        required
                        value={formData.ageGroup}
                        onChange={handleFormChange}
                        className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-warm-white"
                      >
                        <option value="">Seciniz</option>
                        <option value="1-2">Mini Yildizlar (1-2 Yas)</option>
                        <option value="2-3">Kesficiler (2-3 Yas)</option>
                        <option value="3-4">Yaraticilar (3-4 Yas)</option>
                        <option value="4-6">Okul Oncesi (4-6 Yas)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-navy mb-1.5">Baslangic Tercihi</label>
                      <select
                        name="startPreference"
                        value={formData.startPreference}
                        onChange={handleFormChange}
                        className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-warm-white"
                      >
                        <option value="">Seciniz</option>
                        <option value="hemen">Hemen</option>
                        <option value="1ay">1 Ay Icinde</option>
                        <option value="gelecek-donem">Gelecek Donem</option>
                        <option value="eylul">Eylul 2026</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-navy mb-1.5">Mesaj</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-warm-white resize-none"
                      placeholder="Eklemek istediginiz bilgiler..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-pill bg-primary-yellow text-dark-navy font-bold shadow-md w-full sm:w-auto text-base justify-center"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Basvuruyu Gonder
                  </button>
                </form>
              </div>
            </div>

            {/* Tour Form + Contact Info */}
            <div className="space-y-6">
              {/* Tour Appointment */}
              <div className="bg-pastel-blue rounded-[20px] p-6">
                <h3 className="text-lg font-extrabold text-dark-navy mb-4">
                  Tur <span className="text-primary-yellow">Randevusu</span>
                </h3>
                <form onSubmit={handleTourSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={tourData.name}
                      onChange={handleTourChange}
                      className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-white"
                      placeholder="Adiniz Soyadiniz"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={tourData.phone}
                      onChange={handleTourChange}
                      className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-white"
                      placeholder="Telefon"
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      value={tourData.preferredDate}
                      onChange={handleTourChange}
                      className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <select
                      name="preferredTime"
                      required
                      value={tourData.preferredTime}
                      onChange={handleTourChange}
                      className="w-full rounded-2xl border border-dark-navy/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-colors bg-white"
                    >
                      <option value="">Saat Seciniz</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn-pill bg-primary-yellow text-dark-navy font-bold shadow-md w-full text-sm justify-center"
                  >
                    Randevu Al
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-dark-navy mb-4">
                  Iletisim <span className="text-primary-yellow">Bilgileri</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-pastel-blue flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-navy">Adres</p>
                      <p className="text-xs text-dark-navy/60">Atakoy Mah. Yildiz Cad. No:12 Bakirkoy / Istanbul</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-pastel-green flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-navy">Telefon</p>
                      <p className="text-xs text-dark-navy/60">0212 555 12 34</p>
                      <p className="text-xs text-dark-navy/60">0532 555 12 34 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-pastel-pink flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-navy">E-posta</p>
                      <p className="text-xs text-dark-navy/60">info@littlestars.com.tr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-pastel-yellow flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-navy">Calisma Saatleri</p>
                      <p className="text-xs text-dark-navy/60">Pzt - Cum: 07:30 - 18:00</p>
                      <p className="text-xs text-dark-navy/60">Cmt: 09:00 - 13:00 (Etkinlik)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-pastel-green rounded-[20px] aspect-video flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-10 h-10 mx-auto mb-2 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
                  </svg>
                  <p className="text-sm font-bold text-accent-green">Harita</p>
                  <p className="text-xs text-dark-navy/40">Bakirkoy, Istanbul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PastelWave color="#FFB800" />
      <section className="bg-gradient-to-r from-primary-yellow to-[#FFD060] py-14 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">
            Hala Sorulariniz mi Var?
          </h2>
          <p className="text-dark-navy/70 mb-8">
            Bizi arayin, size yardimci olalim!
          </p>
          <a href="tel:02125551234" className="btn-pill bg-dark-navy text-white font-bold shadow-lg text-base">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            0212 555 12 34
          </a>
        </div>
      </section>
    </>
  );
}
