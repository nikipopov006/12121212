import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#071F14",
        mainGreen: "#0B2A1A",
        deepGreen: "#123722",
        softGreen: "#2F5A3D",
        accentGreen: "#8DBF6A",
        lightText: "#F4F7F2",
        mutedText: "#B9C5BC",
        redAccent: "#E53935",
        goldAccent: "#D6A84F"
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 80px rgba(141, 191, 106, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
