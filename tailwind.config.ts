import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "rgb(var(--color-cream-rgb) / <alpha-value>)",
                orange: {
                    DEFAULT: "rgb(var(--color-orange-rgb) / <alpha-value>)",
                    burnt: "#8E4631",
                },
                charcoal: "rgb(var(--color-charcoal-rgb) / <alpha-value>)",
                sage: "rgb(var(--color-sage-rgb) / <alpha-value>)",
                gold: "rgb(var(--color-gold-rgb) / <alpha-value>)",
                terracotta: "rgb(var(--color-orange-rgb) / <alpha-value>)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                serif: ["var(--font-serif)", "Georgia", "serif"],
            },
            backdropBlur: {
                xs: "2px",
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
                "slide-up": "slide-up 0.5s ease-out",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
