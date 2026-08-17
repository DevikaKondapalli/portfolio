/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBase: '#0B0E14',
        textPrimary: '#EDEFF3',
        textSecondary: '#A6AEBC',
        textTertiary: '#6E7789',
        accentTeal: '#37E8CE',
        accentViolet: '#8B7CF6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
