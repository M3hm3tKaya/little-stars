import FloatingShapes from "@/components/FloatingShapes";
import SectionTitle from "@/components/SectionTitle";

const teachers = [
  {
    name: "Elif Yilmaz",
    title: "Kurucu & Mudur",
    specialty: "Okul Oncesi Egitim Uzmani",
    experience: "12 Yil Deneyim",
    bg: "bg-accent-pink",
  },
  {
    name: "Selin Kaya",
    title: "Bas Egitmen",
    specialty: "Cocuk Gelisimi Uzmani",
    experience: "8 Yil Deneyim",
    bg: "bg-accent-blue",
  },
  {
    name: "Aylin Demir",
    title: "Mini Yildizlar Egitmeni",
    specialty: "Bebek Gelisim Uzmani",
    experience: "6 Yil Deneyim",
    bg: "bg-accent-purple",
  },
  {
    name: "Burak Ozturk",
    title: "Muzik Egitmeni",
    specialty: "Orff ve Suzuki Metodu",
    experience: "10 Yil Deneyim",
    bg: "bg-accent-green",
  },
  {
    name: "Merve Arslan",
    title: "Sanat Egitmeni",
    specialty: "Gorsel Sanatlar Uzmani",
    experience: "7 Yil Deneyim",
    bg: "bg-primary-yellow",
  },
  {
    name: "Cansu Sahin",
    title: "Ingilizce Egitmeni",
    specialty: "Erken Cocukluk Ingilizce",
    experience: "5 Yil Deneyim",
    bg: "bg-accent-pink",
  },
];

export default function EgitmenlerPage() {
  return (
    <>
      <FloatingShapes />

      {/* Header */}
      <section className="bg-gradient-to-br from-pastel-purple via-warm-white to-pastel-blue py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Uzman"
            highlight="Egitmenlerimiz"
            subtitle="Alaninda deneyimli, sertifikali ve sevecen egitmen kadromuz ile tanisin."
          />
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 md:py-24 bg-warm-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, i) => (
              <div key={i} className="bg-white rounded-[20px] p-8 card-hover text-center shadow-sm">
                {/* Avatar placeholder */}
                <div className={`w-[200px] h-[200px] mx-auto rounded-full ${teacher.bg} flex items-center justify-center mb-6`}>
                  <svg className="w-20 h-20 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-dark-navy mb-1">{teacher.name}</h3>
                <p className="text-sm font-semibold text-primary-yellow mb-2">{teacher.title}</p>
                <p className="text-sm text-dark-navy/60 mb-1">{teacher.specialty}</p>
                <p className="text-xs text-dark-navy/40">{teacher.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="bg-pastel-purple py-14 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">
            Ekibimize Katilmak Ister Misiniz?
          </h2>
          <p className="text-dark-navy/60 mb-8">
            Cocuklara olan sevginizi mesleginize yansitmak icin bize basvurun.
          </p>
          <a href="mailto:kariyer@littlestars.com.tr" className="btn-pill bg-primary-yellow text-dark-navy font-bold shadow-md">
            Basvuru Gonder
          </a>
        </div>
      </section>
    </>
  );
}
