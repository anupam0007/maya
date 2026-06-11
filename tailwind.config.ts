import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0F",
        violet: {
          DEFAULT: "#7C3AED",
        },
        cyan: {
          DEFAULT: "#06B6D4",
        },
        amber: {
          DEFAULT: "#F5A623",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124, 58, 237, 0.5)",
        "glow-cyan": "0 0 40px -10px rgba(6, 182, 212, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
