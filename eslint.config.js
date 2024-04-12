import eslint from '@eslint/js'
import eslintTs from 'typescript-eslint'
import eslintVue from 'eslint-plugin-vue'
import eslintTsParser from '@typescript-eslint/parser'
import eslintVueParser from 'vue-eslint-parser'
import eslintStylistic from '@stylistic/eslint-plugin'
import eslintVuetify from 'eslint-config-vuetify'


import { FlatCompat } from '@eslint/eslintrc'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname })

export default eslintTs.config(
  eslint.configs.recommended,
  ...eslintTs.configs.recommended,
  ...eslintVue.configs['flat/recommended'],
  /**
   * Global ignores
   */
  {
    ignores: ['**/*.d.ts', '!node_modules/', '!.git/', '!dist/', '!build/', '!public/'],
  },
  /**
   * Global variables
   */
  {
    ...compat.extends('.eslintrc-auto-import.json').pop(),
  },
  /**
   * Global rules
   */
  {
    plugins: {
      '@stylistic': eslintStylistic,
    },
    rules: {
      ...eslintVuetify.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-global-assign': ['error', { exceptions: ['Object'] }],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',

      'object-curly-spacing': ['error', 'always'],
      // 'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/arrow-parens': ['off'],
      '@stylistic/indent': ['error', 2],
    },
  },
  /**
   * Vue rules
   */
  {
    name: 'vue',
    files: ['**/*.vue'],
    languageOptions: {
      parser: eslintVueParser,
      parserOptions: {
        parser: eslintTsParser,
        sourceType: 'module',
      },
    },
    rules: {
      ...eslintVuetify.overrides.at(0).rules,      
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
          selfClosingTag: {
            singleline: 'never',
            multiline: 'always',
          },
        },
      ],
      'vue/attribute-hyphenation': ['error',  'never', {
        ignore: [],
      }],    
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],    
      'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
      '@stylistic/indent': ['off'],
    },
  }
  // {
  //   name: 'TypeScript',
  //   files: [
  //     '**/*.ts',
  //     '**/*.tsx',
  //     '**/*.js',
  //     '**/*.jsx',
  //     '**/*.cjs',
  //     '**/*.mjs',
  //   ],
  //   languageOptions: {
  //     parser: typescriptEslintParser,
  //   },
  //   plugins: {
  //     '@stylistic': stylisticTs,
  //   },
  //   rules: {
  //     "@/computed-property-spacing": ["error", "always"],
  //     "@/arrow-spacing": ["error", { before: true, after: true }],
  //     "@/space-in-parens": ["error", "always", { exceptions: ["{}", "()"] }],
  //     "@/comma-spacing": ["error", { before: false, after: true }],
  //     "@/key-spacing": ["error", { beforeColon: false, afterColon: true }],
  //     indent: ["error", 2],
  //   },
  // },
)
