import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Off-white editorial background
        paper: {
          DEFAULT: "#F8F5F0",
          50: "#FBF9F5",
          100: "#F8F5F0",
          200: "#EFEAE1",
        },
        // Deep navy/charcoal for body text + dark surfaces
        ink: {
          DEFAULT: "#11182B",
          50: "#E6E8EE",
          100: "#C5CAD6",
          400: "#3A4259",
          600: "#1B2238",
          700: "#11182B",
          900: "#070B17",
        },
        // Warm campaign accent (red-orange)
        ember: {
          DEFAULT: "#D7402B",
          50: "#FCEAE6",
          100: "#F7C7BD",
          500: "#D7402B",
          600: "#B82F1C",
          700: "#921F11",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
        page: "1200px",
      },
      letterSpacing: {
        tightish: "-0.015em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17, 24, 43, 0.04), 0 8px 30px -8px rgba(17, 24, 43, 0.08)",
        "card-hover":
          "0 1px 2px rgba(17, 24, 43, 0.05), 0 18px 44px -16px rgba(17, 24, 43, 0.18)",
        glow: "0 10px 28px -10px rgba(215, 64, 43, 0.55)",
        "ember-ring": "0 0 0 1px rgba(215, 64, 43, 0.2)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
