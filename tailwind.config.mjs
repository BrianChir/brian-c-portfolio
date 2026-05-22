/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: '#f4efe7',
          secondary: '#c9beb2',
          muted: '#8d8175',
        },
        accent: {
          DEFAULT: '#d9855f',
          soft: '#3a241d',
        },
        surface: {
          DEFAULT: '#121211',
          alt: '#1b1816',
          card: '#181715',
        },
        border: '#34302b',
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
        hero: ['clamp(36px, 5.5vw, 56px)', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        'page-title': ['clamp(28px, 4vw, 40px)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'section-title': ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
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
