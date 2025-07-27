import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import prettierConfig from './prettier.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // global ignores
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', '*.min.js'],
  },

  // base recommended rules
  js.configs.recommended,

  // next + typescript + prettier
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript', 'prettier'],
    settings: {
      react: { version: '19' },
    },
  }),

  // additional plugins & rules (mirrors your old file)
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    plugins: {
      'unused-imports': unusedImports,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser, // window, document, console, etc.
        ...globals.node, // module, require, __dirname, process, …
        ...globals.jest, // describe, test, expect, beforeEach, afterEach
        React: 'readonly', // React global for JSX
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      indent: 'off',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
      semi: ['error', 'never'],
      'react/prop-types': 'off',
      'react/no-unknown-property': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-console': 'off',
      'no-irregular-whitespace': 'off',

      'prettier/prettier': ['error', prettierConfig],
    },
  },

  // disables all prettier-conflicting ESLint rules
  prettier,
];

export default eslintConfig;
