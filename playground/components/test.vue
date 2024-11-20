<template>
  <VDialog max-width="500" v-model="active">
    <VCard title="Dialog">
      <VCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </VCardText>

      <VCardActions>
        <VSpacer></VSpacer>

        <VBtn @click="onCancel" text="Cancel"></VBtn>
        <VBtn @click="onSubmit" color="primary" text="Submit"></VBtn>
      </VCardActions>
    </VCard>

  </VDialog>

</template>

<script lang="ts" setup>
  const active = ref(true)
  const emit = defineEmits(['submit', 'cancel'])

  function onSubmit() {
    active.value = false
    emit('submit', 'hello')
  }

  function onCancel() {
    active.value = false
    emit('cancel')
  }
</script>

<style lang="scss"></style>
