import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        charcoal: "#141414",
        paper: "#f3f1ec",
        parchment: "#e9e5db",
        bone: "#cfc9bc",
        stone: "#8f897c",
        silver: "#c9c2b4",
        hairline: "rgba(233, 229, 219, 0.14)"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      maxWidth: {
        content: "1360px"
      },
      letterSpacing: {
        wideish: "0.04em"
      }
    }
  },
  plugins: []
};

export default config;
