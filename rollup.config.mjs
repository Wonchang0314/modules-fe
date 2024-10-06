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

const configList = [
  {
    input: {
      index: "src/index.ts",
      TopBar: "src/Navigation/TopBar.ts",
      Icon: "src/Icon/index.ts",
      Avatar: "src/Display/Avatar.ts",
      BadgeCount: "src/Display/BadgeCount.ts",
      BadgeIcon: "src/Display/BadgeIcon.ts",
      BadgeStatus: "src/Display/BadgeStatus.ts",
      SnackBar: "src/FeedBack/SnackBar.ts",
      Dialog: "src/FeedBack/Dialog.ts",
      CheckBox: "src/Input/CheckBox.ts",
      CheckBoxGroup: "src/Input/CheckBoxGroup.ts",
      Chip: "src/Input/Chip.ts",
      MenuItem: "src/Input/MenuItem.ts",
      InputMenu: "src/Input/InputMenu.ts",
      NumberStepper: "src/Input/NumberStepper.ts",
      TextArea: "src/Input/TextArea.ts",
      TextField: "src/Input/TextField.ts",
      Divider: "src/Layout/Divider.ts",
      Scrim: "src/Layout/Scrim.ts",
      Accordion: "src/Layout/Accordion.ts",
      ButtonMobile: "src/Navigation/ButtonMobile.ts",
      ButtonPC: "src/Navigation/ButtonPC.ts",
      HorizontalNav: "src/Navigation/HorizontalNav.ts",
      HorizontalNavItem: "src/Navigation/HorizontalNavItem.ts",
      TabItem: "src/Navigation/TabItem.ts",
      Tabs: "src/Navigation/Tabs.ts",
      VerticalNav: "src/Navigation/VerticalNav.ts",
      VerticalNavItem: "src/Navigation/VerticalNavItem.ts",
    },
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        entryFileNames: "[name].cjs.js",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        entryFileNames: "[name].js",
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
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

export default configList;
