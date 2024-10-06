import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import svgr from "@svgr/rollup";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import copy from "rollup-plugin-copy";

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json

import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

const components = [
  { name: "Avatar", path: "Display/Avatar" },
  { name: "Badge", path: "Display/Badge" },
  { name: "BadgeCount", path: "Display/BadgeCount" },
  { name: "BadgeIcon", path: "Display/BadgeIcon" },
  { name: "BadgeStatus", path: "Display/BadgeStatus" },
  { name: "SnackBar", path: "Feedback/SnackBar" },
  { name: "Dialog", path: "Feedback/Dialog" },
  { name: "Icon", path: "icon/Icon" },
  { name: "CheckBox", path: "Input/CheckBox" },
  { name: "CheckBoxGroup", path: "Input/CheckBoxGroup" },
  { name: "Chip", path: "Input/Chip" },
  { name: "MenuItem", path: "Input/MenuItem" },
  { name: "InputMenu", path: "Input/InputMenu" },
  { name: "NumberStepper", path: "Input/NumberStepper" },
  { name: "NumberStepperSkeleton", path: "Input/NumberStepperSkeleton" },
  { name: "ProgressBar", path: "Input/ProgressBar" },
  { name: "Radio", path: "Input/Radio" },
  { name: "RadioGroup", path: "Input/RadioGroup" },
  { name: "Switch", path: "Input/Switch" },
  { name: "TextArea", path: "Input/TextArea" },
  { name: "TextAreaSkeleton", path: "Input/TextAreaSkeleton" },
  { name: "TextField", path: "Input/TextField" },
  { name: "TextFieldSkeleton", path: "Input/TextFieldSkeleton" },
  { name: "Divider", path: "Layout/Divider" },
  { name: "Scrim", path: "Layout/Scrim" },
  { name: "Accordion", path: "Layout/Accordion" },
  { name: "ButtonMobile", path: "Navigation/ButtonMobile" },
  { name: "ButtonPC", path: "Navigation/ButtonPC" },
  { name: "HorizontalNav", path: "Navigation/HorizontalNav" },
  { name: "HorizontalNavItem", path: "Navigation/HorizontalNavItem" },
  { name: "TabItem", path: "Navigation/TabItem" },
  { name: "Tab", path: "Navigation/Tab" },
  { name: "TopBar", path: "Navigation/TopBar" },
  { name: "VerticalNav", path: "Navigation/VerticalNav" },
  { name: "ColorGroundConfig", path: "tailwindConfig/ColorGround" },
  { name: "TailwindColorConfig", path: "tailwindConfig/tailwind_color" },
  {
    name: "TailwindElevationConfig",
    path: "tailwindConfig/tailwind_elevation",
  },
  { name: "TailwindSpacingConfig", path: "tailwindConfig/tailwind_spacing" },
  { name: "TailwindRadiusConfig", path: "tailwindConfig/tailwind_radius" },
  { name: "TailwindMotionsConfig", path: "tailwindConfig/tailwind_motions" },
  {
    name: "TailwindTypographyConfig",
    path: "tailwindConfig/tailwind_typography",
  },
];

const configList = [
  ...components.map(({ name, path }) => ({
    input: `src/${path}/index.ts`,
    output: [
      {
        file: `dist/${path}/index.js`,
        format: "esm",
        sourcemap: true,
      },
      {
        file: `dist/${path}/index.cjs`,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript(),
      postcss({
        extensions: [".css"],
        plugins: [tailwindcss, autoprefixer],
        extract: false,
      }),
      svgr(),
      copy({
        targets: [{ src: "src/styles/*.css", dest: "dist/styles" }],
      }),
    ],
    external: ["react", "react-dom"],
  })),
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

export default configList;
