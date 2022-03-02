import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import typescript from "@rollup/plugin-typescript";

const path = require("path");
const resolvePath = (str: string) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "@logrock/pebbles",
      fileName: (format) => `logrock-pebbles.${format}.js`,
    },
    rollupOptions: {
      external: ["preact"],
      output: {
        globals: {
          preact: "Preact",
        },
      },
      plugins: [
        typescript({
          target: "es2020",
          rootDir: resolvePath("lib"),
          declaration: true,
          declarationDir: resolvePath("dist"),
          exclude: resolvePath("node_modules/**"),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
});
