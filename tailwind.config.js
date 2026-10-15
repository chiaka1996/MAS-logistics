/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./data/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#07101E',
          900: '#0A192F',
          850: '#0D203D',
          800: '#11294D',
          700: '#1A3B6B',
          600: '#234C87',
          500: '#2E63B0',
        },
        masOrange: {
          DEFAULT: '#E63920',
          hover: '#CF2E17',
          light: '#FFF1EE',
        },
        slate: {
          850: '#15202E',
        },
        brandTeal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        brandBlue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
        heading: [
          'Inter',
          '-apple-system',
          'sans-serif'
        ]
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(10, 25, 47, 0.06)',
        'medium': '0 10px 30px -4px rgba(10, 25, 47, 0.1)',
        'elevated': '0 20px 40px -6px rgba(10, 25, 47, 0.14)',
      }
    },
  },
  plugins: [],
}
