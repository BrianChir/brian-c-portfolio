/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          soft: 'var(--color-accent-soft)',
        },
        surface: {
          DEFAULT: 'var(--color-bg)',
          alt: 'var(--color-bg-alt)',
          card: 'var(--color-card)',
        },
        border: 'var(--color-border)',
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '820px',
        measure: '560px',
      },
      fontSize: {
        hero: ['clamp(38px, 5.5vw, 58px)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'page-title': ['clamp(30px, 4vw, 42px)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'section-title': ['28px', { lineHeight: '1.3', letterSpacing: '0' }],
        'case-title': ['22px', { lineHeight: '1.3' }],
        subsection: ['15px', { lineHeight: '1.5' }],
        body: ['15px', { lineHeight: '1.7' }],
        'body-sm': ['14px', { lineHeight: '1.7' }],
        'body-xs': ['13px', { lineHeight: '1.5' }],
        label: ['12px', { lineHeight: '1.5', letterSpacing: '0.12em' }],
        'label-sm': ['11px', { lineHeight: '1.5', letterSpacing: '0.08em' }],
        small: ['12px', { lineHeight: '1.5' }],
      },
      spacing: {
        'page': 'clamp(24px, 5vw, 48px)',
      },
    },
  },
  plugins: [],
};
