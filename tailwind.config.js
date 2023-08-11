/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-500": "#6d737a",
        "gray-black": "#1b1d1f",
        lemonchiffon: "#fceebf",
        "gray-700": "#363a3d",
        goldenrod: "#e2b100",
        "gray-white": "#fff",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#eaeaea",
          "300": "#e7e9eb",
        },
        gainsboro: "rgba(226, 226, 226, 0.1)",
        oldlace: "#fdf8e6",
        "primary-900": "#0f1320",
        darkgoldenrod: "#b58f06",
        gray: "rgba(0, 0, 0, 0.5)",
        slategray: "#576074",
        darkslategray: "#434343",
        lightslategray: "#889099",
        "primary-800": "#1e2640",
        dimgray: "#707070",
        "primary-50": "#edeff6",
      },
      fontFamily: {
        "body-regular-400": "'Public Sans'",
        "body-regular-600": "Inter",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "10xs": "3px",
        "3xs": "10px",
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      "xs-6": "11.6px",
      "2xs-8": "10.8px",
      "sm-6": "13.6px",
      "mini-5": "14.5px",
      "33xl": "52px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      "21xl": "40px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
