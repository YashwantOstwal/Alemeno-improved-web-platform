/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        ourclientsm:"url('./assets/Images/greenclients.png')",
        star:"url('./assets/Images/star.png')",
        heroImage:"url('./assets/Images/HeroImageforSmall.png')"

      },
      fontSize: {
        clamp: "clamp(1rem, 6vw, 3rem)",
        clamp2:"clamp(0.5rem, 2vw, 1.5rem)",
        clamp3:"clamp(0.5rem, 1.5vw, 1.5rem)",

      },
    },
  },
  plugins: [],
}