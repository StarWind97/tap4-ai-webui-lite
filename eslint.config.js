const nextPlugin = require('@next/eslint-plugin-next/dist/index.js');

module.exports = [
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      next: nextPlugin,
    },
    rules: {
      'linebreak-style': ['error', 'windows'],
    },
  },
];
