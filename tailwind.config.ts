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
        'red-dark': '#7a0000',
        'red-neon': '#c1121f',
        'red-bright': '#ff2d3f',
        graphite: {
          50: '#3a3a3a',
          100: '#2a2a2a',
          200: '#1f1f1f',
          300: '#141414',
          400: '#0a0a0a',
        },
      },
      fontFamily: {
        heading: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-space)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-red': "linear-gradient(rgba(193,18,31,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.06) 1px, transparent 1px)",
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(193,18,31,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(193,18,31,0.5), 0 0 100px rgba(122,0,0,0.2)' },
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
        'red-sm': '0 0 15px rgba(193,18,31,0.2)',
        'red-md': '0 0 30px rgba(193,18,31,0.3)',
        'red-lg': '0 0 60px rgba(193,18,31,0.4), 0 0 100px rgba(122,0,0,0.15)',
        'red-xl': '0 0 80px rgba(193,18,31,0.5), 0 0 150px rgba(193,18,31,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
