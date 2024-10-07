import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";

import fs from "fs";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const isProduction = process.env.NODE_ENV === "production";

const mainConfig = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
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
    isProduction && terser(), // 프로덕션 빌드에서만 terser 사용
  ],
  external: ["react", "react-dom"],
};

const configList = [mainConfig];

export default configList;
