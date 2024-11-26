<template>
  <VMenu v-model="active" activator="parent" :close-on-content-click="false" v-bind="$attrs">
    <VSheet class="pa-4" min-width="300" :color="attrs.color">
      <VTextField :label="text" v-model="input" hide-details="auto" append-icon="$success" @click:append="onSubmit" />
    </VSheet>

  </VMenu>
</template>

<script setup lang="ts">
  import { ref, useAttrs } from 'vue'
  import { useLocale } from 'vuetify'
  const { t } = useLocale()

  const active = ref(false)
  const input = ref('')
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
    emit('submit', input.value)
    active.value = false
    input.value = ''
  }
</script>
