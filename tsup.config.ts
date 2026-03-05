import { defineConfig } from "tsup";
import { writeFileSync, readFileSync } from "fs";

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
  },
});
