<template>
  <VMenu
    v-model="active"
    activator="parent"
    :close-on-content-click="false"
  >
    <VSheet
      class="py-2"
      :color="color"
    >
      <VListItem v-bind="itemOptions">
        <template #append>
          <VBtn
            v-bind="options?.submitButton || quick.submitButton"
            @click="onSubmit"
          />
        </template>
      </VListItem>
    </VSheet>
  </VMenu>
</template>

<script setup lang="ts">
import { defu } from 'defu'
import { inject, ref } from 'vue'

import { VBtn, VListItem, VMenu, VSheet } from 'vuetify/components'
import type { ComponentProps, NotifierOptions } from '../types'

defineOptions({
  inheritAttrs: false,
})

const active = ref(false)
const emit = defineEmits(['submit', 'close'])

const { quick } = inject('notifier') as NotifierOptions

const { options, text, ...listItemOptions } = defineProps<{
  title?: string
  text: string
  color?: string
  options?: {
    confirmOptions: Omit< ComponentProps<typeof VListItem>, 'title' | 'text' | 'color'>
    submitButton?: ComponentProps<typeof VBtn>
  }
}>()

const itemOptions = defu({ subtitle: text }, listItemOptions, options?.confirmOptions, quick.confirm)

function onSubmit() {
  active.value = false
  emit('submit')
}
</script>
