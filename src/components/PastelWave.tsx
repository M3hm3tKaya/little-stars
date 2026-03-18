interface PastelWaveProps {
  color?: string;
  flip?: boolean;
}

export default function PastelWave({ color = "#EEF3FF", flip = false }: PastelWaveProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
