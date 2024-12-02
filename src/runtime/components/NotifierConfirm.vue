<template>
  <VDialog v-model="active" v-bind="options">
    <VCard>
      <VToolbar v-if="title" :title="title" :color="color" />
      <VCardText v-if="text" :class="{ [`text-${options?.textAlign}`]: options?.textAlign }">{{ text }}</VCardText>
      <VDivider v-if="options?.divider" />
      <VCardActions :class="{ [`justify-${options?.buttonAlign}`]: options?.buttonAlign }">
        <VBtn v-if="isConfirm" @click="onClose" :text="t('$vuetify.confirmEdit.cancel')" />
        <VBtn @click="onSubmit" :text="t('$vuetify.confirmEdit.ok')" />
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
  import { ref, useAttrs, type PropType } from 'vue'
  import { useLocale } from 'vuetify'
  import type { ConfirmOptions } from '../types'
  const { t } = useLocale()

  defineOptions({ inheritAttrs: false })
  const emit = defineEmits(['submit', 'cancel'])
  
  const active = ref(true)

  defineProps({
    title: String,
    text: String,
    color: String,
    options: {
      type: Object as PropType<Record<string, any>>,
    },
    isConfirm: {
      type: Boolean,
      default: true
    }
  })

  function onSubmit() {
    active.value = false
    emit('submit')
  }

  function onClose() {
    active.value = false
    emit('cancel')
  }
</script>
