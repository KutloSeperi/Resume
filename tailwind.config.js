/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        'navy-light': '#0f2044',
        'electric-blue': '#1e90ff',
        'electric-blue-light': '#60b4ff',
        muted: '#94a3b8'
      }
    }
  },
  plugins: [daisyui]
}
