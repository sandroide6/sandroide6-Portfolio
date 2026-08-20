import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        'green-dark': '#065f46',
        'green-neon': '#10b981',
        'green-bright': '#34d399',
        graphite: {
          50: '#3a3a3a',
          100: '#2a2a2a',
          200: '#1f1f1f',
          300: '#141414',
          400: '#0a0a0a',
        },
      },
      fontFamily: {
        heading: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-space)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-green': "linear-gradient(rgba(16, 185, 129, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.06) 1px, transparent 1px)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(16, 185, 129, 0.5), 0 0 100px rgba(6, 95, 70, 0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'green-sm': '0 0 15px rgba(16, 185, 129, 0.2)',
        'green-md': '0 0 30px rgba(16, 185, 129, 0.3)',
        'green-lg': '0 0 60px rgba(16, 185, 129, 0.4), 0 0 100px rgba(6, 95, 70, 0.15)',
        'green-xl': '0 0 80px rgba(16, 185, 129, 0.5), 0 0 150px rgba(16, 185, 129, 0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
