import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "move-diagonal": "move-diagonal 0.3s ease-out forwards", // adjust duration as needed
        return: "return 0.3s ease-out forwards", // animation for returning
      },
      keyframes: {
        "move-diagonal": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(5px, -5px)" },
        },
        return: {
          "0%": { transform: "translate(5px, -5px)" },
          "100%": { transform: "translate(0, 0)" }, // Return to original position
        },
      },
      colors: {
        customColor: "#0e1010",
      },
      fontFamily: {
        outfit: ["Outfit", "serif"],
        inter: ["Inter", "serif"],
        outfitsubtext: ["Outfit", "Inter", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
