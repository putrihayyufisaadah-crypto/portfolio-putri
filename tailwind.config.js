/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dusty: {
          50: '#FDF8F8',
          100: '#F6E8E8', // Blush Pink
          200: '#EBCBD0', // Soft Pink
          300: '#D8A7AD', // Dusty Pink (Primary)
          400: '#BC858E', // Muted Rose
          500: '#A46F78',
          600: '#8E5862',
          700: '#79565D', // Rose Brown
          800: '#5E3E44',
          900: '#43292E',
          950: '#2A171B',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FFF9F8', // Cream White
          200: '#FAF3F2',
          300: '#F4ECEB',
          400: '#E8DDD9',
        },
        luxury: {
          dusty: '#D8A7AD',
          soft: '#EBCBD0',
          blush: '#F6E8E8',
          cream: '#FFF9F8',
          roseBrown: '#79565D',
          mutedRose: '#BC858E',
          gold: '#CBB285',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-luxury': '0 10px 30px -5px rgba(216, 167, 173, 0.2), 0 4px 12px -2px rgba(121, 86, 93, 0.06)',
        'luxury-hover': '0 20px 40px -10px rgba(216, 167, 173, 0.35), 0 8px 16px -4px rgba(121, 86, 93, 0.1)',
        'card-glow': '0 0 25px rgba(235, 203, 208, 0.45)',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #FFF9F8 0%, #F6E8E8 50%, #EBCBD0 100%)',
        'dusty-gradient': 'linear-gradient(135deg, #D8A7AD 0%, #BC858E 100%)',
        'rose-gradient': 'linear-gradient(135deg, #79565D 0%, #5E3E44 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(246, 232, 232, 0.6) 100%)',
      }
    },
  },
  plugins: [],
}
