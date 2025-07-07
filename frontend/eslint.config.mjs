import js from "@eslint/js";
import queryPlugin from "@tanstack/eslint-plugin-query";
import vitestPlugin from "@vitest/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import jsdocPlugin from "eslint-plugin-jsdoc";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import promisePlugin from "eslint-plugin-promise";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "vite.config.ts",
      "src/vite-env.d.ts",
      "public/mockServiceWorker.js"
    ]
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat["jsx-runtime"],
      sonarjsPlugin.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      promisePlugin.configs["flat/recommended"],
      jsxA11yPlugin.flatConfigs.recommended,
      jsdocPlugin.configs["flat/recommended-typescript"],
      ...queryPlugin.configs["flat/recommended"]
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: { ...globals.browser, ...globals.es2025, ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@typescript-eslint/no-deprecated": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "jsdoc/require-jsdoc": "off"
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        typescript: true
      }
    }
  },
  {
    files: ["**/*.{js,jsx,mjs}"],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off"
    }
  },
  {
    files: ["**/*.{spec,test}.{ts,tsx,js,jsx}"],
    plugins: {
      vitest: vitestPlugin
    },
    extends: [testingLibraryPlugin.configs["flat/react"]],
    rules: {
      ...vitestPlugin.configs.recommended.rules
    }
  },
  eslintConfigPrettier
);
