<template>
  <VDialog
    v-model="active"
    v-bind="options"
  >
    <VSheet>
      <VToolbar
        v-if="options?.title"
        :title="options?.title"
      >
        <v-btn
          icon="$close"
          @click="onClose"
        />
      </VToolbar>
      <component
        :is="component"
        v-if="component"
        v-bind="attrs"
        @submit="onSubmit"
        @cancel="onClose"
      />
    </VSheet>
  </VDialog>
</template>

<script setup lang="ts">
import { ref, useAttrs, type Component, type PropType } from 'vue'

defineOptions({ inheritAttrs: false })
const emit = defineEmits(['submit', 'cancel'])

const active = ref(true)

const { options, ...attrs }: any = useAttrs()

defineProps({
  component: {
    type: Object as PropType<Component>,
    required: true,
  },
})

function onSubmit(data: any) {
  active.value = false
  emit('submit', data)
}

function onClose() {
  active.value = false
  emit('cancel')
}
</script>
