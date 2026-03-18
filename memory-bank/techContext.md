# Tech Context

## Stack
- Next.js 16 (App Router, src directory)
- TypeScript strict mode
- Tailwind CSS v4 (with @theme inline for custom colors)
- GSAP + @gsap/react (available, not heavily used)
- Framer Motion (available for page transitions)
- Lenis (available for smooth scrolling)
- clsx (utility for conditional classes)

## Architecture
- /src/app/ — pages using App Router
- /src/components/ — shared components (Navbar, Footer, FloatingShapes, PastelWave, SectionTitle)
- Custom colors defined via CSS variables and Tailwind @theme
- Pure CSS animations for floating decorations (will-change: transform)
- Nunito font loaded via next/font/google

## Build
- `npm run build` for production
- `npm run dev` for development
- ESLint configured
