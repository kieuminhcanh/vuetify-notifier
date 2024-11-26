<template>
  <VSnackbar v-model="active" v-bind="$attrs">

  </VSnackbar>

</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const active = ref(true)
  const emit = defineEmits(['submit', 'cancel'])

  function onSubmit() {
    active.value = false
    emit('submit', 'hello')
  }

  function onCancel() {
    active.value = false
    emit('cancel')
  }

</script>
