/** @type {import('tailwindcss').Config} */
// Petal Wash design system — migrated verbatim from the former CDN inline config
// (index.html) to build-time compilation. Tokens must stay in sync with the CSS
// custom properties in index.css (which power the .atlas-* utilities).
export default {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './{components,pages,content}/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Commissioner', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Petal Wash — true-white canvas, painted with rose ornament
        paper: {
          50: '#FDFBFA', // card alt — slight off-white
          100: '#FFFFFF', // primary surface — true white
          200: '#FBE8E5', // pink-tinted panel (testimonials, soft sections)
          300: '#EADFD9', // hairline / divider (footer, figcaps only)
          400: '#C9B8B0', // deeper neutral
        },
        ink: {
          300: '#9C8590',
          500: '#6B5260',
          700: '#3A2730',
          900: '#1F1418', // body — plum-bias dark
        },
        // Rose — feature pink, truer hue (~345°)
        rose: {
          50: '#FFF1F4',
          100: '#FFDCE3',
          200: '#FBB8C5',
          300: '#F38BA1',
          400: '#E36482', // soft pink — large/decorative use only (fails AA as text bg)
          500: '#C94668', // primary CTA fill (white text = 4.6:1, AA pass) / hover
          600: '#A4304F', // link text on white (AA pass)
          700: '#7A2238', // chapter marks, italic eyebrows
          800: '#501623',
          900: '#2B0C13',
        },
        // Peony — secondary wash, barely-violet, prevents monochromatic
        peony: {
          50: '#F6EEFF',
          100: '#E9DAFB',
          300: '#B89BE0',
          600: '#6B4D9A',
        },
        // Cream — fourth wash anchor, prevents pink-fatigue
        cream: {
          100: '#FFF6E8',
        },
        // Cherry emergency, slightly cooler than current
        signal: '#C2342B',
      },
      letterSpacing: {
        label: '0.16em',
        tightest: '-0.045em',
        tighter: '-0.025em',
        tight: '-0.015em',
      },
      maxWidth: {
        prose: '62ch',
        'column-sm': '36rem',
      },
      keyframes: {
        drawHorizontal: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left center' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left center' },
        },
        drawVertical: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top center' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top center' },
        },
        fadeLabel: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Seamless loop: track holds two identical sets; -50% advances exactly one.
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'draw-h': 'drawHorizontal 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'draw-v': 'drawVertical 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'fade-label': 'fadeLabel 0.6s ease-out both',
        marquee: 'marquee 48s linear infinite',
      },
    },
  },
  plugins: [],
};
