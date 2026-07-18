import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import jestPlugin from "eslint-plugin-jest";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
    {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
        globals: globals.browser,
        parserOptions: {
        ecmaFeatures: { jsx: true },
        },
    },
},
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.test.{js,jsx}"],
    plugins: {
      jest: jestPlugin,
      "testing-library": testingLibraryPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      ...testingLibraryPlugin.configs.react.rules,
      "testing-library/await-async-events": "off",
    },
    languageOptions: {
      globals: {
        test: true,
        expect: true,
        describe: true,
        beforeEach: true,
        afterEach: true,
        it: true,
        jest: true,
      },
    },
    
  },
  {
  plugins: {
    security: pluginSecurity,
  },
  rules: {
    "security/detect-eval-with-expression": "error",
  },
},
]);