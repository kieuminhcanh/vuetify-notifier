<template>
  <VSnackbar
    v-model="active"
    v-bind="{ ...options, ...attrs }"
  />
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue'

defineOptions({ inheritAttrs: false })
// const emit = defineEmits(['submit', 'cancel'])
const { options, ...attrs }: any = useAttrs()

const active = ref(true)
</script>
