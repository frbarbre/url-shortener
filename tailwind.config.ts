import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        gray: "hsl(0, 0%, 75%)",
        "gray-violet": "hsl(257, 7%, 63%)",
        violet: "hsl(257, 27%, 26%)",
        "dark-blue": "hsl(255, 11%, 22%)",
        "dark-violet": "hsl(260, 8%, 14%)",
        red: "hsl(0, 87%, 67%)",
      },
      backgroundImage: {
        "short-mobile": "url('/bg-shorten-mobile.svg')",
        "short-desktop": "url('/bg-shorten-desktop.svg')",
        "boost-mobile": "url('/bg-boost-mobile.svg')",
        "boost-desktop": "url('/bg-boost-desktop.svg')",
      },
      scale: {
        hr: "calc(100% + 48px)",
      },
    },
    screens: {
      md: "768px",
      lg: "1440px",
    },
  },
  plugins: [],
};
export default config;
