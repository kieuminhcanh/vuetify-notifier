<template>
  <VDialog max-width="500" v-model="active">
    <VCard>
      <VToolbar v-if="title" :title="title" />

      <VCardText v-if="text">{{ text }}</VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn v-if="isConfirm" @click="onCancel" :text="t('$vuetify.confirmEdit.cancel')" />
        <VBtn @click="onSubmit" :text="t('$vuetify.confirmEdit.ok')" />
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useLocale } from 'vuetify'
  const { t } = useLocale()

  const active = ref(true)
  const emit = defineEmits(['submit', 'cancel'])

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
