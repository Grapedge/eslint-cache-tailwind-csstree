import { defineConfig } from 'eslint/config';
import css from '@eslint/css';
import { tailwind3 } from 'tailwind-csstree';

export default defineConfig([
  {
    files: ['**/*.css'],
    plugins: {
      css,
    },
    language: 'css/css',
    languageOptions: {
      customSyntax: tailwind3,
    },
    rules: {
      'css/no-empty-blocks': 'error',
    },
  },
]);
