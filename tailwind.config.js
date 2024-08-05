/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "dark-blue": "#15283d",
        slategray: "#475c70",
        "dark-blue-10": "rgba(21, 40, 61, 0.1)",
        gray: {
          "100": "#0d0c0c",
          "200": "#0c0b0b",
          "300": "rgba(21, 40, 61, 0.7)",
          "400": "rgba(21, 40, 61, 0.6)",
          "500": "rgba(21, 40, 61, 0.8)",
          "600": "rgba(21, 40, 61, 0.5)",
        },
        "main-background": "#f3f5fc",
        primary: "#050509",
        darkslategray: "#38383d",
        "border-1": "#eaeeff",
        "gray-1": "#9f9f9f",
        text: "#828284",
        "variant-background": "#003061",
        secondary: "#58585b",
        lavender: "#d0dbff",
        black: "#000",
        tan: "#bdb499",
        "light-blue-background": "#eef4f8",
        ghostwhite: "#f8f8ff",
        gainsboro: "#dedee6",
      },
      spacing: {
        "spacing-xs": "8px",
      },
      fontFamily: {
        "body-body-2": "Inter",
        "heading-heading-5": "Merriweather",
        "body-3": "'DM Sans'",
        "work-sans": "'Work Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "80xl": "99px",
        "8xs": "5px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      mid: "17px",
      sm: "14px",
      xl: "20px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "37xl": "56px",
      "45xl": "64px",
      "32xl": "51px",
      "25xl": "44px",
      "7xl": "26px",
      "16xl": "35px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
