<template>
  <VSnackbar v-model="active" v-bind="{ ...options, ...attrs }">

  </VSnackbar>

</template>

<script setup lang="ts">
  import { ref, useAttrs, type PropType } from 'vue'
  import type { ToastOptions } from '../types'

  defineOptions({ inheritAttrs: false })
  const emit = defineEmits(['submit', 'cancel'])
  const { options, ...attrs }: any = useAttrs()
  
  const active = ref(true)

  function onSubmit() {
    active.value = false
    emit('submit', 'hello')
  }

  function onClose() {
    active.value = false
    emit('cancel')
  }

</script>
