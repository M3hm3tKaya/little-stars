"use client";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Star - top left */}
      <svg className="absolute top-[10%] left-[5%] w-12 h-12 opacity-20 float-anim" viewBox="0 0 24 24" fill="#FFB800">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>

      {/* Cloud - top right */}
      <svg className="absolute top-[8%] right-[8%] w-20 h-14 opacity-25 float-anim-reverse" viewBox="0 0 64 40" fill="#6BAFFF">
        <path d="M52 28c6.6 0 12-5.4 12-12S58.6 4 52 4c-1.2 0-2.3.2-3.4.5C46.4 1.8 42.5 0 38 0c-7.2 0-13.1 5.3-14.2 12.2C22.4 12.1 21 12 19.6 12 12.8 12 7.2 16.8 6.2 23.2 2.7 24.2 0 27.3 0 31c0 4.4 3.6 8 8 8h44z"/>
      </svg>

      {/* Rainbow - left middle */}
      <svg className="absolute top-[35%] left-[3%] w-16 h-10 opacity-20 float-anim-slow" viewBox="0 0 48 24" fill="none">
        <path d="M4 24C4 12.95 12.95 4 24 4s20 8.95 20 20" stroke="#FF8FAB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M8 24C8 15.16 15.16 8 24 8s16 7.16 16 16" stroke="#FFB800" strokeWidth="3" strokeLinecap="round"/>
        <path d="M12 24c0-6.63 5.37-12 12-12s12 5.37 12 12" stroke="#6BAFFF" strokeWidth="3" strokeLinecap="round"/>
      </svg>

      {/* Flower - right middle */}
      <svg className="absolute top-[40%] right-[4%] w-10 h-10 opacity-20 float-anim" viewBox="0 0 24 24" fill="#FF8FAB">
        <circle cx="12" cy="8" r="3"/>
        <circle cx="8" cy="12" r="3"/>
        <circle cx="16" cy="12" r="3"/>
        <circle cx="12" cy="16" r="3"/>
        <circle cx="12" cy="12" r="2.5" fill="#FFB800"/>
      </svg>

      {/* Star - bottom left */}
      <svg className="absolute bottom-[20%] left-[8%] w-8 h-8 opacity-15 float-anim-reverse" viewBox="0 0 24 24" fill="#9B8DB5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>

      {/* Cloud - bottom right */}
      <svg className="absolute bottom-[15%] right-[6%] w-16 h-10 opacity-20 float-anim-slow" viewBox="0 0 64 40" fill="#6BCB77">
        <path d="M52 28c6.6 0 12-5.4 12-12S58.6 4 52 4c-1.2 0-2.3.2-3.4.5C46.4 1.8 42.5 0 38 0c-7.2 0-13.1 5.3-14.2 12.2C22.4 12.1 21 12 19.6 12 12.8 12 7.2 16.8 6.2 23.2 2.7 24.2 0 27.3 0 31c0 4.4 3.6 8 8 8h44z"/>
      </svg>

      {/* Small star - center top */}
      <svg className="absolute top-[60%] left-[50%] w-6 h-6 opacity-15 float-anim" viewBox="0 0 24 24" fill="#FFB800">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>

      {/* Heart - bottom center */}
      <svg className="absolute bottom-[30%] left-[30%] w-8 h-8 opacity-15 float-anim-reverse" viewBox="0 0 24 24" fill="#FF8FAB">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
  );
}
