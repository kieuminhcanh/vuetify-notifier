import { ref } from 'vue'
import type { ToastItemOptions, ToastOptions } from '../types'

const items = ref<(Partial<ToastItemOptions>)[]>([])
export default function useToast() {
  const add = (item: ToastOptions) => {
    items.value.push({ notifierId: new Date().getTime(), ...item })
  }
  const remove = (item?: any) => {
    if (!item) return
    const index = items.value.findIndex(i => i.notifierId === item.notifierId)
    items.value.splice(index, 1)
  }

  return {
    items,
    add,
    remove,
  }
}
