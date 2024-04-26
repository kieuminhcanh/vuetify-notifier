declare global {
  declare module '@vue/runtime-core' {      
    export interface App {
      $nuxt?: { hook: (name: string, fn: () => void) => void }
    }
  
    export interface VNode {
      ctx: ComponentInternalInstance | null
    }

    export interface ComponentInternalInstance {
      provides: any
    }
  }
}
