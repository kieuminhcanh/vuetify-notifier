<template>
  <VMenu v-model="active" activator="parent" :close-on-content-click="false">
    <VCard min-width="300">
      <VCardItem>
        <VTextField :label="text" v-model="input"
        hide-details="auto" append-icon="$success" @click:append="onSubmit">
        </VTextField>
      </VCardItem>
    </VCard>

  </VMenu>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useLocale } from 'vuetify'
  const { t } = useLocale()

  const active = ref(false)
  const input = ref('')
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
    emit('submit', input.value)
    active.value = false
    input.value = ''
  }
</script>
