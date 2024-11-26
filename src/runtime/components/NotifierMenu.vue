<template>
  <VMenu v-model="active" activator="parent" :close-on-content-click="false" v-bind="$attrs">
    <VSheet class="py-4" min-width="300" :color="attrs.color">
      <VListItem :title="title" :subtitle="text">
        <template #append>
          <VListItemAction>
            <VBtn icon="$success" variant="text" @click="onSubmit" density="compact" />
          </VListItemAction>
        </template>
      </VListItem>
    </VSheet>
  </VMenu>
</template>

<script setup lang="ts">
  import { ref, useAttrs } from 'vue'
  import { useLocale } from 'vuetify'
  const { t } = useLocale()

  const active = ref(false)
  const emit = defineEmits(['submit', 'cancel'])

  const attrs: Partial<{
    title: string,
    text: string,
    color: string,
  }> = useAttrs()



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
