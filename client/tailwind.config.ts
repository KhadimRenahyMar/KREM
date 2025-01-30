import { join } from "path";
import { brandColors } from "./src/styles/brand-colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}",
    ),
    "@psykhe/frontend/ui/**/*",
    "../frontend/ui/**/*.tsx",
  ],
  theme: {
    // valeur tailwind par défaut
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      // nouvelle valeur tailwind
      backgroundImage: {
        "cloud-mobile": "url('./src/assets/bg/mobile.svg')",
        "cloud-desktop": "url('./src/assets/bg/desktop.svg')",
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        subHeading: ["Inconsolata", "monospace"],
        text: ["Roboto Slab", "serif"],
      },
      colors: brandColors,
    },
  },
  plugins: [],
  important: true,
};
