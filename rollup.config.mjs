import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";

import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
import path from "path";

// __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// fs를 사용하여 JSON 파일을 동적으로 읽어옴
const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

// 모든 컴포넌트를 개별적으로 빌드하기 위한 입력 파일 설정
const componentsDir = path.resolve(__dirname, "src");

// 컴포넌트가 있는 폴더를 탐색하여 개별적인 파일을 번들링하도록 설정
const components = fs
  .readdirSync(componentsDir)
  .filter(
    file =>
      fs.statSync(path.join(componentsDir, file)).isDirectory() &&
      file !== "Foundation" &&
      file !== "utils",
  )
  .map(dir => ({
    input: `src/${dir}/index.ts`,
    output: [
      {
        file: `dist/${dir}/index.js`,
        format: "esm",
        sourcemap: true,
      },
      {
        file: `dist/${dir}/index.cjs`,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        extensions: [".css"],
        plugins: [tailwindcss, autoprefixer],
        extract: false,
      }),
      svgr(),
      terser(),
    ],
    external: ["react", "react-dom"],
  }));

// 기본 설정 (src/index.ts와 같이 전체 파일을 빌드할 때 사용)
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
    terser(),
  ],
  external: ["react", "react-dom"],
};

// 전체 설정을 components와 mainConfig로 나눔
const configList = [
  ...components, // 개별 컴포넌트 번들링 설정
  mainConfig, // 메인 index.ts 번들링 설정
];

export default configList;
