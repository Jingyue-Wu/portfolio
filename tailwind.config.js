/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fade-up 0.7s ease-out',
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(25px)',
          },

          '20%': {
            opacity: 0.1,
          },

          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
      },
    },
    // colors: {
    //   'background': '#dae0f5',
    //   'light': '#F8F9FE',
    //   'primary': '#5C6AC4',
    //   'secondary': '#B2BCE3',
    //   'accent': '#8391C5',
    //   'text': '#1c2554',
    //   'text-light': '#2B43C5',
    //   'accent-2': '#3591A2',
    // },

        colors: {
      'background': '#dae0f5',
      'light': '#F8F9FE',
      'primary': '#5C6AC4',
      'secondary': '#B2BCE3',
      'accent': '#8391C5',
      'text': '#1c2554',
      'text-light': '#2B43C5',
      'accent-2': '#3591A2',
    },
    fontFamily: {
      'space-mono': ['"Space Mono"', 'regular'],
    },

  },
  plugins: [],
}

