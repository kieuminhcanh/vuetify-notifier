import { App, mergeProps } from 'vue'

export const getVAppRoot = () => document.body

export const createContainer = () => document.createElement('div')

export const mountComponent = ({ component, app, input }: NotifierMountComponent): Promise<ConfirmResult> => {
  const rootElement = getVAppRoot()
  const container = createContainer()

  console.log(input)

  return new Promise((resolve) => {
    const componentApp = createApp(
      component,
      mergeProps(
        input,
        { modelValue: true },
        {
          onSubmit(value: any) {
            resolve(value)
            onUnmounted(componentApp, rootElement, container)
          },
          onCancel(value: any) {
            resolve(value)
            onUnmounted(componentApp, rootElement, container)
          },
        }
      )
    )

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
