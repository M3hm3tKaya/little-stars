interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ title, highlight, subtitle, center = true }: SectionTitleProps) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-navy leading-tight">
        {title}{" "}
        {highlight && <span className="text-primary-yellow">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-dark-navy/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
