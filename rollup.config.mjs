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
  { name: "Avatar", path: "Display" },
  { name: "Badge", path: "Display" },
  { name: "BadgeCount", path: "Display" },
  { name: "BadgeIcon", path: "Display" },
  { name: "BadgeStatus", path: "Display" },
  { name: "SnackBar", path: "Feedback" },
  { name: "Dialog", path: "Feedback" },
  { name: "Icon", path: "icon" },
  { name: "CheckBox", path: "Input" },
  { name: "CheckBoxGroup", path: "Input" },
  { name: "Chip", path: "Input" },
  { name: "MenuItem", path: "Input" },
  { name: "InputMenu", path: "Input" },
  { name: "NumberStepper", path: "Input" },
  { name: "NumberStepperSkeleton", path: "Input" },
  { name: "ProgressBar", path: "Input" },
  { name: "Radio", path: "Input" },
  { name: "RadioGroup", path: "Input" },
  { name: "Switch", path: "Input" },
  { name: "TextArea", path: "Input" },
  { name: "TextAreaSkeleton", path: "Input" },
  { name: "TextField", path: "Input" },
  { name: "TextFieldSkeleton", path: "Input" },
  { name: "Divider", path: "Layout" },
  { name: "Scrim", path: "Layout" },
  { name: "Accordion", path: "Layout" },
  { name: "ButtonMobile", path: "Navigation" },
  { name: "ButtonPC", path: "Navigation" },
  { name: "HorizontalNav", path: "Navigation" },
  { name: "HorizontalNavItem", path: "Navigation" },
  { name: "TabItem", path: "Navigation" },
  { name: "Tabs", path: "Navigation" },
  { name: "TopBar", path: "Navigation" },
  { name: "VerticalNav", path: "Navigation" },
  { name: "ColorGround.config", path: "tailwindConfig" },
  { name: "tailwind_color.config", path: "tailwindConfig" },
  {
    name: "tailwind_elevation.config",
    path: "tailwindConfig",
  },
  { name: "tailwind_spacing.config", path: "tailwindConfig" },
  { name: "tailwind_radius.config", path: "tailwindConfig" },
  { name: "tailwind_motions.config", path: "tailwindConfig" },
  {
    name: "tailwind_typography.config",
    path: "tailwindConfig",
  },
];

const configList = [
  ...components.map(({ name, path }) => ({
    input: `src/${path}/index.ts`,
    output: [
      {
        file: `dist/${path}/${name}.js`,
        format: "esm",
        sourcemap: true,
      },
      {
        file: `dist/${path}/${name}.cjs`,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ declaration: false }),
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
  ...components.map(({ name, path }) => ({
    input: `dist/types/${path}/${name}.d.ts`,
    output: [{ file: `dist/types/${path}/${name}.d.ts`, format: "es" }],
    plugins: [dts()],
    external: [/\.css$/],
  })),
];

export default configList;
