import type { Config } from "tailwindcss";
import { merge } from "lodash";
import ColorGroundConfig from "./src/tailwindConfig/ColorGround.config";
import tailwindColorConfig from "./src/tailwindConfig/tailwind_color.config";
import tailwindElevationConfig from "./src/tailwindConfig/tailwind_elevation.config";
import tailwindSpacingConfig from "./src/tailwindConfig/tailwind_spacing.config";
import tailwindRadiusConfig from "./src/tailwindConfig/tailwind_radius.config";
import tailwindMotionsConfig from "./src/tailwindConfig/tailwind_motions.config";
import tailwindTypographyConfig from "./src/tailwindConfig/tailwind_typography.config";

const baseConfig: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

const config: Config = merge(
  baseConfig,
  ColorGroundConfig,
  tailwindElevationConfig,
  tailwindSpacingConfig,
  tailwindRadiusConfig,
  tailwindMotionsConfig,
  tailwindTypographyConfig,
  tailwindColorConfig,
);

export default config;
