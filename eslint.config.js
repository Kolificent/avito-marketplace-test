import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactFunc from 'eslint-plugin-react-func';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-func': reactFunc,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...prettier.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-func/max-lines-per-function': [
        'warn',
        {
          max: 100,
          skipBlankLines: true,
          skipComments: true,
          IIFEs: true,
        },
      ],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-constant-condition': 'warn',
      eqeqeq: 'warn',
      'no-debugger': 'warn',
      'no-compare-neg-zero': 'warn',
      'no-const-assign': 'warn',
      'no-self-assign': 'warn',
      'no-self-compare': 'warn',
      'no-unused-vars': 'warn',
      'valid-typeof': 'warn',
      'prefer-const': 'warn',
      'for-direction': 'warn',
      'no-shadow': 'warn',
    },
  },
);
