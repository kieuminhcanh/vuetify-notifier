import { ref } from 'vue'
import type { Notifier } from '../types'

const items = ref<(Notifier & { icon?: string, notifierId?: number })[]>([
  { notifierId: new Date().getTime(), title: 'Hello', text: 'World', icon: 'mdi-account', color: 'success' },
])
export default function useToast() {
  const add = (item: Notifier) => {
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
