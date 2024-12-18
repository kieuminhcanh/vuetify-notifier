<template>
  <VDialog
    v-model="active"
    v-bind="dialogOptions"
    @after-leave="emit('close')"
  >
    <VCard>
      <VToolbar
        v-if="title"
        :title="title"
        :color="color"
      />
      <VCardText
        v-if="text"
        :class="{ [`text-${textAlign}`]: textAlign }"
      >
        {{ text }}
      </VCardText>
      <VDivider v-if="divider" />
      <VCardActions :class="{ [`justify-${buttonAlign}`]: buttonAlign }">
        <VBtn
          v-if="isConfirm"
          v-bind="{ text: t('$vuetify.confirmEdit.cancel'), ...closeButton }"
          @click="onClose"
        />
        <VBtn
          v-bind="{ text: t('$vuetify.confirmEdit.ok'), ...submitButton }"
          @click="onSubmit"
        />
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from 'vuetify'
import type { ConfirmOptions } from '../types'

defineOptions({ inheritAttrs: false })
const emit = defineEmits(['submit', 'close'])
const { t } = useLocale()

const active = ref(true)

const { options } = defineProps<ConfirmOptions>()

const { isConfirm, submitButton, closeButton, buttonAlign, textAlign, divider, ...dialogOptions } = options

function onSubmit() {
  active.value = false
  emit('submit')
}

function onClose() {
  active.value = false
}
</script>
