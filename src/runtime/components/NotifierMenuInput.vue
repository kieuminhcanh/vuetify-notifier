<template>
  <VMenu
    v-model="active"
    activator="parent"
    :close-on-content-click="false"
  >
    <VSheet
      class="pa-4"
      :color="color"
    >
      <VTextField
        v-model="input"
        v-bind="itemOptions"
        hide-details="auto"
      >
        <template #append>
          <VBtn
            v-bind="options?.submitButton || quick.submitButton"
            @click="onSubmit"
          />
        </template>
      </VTextField>
    </VSheet>
  </VMenu>
</template>

<script setup lang="ts">
import { defu } from 'defu'
import { inject, ref } from 'vue'
import type { VBtn, VTextField } from 'vuetify/components'
import type { ComponentProps, NotifierOptions } from '../types'

defineOptions({
  inheritAttrs: false,
})

const active = ref(false)
const input = ref('')
const emit = defineEmits(['submit', 'cancel'])

const { quick } = inject('notifier') as NotifierOptions

const { options, color, ...item } = defineProps<{
  label?: string
  placeholder?: string
  color?: string
  options?: {
    inputOptions?: Omit<ComponentProps<typeof VTextField>, 'label' | 'placeholder'>
    submitButton?: ComponentProps<typeof VBtn>
  }
}>()

const itemOptions = defu(item, options?.inputOptions, quick.input)
console.log(itemOptions)

function onSubmit() {
  emit('submit', input.value)
  active.value = false
  input.value = ''
}
</script>
