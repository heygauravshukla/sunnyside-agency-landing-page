/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "soft-red": "hsl(var(--color-soft-red))",
      yellow: "hsl(var(--color-yellow))",
      "dark-desaturated-cyan": "hsl(var(--color-dark-desaturated-cyan))",
      "dark-blue": "hsl(var(--color-dark-blue))",
      "dark-moderate-cyan": "hsl(var(--color-dark-moderate-cyan))",
      "very-dark-desaturated-blue":
        "hsl(var(--color-very-dark-desaturated-blue))",
      "very-dark-grayish-blue": "hsl(var(--color-very-dark-grayish-blue))",
      "dark-grayish-blue": "hsl(var(--color-dark-grayish-blue))",
      "grayish-blue": "hsl(var(--color-grayish-blue))",
      white: "hsl(var(--color-white))",
    },
    extend: {},
  },
  plugins: [],
};
