import { defineConfig } from "tsup";
import { writeFileSync, readFileSync, copyFileSync } from "fs";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom", "next"],
  sourcemap: true,
  splitting: false,
  treeshake: true,
  async onSuccess() {
    // Prepend "use client" directive to ESM and CJS bundles
    // Required for Next.js App Router to recognise these as client components
    for (const file of ["dist/index.mjs", "dist/index.js"]) {
      const content = readFileSync(file, "utf-8");
      writeFileSync(file, `"use client";\n${content}`);
    }

    // Ship the design tokens as the published stylesheet. The package.json
    // exports map and the README both promise ./styles.css, but nothing ever
    // emitted it, so consumers following the documented import hit a missing
    // file and rendered every component with no theme variables at all.
    copyFileSync("src/theme/tokens.css", "dist/styles.css");
  },
});
