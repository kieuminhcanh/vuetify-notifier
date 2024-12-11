import { ref } from 'vue'
import type { ToastOptions } from '../types'

const items = ref<(Partial<ToastOptions> & { icon?: string, notifierId?: number })[]>([])
export default function useToast() {
  const add = (item: Partial<ToastOptions>) => {
    items.value.push({ ...item, notifierId: new Date().getTime() })
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
