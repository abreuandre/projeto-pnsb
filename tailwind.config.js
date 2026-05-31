/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parish: {
          blue:    '#3AA3FF',
          blueDark:'#1a7fd4',
          blueDeep:'#0d4f8c',
          white:   '#FCFCFC',
          pink:    '#FFB7E2',
          pinkDark:'#e885c8',
          bg:      '#f0f8ff',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body:  ['"Lato"', 'sans-serif'],
        latin: ['"IM Fell English"', 'serif'],
      },
    },
  },
  plugins: [],
}
