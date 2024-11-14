import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  format: ["esm"],
  dts: true,
  legacyOutput: true,
  minify: true,
  metafile: true,
  target: "ES2018"
});
