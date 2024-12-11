<template>
  <VAlert
    v-bind="item"
    elevation="5"
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
          @click.stop="remove(item)"
        />
      </VProgressCircular>
    </template>
  </VAlert>
</template>

<script lang="ts" setup>
import { onUnmounted, reactive } from 'vue'
import useToast from '../composables/useToast'
import type { Notifier } from '../types'

const { isPause = false, item, timeout = 5000 } = defineProps<{
  item: Notifier
  isPause: boolean | null
  timeout: number
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

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style lang="scss"></style>
