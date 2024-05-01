import typescript from 'typescript-eslint'
import vuetify from './eslint-plugin-vuetify/index.js'

// import vue from '@vue/eslint-config-typescript/recommended'

export default typescript.config(
  ...typescript.configs.recommended,
  ...vuetify.configs.base,    
  {
    ignores: ['**/*.d.ts', '!node_modules/', '!node_modules/**/*', '!.git/', '!dist/', '!build/', '!public/'],
  }
)
