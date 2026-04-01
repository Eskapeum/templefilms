import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk Variable", "sans-serif"],
        body: ["Inter Variable", "sans-serif"],
        mono: ["JetBrains Mono Variable", "monospace"],
        brutal: ["Unbounded Variable", "sans-serif"],
      },
      colors: {
        "bg-primary": "#080808",
        "bg-secondary": "#111110",
        "bg-tertiary": "#1A1918",
        "accent-gold": "#D4912A",
        "accent-gold-light": "#E8DDB5",
        "accent-gold-dark": "#8B5A10",
        "accent-red": "#FF3131",
        "text-primary": "#F0EDE8",
        "text-secondary": "#878580",
        "text-tertiary": "#4A4845",
      },
    },
  },
  plugins: [],
};

export default config;
