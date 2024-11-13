import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import glob from "glob";

const isProduction = process.env.NODE_ENV === "production";

const componentPaths = glob.sync("src/**/*.{ts,tsx,css}", {
  ignore: ["src/**/stories/**", "src/**/*.stories.tsx", "src/**/*.stories.ts"],
});

const mainConfig = {
  input: {
    ...componentPaths.reduce((entries, filePath) => {
      const entryName = filePath
        .replace("src/", "")
        .replace(/\.(ts|tsx|js)$/, "");
      entries[entryName] = filePath;
      return entries;
    }, {}),
  },
  output: [
    {
      dir: "dist",
      format: "cjs",
      entryFileNames: "[name].js",
      sourcemap: true,
    },
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name].js",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist/types",
      outDir: null,
    }),
    postcss({
      extensions: [".css"],
      plugins: [tailwindcss, autoprefixer],
      extract: true,
    }),
    svgr(),
    isProduction && terser(), // 프로덕션 빌드에서만 terser 사용
  ],
  external: ["telejson", "react", "react-dom", /^@storybook\//],
};

const configList = [mainConfig];

export default configList;
