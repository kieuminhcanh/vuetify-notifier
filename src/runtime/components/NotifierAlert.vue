<template>
  <VAlert
    v-bind="{ ...item, onClick }"
    elevation="5"
    :class="{ 'cursor-pointer': item?.onClick }"
  >
    <template #append>
      <VProgressCircular
        v-model="state.progress"
        :width="1"
      >
        <VBtn
          icon="$close"
          variant="tonal"
          density="compact"
          @click.stop="onClose"
        />
      </VProgressCircular>
    </template>
  </VAlert>
</template>

<script lang="ts" setup>
import { onUnmounted, reactive } from 'vue'
import { VAlert, VBtn, VProgressCircular } from 'vuetify/components'
import useToast from '../composables/useToast'
import type { ComponentProps, ToastOptions } from '../types'

const { isPause = false, item, timeout = 5000 } = defineProps<{
  item?: Partial<ToastOptions>
  isPause: boolean | null
  timeout: number
  options?: ComponentProps<typeof VAlert>
}>()
const state = reactive({
  progress: 0,
})

const { remove } = useToast()

const interval = setInterval(() => {
  if (!isPause) {
    state.progress += calculatePercentage(timeout, 1000)
    if (state.progress >= 100) {
      remove(item)
    }
  }
}, 1000)

function calculatePercentage(total: number, value: number) {
  return (value / total) * 100
}

function onClick() {
  if (item?.onClick) {
    item.onClick()
  }
  remove(item)
}

function onClose() {
  if (item?.onClose) {
    item.onClose()
  }
  remove(item)
}

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style lang="scss"></style>
