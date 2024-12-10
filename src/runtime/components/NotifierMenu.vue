<template>
  <VMenu
    v-model="active"
    activator="parent"
    :close-on-content-click="false"
    v-bind="$attrs"
  >
    <VSheet
      class="py-4"
      min-width="300"
      :color="color"
    >
      <VListItem
        :title="title"
        :subtitle="text"
      >
        <template #append>
          <VListItemAction>
            <VBtn
              icon="$success"
              variant="text"
              density="compact"
              @click="onSubmit"
            />
          </VListItemAction>
        </template>
      </VListItem>
    </VSheet>
  </VMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(false)
const emit = defineEmits(['submit', 'cancel'])

defineProps({
  title: String,
  text: String,
  color: String,
  isConfirm: {
    type: Boolean,
    default: false,
  },
})

function onSubmit() {
  active.value = false
  emit('submit')
}
</script>
