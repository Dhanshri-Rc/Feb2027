/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', '"Impact"', 'sans-serif'],
        body: ['"Manrope"', '"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: {
          950: '#050810',
          900: '#0A0F1C',
          800: '#0f1726',
          700: '#121826',
          600: '#182133',
          500: '#1e2d44',
        },
        teal: {
          300: '#5df5e4',
          400: '#00E5CC',
          500: '#00C2A8',
          600: '#009e88',
        },
        gold: {
          300: '#ffe59a',
          400: '#FFD166',
          500: '#f5bc2e',
          600: '#d49f10',
        },
        red: {
          400: '#ff6b8e',
          500: '#EF476F',
          600: '#d0204f',
        },
        slate: {
          100: '#E6EAF0',
          200: '#c8d0de',
          300: '#9aa5b8',
          400: '#6b7a94',
          500: '#3f4f68',
        },
      },
      backgroundImage: {
        'exec-gradient': 'linear-gradient(135deg, #00C2A8 0%, #FFD166 100%)',
        'teal-glow': 'radial-gradient(ellipse at center, rgba(0,194,168,0.15) 0%, transparent 65%)',
      },
      animation: {
        'ticker': 'ticker 35s linear infinite',
        'pulse-teal': 'pulseTeal 3s ease-in-out infinite',
        'blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseTeal: {
          '0%,100%': { boxShadow: '0 0 12px rgba(0,194,168,0.2)' },
          '50%': { boxShadow: '0 0 32px rgba(0,194,168,0.55)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
