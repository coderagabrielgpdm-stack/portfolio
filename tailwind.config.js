/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00D9FF',
        'neon-purple': '#B000FF',
        'neon-cyan': '#00FFD1',
        'dark-bg': '#0a0e27',
        'dark-card': '#1a1f3a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-blue': 'linear-gradient(135deg, #00D9FF 0%, #0084FF 100%)',
        'glow-purple': 'linear-gradient(135deg, #B000FF 0%, #7C3AED 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(0, 217, 255, 0.3)',
        'glow-purple': '0 0 30px rgba(176, 0, 255, 0.3)',
        'glow-cyan': '0 0 30px rgba(0, 255, 209, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
