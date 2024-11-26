<template>
  <VDialog v-model="active" v-bind="attrs">
    <VCard>
      <VToolbar v-if="title" :title="title" :color="attrs.color" />
      <VCardText v-if="text" :class="{ [`text-${attrs.textAlign}`]: attrs.textAlign }">{{ text }}</VCardText>
      <VDivider v-if="attrs.divider" />
      <VCardActions :class="{ [`justify-${attrs.buttonAlign}`]: attrs.buttonAlign }">
        <VBtn v-if="isConfirm" @click="onCancel" :text="t('$vuetify.confirmEdit.cancel')" />
        <VBtn @click="onSubmit" :color="attrs.submitButton?.color" :text="t('$vuetify.confirmEdit.ok')" />
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
  import { ref, useAttrs } from 'vue'
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
    color?: string
  }> = useAttrs()

  defineProps({
    title: String,
    text: String,
    isConfirm: {
      type: Boolean,
      default: true
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
