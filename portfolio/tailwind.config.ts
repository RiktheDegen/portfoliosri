import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "mob-s" : "320px",
        "mob-m" : "375px",
        "mob-l" : "425px",
        "tab" : "768px",
        "lap" : "1024px",
        "lap-xl" :"1440px",
        "lap-2xl" :"1920px",
      },
     
     
    },
  },
  plugins: [],
};
export default config;
