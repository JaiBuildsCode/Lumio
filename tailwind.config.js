/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#080808',
          surface: '#111111',
          elevated: '#161616',
          deep: '#0A0A0A',
          deepest: '#040404',
          accent: '#0D2818',
        },
        border: {
          base: '#1E1E1E',
          light: '#2D2D2D',
          subtle: '#161616',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
          muted: '#52525B',
        },
        accent: {
          green: '#4ADE80',
          glow: 'rgba(74,222,128,0.15)',
          cyan: '#22D3EE',
          gold: '#F59E0B',
          red: '#F87171',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hero: ['88px', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
      },
      letterSpacing: {
        tight: '-0.04em',
        widest: '0.15em',
      },
      boxShadow: {
        'glow-green': '0 0 30px rgba(74,222,128,0.3)',
        'glow-green-lg': '0 0 60px rgba(74,222,128,0.08)',
        'dashboard': '0 0 0 1px #1E1E1E, 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(74,222,128,0.04)',
      },
      keyframes: {
        'orb-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'dot-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'gradient-line': {
          '0%': { backgroundSize: '0% 100%' },
          '100%': { backgroundSize: '100% 100%' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'orb-pulse-5': 'orb-pulse 5s ease-in-out infinite',
        'orb-pulse-7': 'orb-pulse 7s ease-in-out infinite',
        'orb-pulse-9': 'orb-pulse 9s ease-in-out infinite',
        'dot-pulse': 'dot-pulse 1.5s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'gradient-line': 'gradient-line 1.2s ease-out',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      backdropBlur: {
        xl: '32px',
      },
    },
  },
  plugins: [],
}

