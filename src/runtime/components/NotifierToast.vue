<template>
  <VAlert
    v-bind="{ ...item, ...itemProps }"
    elevation="5"
    :class="{ 'cursor-pointer': item?.onClick }"
    @click.stop="onClick"
  >
    <template #append>
      <VProgressCircular
        v-model="state.progress"
        :width="1"
      >
        <VBtn
          v-bind="closeButton"
          @click.stop="onClose"
        />
      </VProgressCircular>
    </template>
  </VAlert>
</template>

<script lang="ts" setup>
import { defu } from 'defu'
import { onUnmounted, reactive } from 'vue'
import { VAlert, VBtn, VProgressCircular } from 'vuetify/components'
import { defaults } from '../../options'
import useToast from '../composables/useToast'
import type { ToastItemOptions } from '../types'

const { options, ...item } = defineProps<ToastItemOptions>()

const { isPause, timeout, closeButton, ...itemProps } = defu(options, defaults.toast)

const state = reactive({
  progress: 0,
})

const { remove } = useToast()

const interval = setInterval(() => {
  if (!isPause && timeout) {
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
