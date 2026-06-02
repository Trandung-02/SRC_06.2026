/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        meta: {
          blue: '#0064E0',
          link: '#1877F2',
          'blue-light': '#33B5FF',
          'blue-electric': '#00A3FF',
          navy: '#053D87',
          dark: '#1C2B33',
          'dark-deep': '#1b2a34',
          bg: '#FFFFFF',
          'bg-soft': '#F1F4F7',
          'bg-page': '#F0F2F5',
          surface: '#FFFFFF',
          'surface-soft': '#F1F4F7',
          border: '#CED0D4',
          'border-light': '#E4E6EB',
          text: '#1C1E21',
          'text-body': '#465A69',
          'text-secondary': '#65676B',
          'text-muted': '#8595A4',
          accent: '#833AB4',
          'accent-magenta': '#C13584',
        },
      },
      maxWidth: {
        'mv-content': '1328px',
      },
    },
  },
  plugins: [],
}
