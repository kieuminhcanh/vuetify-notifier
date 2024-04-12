import { App, createApp } from 'vue'
import type { ConfirmResult, NotifierDialogOptions, NotifierMountComponent } from '../types'

export const getVAppRoot = () => {
  return document.body  
}
export const createContainer = () => document.createElement('div')

export const mountComponent = ({ component, app, content, status = 'default', options }: NotifierMountComponent): Promise<ConfirmResult> => {
  const rootElement = getVAppRoot()
  const container = createContainer()

  return new Promise((resolve, reject) => {
    const componentApp = createApp(component, {
      content,
      status,
      options,
      onSubmit: (value: any) => {
        resolve(value)
        onUnmounted(componentApp, rootElement, container)
      },
      onCancel: (value: any) => {
        switch ((options as NotifierDialogOptions)?.handleCancel) {
          case 'resolve':
            resolve(value)
            break
          case 'reject':
            reject(value)
            break
        }
        onUnmounted(componentApp, rootElement, container)
      },
    })

    Object.assign(componentApp._context, app._context)

    rootElement.appendChild(container)
    componentApp.mount(container)
  })
}

const onUnmounted = (componentApp: App, rootElement: Element, container: HTMLDivElement) => {
  setTimeout(() => {
    componentApp.unmount()
    rootElement.removeChild(container)
  }, 500)
}
