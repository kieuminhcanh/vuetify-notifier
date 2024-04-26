import typescript from 'typescript-eslint'
import vuetify from 'eslint-plugin-vuetify/src/index.js'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import typescriptParser from '@typescript-eslint/parser'
// import vue from '@vue/eslint-config-typescript/recommended'

export default typescript.config(
  ...typescript.configs.recommended,
  vuetify.configs.recommended,
  {
    name: 'vue',
    files: ['**/*.vue'],
    plugins: {
      vue: vue,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,        
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    ignores: ['**/*.d.ts', '!node_modules/', '!node_modules/**/*', '!.git/', '!dist/', '!build/', '!public/'],
  }
)
