<template>
  <VCard title="Dialog">
    <VCardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </VCardText>

    <VCardActions>
      <VSpacer></VSpacer>

      <VBtn @click="onClose" text="Cancel"></VBtn>
      <VBtn @click="onSubmit" color="primary" text="Submit"></VBtn>
    </VCardActions>
  </VCard>
</template>

<script lang="ts" setup>
  const active = ref(true)
  const emit = defineEmits(['submit', 'cancel'])

  function onSubmit() {
    emit('submit', 'hello')
  }

  function onClose() {
    console.log('Cancel on component');
    
    emit('cancel')
  }
</script>

<style lang="scss"></style>
