module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
