import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundColor: {
        "custom-gradient":
          "linear-gradient(90deg, #3E085A, #FFD700, #00BFFF, #FF4500, #32CD32, #333333)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: {
          800: "#1a1a2e",
          900: "#0f0f1b",
        },
        "mitic-1": { DEFAULT: "#490ac6" },
        "mitic-2": { DEFAULT: "#25026b" },
        "mitic-3": { DEFAULT: "#3E085A" },
        "mitic-4": { DEFAULT: "#FFD700" },
        "mitic-5": { DEFAULT: "#00BFFF" },
        "mitic-6": { DEFAULT: "#FF4500" },
        "mitic-7": { DEFAULT: "#32CD32" },
        "mitic-8": { DEFAULT: "#333333" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blinkPattern: {
          "0%, 8%, 12%, 20%, 24%, 32%": { opacity: "1" },
          "4%, 16%, 28%": { opacity: "0" },
          "36%, 46%": { opacity: "1" },
          "48%, 52%": { opacity: "0" },
          "50%": { opacity: "1" },
          "54%, 74%": { opacity: "1" },
          "76%, 80%, 84%, 88%": { opacity: "0" },
          "78%, 82%, 86%, 90%": { opacity: "1" },
          "92%, 100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blinkPattern: "blinkPattern 8s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
