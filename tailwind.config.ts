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
        violet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        "gray-violet": "hsl(257, 7%, 63%)",
        "dark-blue": "hsl(255, 11%, 22%)",
        "dark-voilet": "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
export default config;
