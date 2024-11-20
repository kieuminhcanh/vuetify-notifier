<template>
  <VMenu v-model="active" activator="parent" :close-on-content-click="false">
    <VList min-width="300">
      <VListItem :title="title" :subtitle="text">
        <template #append>
          <VListItemAction>
            <VBtn icon="$success" variant="text" @click="onSubmit" density="compact" />
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useLocale } from 'vuetify'
  const { t } = useLocale()

  const active = ref(false)
  const emit = defineEmits(['submit', 'cancel'])

  defineProps({
    title: String,
    text: String,
    isConfirm: {
      type: Boolean,
      default: false
    }
  })

  function onSubmit() {
    active.value = false
    emit('submit')
  }

  function onCancel() {
    active.value = false
    emit('cancel')
  }

</script>
