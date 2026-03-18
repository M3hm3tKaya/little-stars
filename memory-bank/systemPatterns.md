# System Patterns

## Design Patterns
- **Rounded Everything**: Cards 16-20px, buttons pill (9999px), images 16-24px
- **Pastel Backgrounds**: Each section alternates between pastel colors
- **PastelWave Divider**: SVG wave component between sections
- **FloatingShapes**: Fixed position decorative SVGs with CSS float animations
- **Card Hover**: translateY(-6px) with shadow on hover, 0.5s cubic-bezier bounce

## Component Patterns
- SectionTitle: Reusable heading with optional highlight word in yellow
- PastelWave: Section divider with configurable color and flip
- All pages include FloatingShapes as first child
- Navbar: Sticky, warm white, hamburger mobile, pill CTA
- Footer: Dark navy, star logo, MEB badge

## Animation Patterns
- Float: translateY +/-10px, 4-6s duration, infinite
- Card hover: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) bounce
- Accordion: max-height transition 0.5s
- Counter: IntersectionObserver triggered, 2s duration
