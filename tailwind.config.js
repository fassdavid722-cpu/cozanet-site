/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cozanet design system
        coz: {
          black: '#0A0A0A',
          'deep-black': '#000000',
          charcoal: '#1A1A1A',
          'charcoal-light': '#2A2A2A',
          slate: '#6B7280',
          'slate-light': '#9CA3AF',
          surface: '#F8F8F8',
          'surface-dark': '#111111',
          border: '#E5E5E5',
          'border-dark': '#333333',
          gold: '#FFB800',
          'gold-light': '#FFF5E0',
          'gold-muted': '#D4A94A',
          'gold-dark': '#B8860B',
          link: '#1A73E8',
          purple: '#6C2BD9',
          'purple-light': '#9B6EF3',
          'purple-dark': '#4C1F9E',
          'purple-surface': '#F3EDFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '500' }],
        'h1': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '500' }],
        'h2': ['clamp(2rem, 3.5vw, 3.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h3': ['clamp(1.5rem, 2.5vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h4': ['clamp(1.125rem, 1.5vw, 1.5rem)', { lineHeight: '1.2', fontWeight: '500' }],
        'body-lg': ['clamp(1.125rem, 1.5vw, 1.5rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        'card': '16px',
        'card-lg': '24px',
        'button': '12px',
        'pill': '9999px',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 16px 48px rgba(0,0,0,0.08)',
        'card-dark': '0 1px 3px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.3)',
        'gold-glow': '0 0 40px rgba(255,184,0,0.15)',
      },
      spacing: {
        'section': 'clamp(80px, 10vw, 160px)',
        'section-sm': 'clamp(48px, 6vw, 96px)',
        'section-lg': 'clamp(120px, 15vh, 200px)',
        'content': '1280px',
        'content-wide': '1440px',
        'content-narrow': '720px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.3)", opacity: "0.5" },
        },
        "typing": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "draw-line": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "float-delayed": "float-delayed 4s ease-in-out infinite",
        "float-slow": "float 3.5s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "typing": "typing 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
