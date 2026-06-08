import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Paper / archival beige background system
        paper: {
          DEFAULT: "#E8E4D8",
          50: "#F4F1E8", // light archival paper
          100: "#E8E4D8",
          200: "#DCD6C5",
          300: "#CFC8B9", // border
        },
        // Editorial ink (true near-black, used everywhere instead of navy)
        ink: {
          DEFAULT: "#111111",
          50: "#E6E5E2",
          100: "#C9C7C2",
          400: "#3D3D3D",
          500: "#2F2F2F",
          600: "#262626", // soft black (hover / surfaces)
          700: "#1A1A1A",
          900: "#0A0A0A",
        },
        // Muted gray for secondary copy
        mute: {
          DEFAULT: "#6B6B6B",
          400: "#8A8A8A",
          500: "#6B6B6B",
          600: "#525252",
        },
        // Archival brown accent (replaces the old red-orange "ember")
        ember: {
          DEFAULT: "#7A6754",
          50: "#EFEAE1",
          100: "#D8CFBE",
          500: "#7A6754",
          600: "#5F5141",
          700: "#463A2E",
        },
        // Warm rust / clay — drawn from the megaphone bell
        clay: {
          DEFAULT: "#B85C38",
          50: "#F4E0D5",
          100: "#E8C0AC",
          500: "#B85C38",
          600: "#92482C",
          700: "#6E3621",
        },
        // Sage / olive green — drawn from the university pediment
        moss: {
          DEFAULT: "#6F7958",
          50: "#E6E8DD",
          100: "#C8CCB7",
          500: "#6F7958",
          600: "#565F45",
          700: "#3F4632",
        },
        // Deep wine / wax-seal red — for serious advocacy accents
        crimson: {
          DEFAULT: "#7E2C2C",
          50: "#F1DADA",
          100: "#DDA9A9",
          500: "#7E2C2C",
          600: "#5F2121",
          700: "#421717",
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
        wider2: "0.22em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17, 17, 17, 0.04), 0 6px 24px -10px rgba(17, 17, 17, 0.10)",
        "card-hover":
          "0 1px 2px rgba(17, 17, 17, 0.06), 0 16px 40px -18px rgba(17, 17, 17, 0.22)",
        glow: "0 10px 28px -14px rgba(17, 17, 17, 0.55)",
        "ember-ring": "0 0 0 1px rgba(122, 103, 84, 0.25)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
