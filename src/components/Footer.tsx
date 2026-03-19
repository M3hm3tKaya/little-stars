import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-primary-yellow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-xl font-extrabold text-white">
                Little <span className="text-primary-yellow">Stars</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Bakırköy'de 8 yıldır çocuklarımızı sevgiyle büyütüyoruz.
              Güvende, mutlu ve yaratıcı bireyler yetiştirmek için buradayız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2">
              {[
                { href: "/programlar", label: "Programlar" },
                { href: "/egitmenler", label: "Eğitmenler" },
                { href: "/galeri", label: "Galeri" },
                { href: "/veliler", label: "Veli Bilgilendirme" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/kayit", label: "Kayıt ve İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-primary-yellow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">İletişim</h4>
            <div className="space-y-3 text-sm text-white/60">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary-yellow shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Atakoy Mah. Yıldız Cad. No:12 Bakırköy / İstanbul
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-yellow shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                0212 555 12 34
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-yellow shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@littlestars.com.tr
              </p>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Çalışma Saatleri</h4>
            <div className="text-sm text-white/60 space-y-2 mb-6">
              <p>Pazartesi - Cuma: 07:30 - 18:00</p>
              <p>Cumartesi: 09:00 - 13:00 (Etkinlik)</p>
              <p>Pazar: Kapalı</p>
            </div>
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a key={social} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow/20 transition-colors" aria-label={social}>
                  <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                    {social === "facebook" && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>}
                    {social === "instagram" && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5"/></>}
                    {social === "twitter" && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Little Stars Kreş ve Anaokulu. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-primary-yellow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              MEB Onaylı
            </span>
            <span>|</span>
            <span>ISO 9001 Sertifikalı</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
