import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#DAFF01",
        secondary: "#FF9100",
        neutral: {
          light: "#fafafa",
          lightgray: "#f5f5f5",
          gray: "#737373",
          darkgrey: "#171717",
          dark: "#0a0a0a",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
