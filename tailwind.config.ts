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
        brand: {
          primary: "#01538c",
          "primary-light": "#0277bd",
          secondary: "#ef0027",
          "secondary-light": "#ff1744",
          dark: "#1a1a1a",
          white: "#FFFFFF",
          // Legacy aliases for backward compatibility during transition
          blue: "#01538c",
          light: "#0277bd",
          gold: "#ef0027",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
