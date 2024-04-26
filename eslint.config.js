import typescript from 'typescript-eslint'
import vuetify from 'eslint-plugin-vuetify/src/index.js'
import vue from 'eslint-plugin-vue'

export default typescript.config(
  ...typescript.configs.recommended,
  ...vue.configs['flat/recommended'],
  vuetify.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    ignores: ['**/*.d.ts', '!node_modules/','!node_modules/**/*' ,'!.git/', '!dist/', '!build/', '!public/'],
  }
)
