/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        accent: '#FF640A',
        accentInk: '#1a0900',
        ink: { DEFAULT: '#32303a', soft: '#6f6c78', softer: '#8b8895' },
        paper: { DEFAULT: '#fcfbfd', card: '#fdfcfe' },
        night: { DEFAULT: '#26242c', card: '#2f2d36', deep: '#151319' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      keyframes: {
        drift1: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(40px,-30px) scale(1.12)' } },
        drift2: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(-36px,34px) scale(0.9)' } },
        spinSlow: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        riseIn: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        drift1: 'drift1 14s ease-in-out infinite',
        drift2: 'drift2 18s ease-in-out infinite',
        spinSlow: 'spinSlow 40s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        riseIn: 'riseIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
      },
    },
  },
  plugins: [],
}
