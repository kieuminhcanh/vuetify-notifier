<template>
  <VCard title="Component title">
    <VCardText>Component text</VCardText>
    <VCardText>Hello: {{ msg }}</VCardText>

    <VCardActions>
      <VSpacer />
      <VBtn
        text="Cancel"
        @click="onClose"
      />
      <VBtn
        color="primary"
        text="Submit"
        @click="onSubmit"
      />
    </VCardActions>
  </VCard>
</template>

<script lang="ts" setup>
defineProps({
  msg: String,
})

const emit = defineEmits(['submit', 'cancel'])

function onSubmit() {
  emit('submit', 'hello')
}

function onClose() {
  console.log('Cancel on component')

  emit('cancel')
}
</script>

<style lang="scss"></style>
