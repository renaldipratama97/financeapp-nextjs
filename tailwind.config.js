module.exports = {
  mode: ["jit"],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#6379F4",
      white: "#FFFFFF",
      darkColor: "#3A3D42",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
