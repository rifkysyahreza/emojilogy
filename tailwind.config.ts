import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-stroke": "#4A7582",
        "secondary-stroke": "#4C9BB9",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
export default config;
