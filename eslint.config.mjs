import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["dist/**", "storybook-static/**", "node_modules/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      // This is a Framer Motion codebase: almost every interactive element is a
      // motion.* polymorphic wrapper. Without this mapping jsx-a11y would treat
      // them as unknown components and check almost nothing, which is the same
      // false assurance we are trying to remove. Map each motion primitive to
      // the host element it renders so the accessibility rules actually apply.
      "jsx-a11y": {
        components: {
          "motion.button": "button",
          "motion.a": "a",
          "motion.div": "div",
          "motion.span": "span",
          "motion.path": "path",
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
    },
  },
  {
    // Stories are authoring examples, not shipped code. Keep them linted but do
    // not fail the build on unused args that Storybook controls generate.
    files: ["src/**/*.stories.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
);
