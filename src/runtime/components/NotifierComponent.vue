<template>
  <VDialog v-model="active" v-bind="attrs">
    <VSheet>
      <VToolbar v-if="title" :title="title">
        <v-btn icon="$close" @click="onCancel" />
      </VToolbar>
      <component :is="attrs.component" v-if="attrs.component" @submit="onSubmit" @cancel="onCancel" />
    </VSheet>
  </VDialog>
</template>

<script setup lang="ts">
  import { ref, useAttrs, type Component } from 'vue'
  import { useLocale } from 'vuetify'
  import type { VDialog } from "vuetify/components"
  const { t } = useLocale()

  const active = ref(true)
  const emit = defineEmits(['submit', 'cancel'])

  defineOptions({
    inheritAttrs: false
  })

  const attrs: Partial<{
    width?: string
    title?: string
    text?: string
    isConfirm?: boolean
    persistent: boolean
    submitButton?: {
      color: string
    },
    textAlign?: string,
    buttonAlign?: string,
    divider?: boolean,
    color?: string,
    component: Component
  }> = useAttrs()

  defineProps({
    title: String,
    text: String,
    isConfirm: {
      type: Boolean,
      default: true
    }
  })

  function onSubmit(data: any) {
    active.value = false
    emit('submit', data)
  }

  function onCancel() {
    active.value = false
    emit('cancel')
  }
</script>
