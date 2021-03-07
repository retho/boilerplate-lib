import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
// import postcss from 'rollup-plugin-postcss-modules'
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      dir: 'dist/cjs',
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      dir: 'dist/es',
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
      autoModules: true,
      // extract: 'styles.css',
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs(),
  ],
};
