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
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
        serif: ["Cormorant Garamond", "serif"], 
        mono: ["Fira Code", "monospace"], 
        ebgaramond: "var(--font-ebgaramond)",
        playfairsc: "var(--font-playfair-sc)",
        playfair: "var(--font-playfair)",
        cormorant: "var(--font-cormorant)",
      },
      colors: {
        neutralTan: 'var(--neutral-tan)',
        agoraGreen: 'var(--agora-green)',
        lightGreen: 'var(--light-green)',
        lightLightGreen: 'var(--light-light-green)',
        grayGreen: 'var(--gray-green)',
        darkGrayGreen: 'var(--dark-gray-green)',
        darkGreen: 'var(--dark-green)',
        darkestGreen: 'var(--darkest-green)',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
