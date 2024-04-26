<template>
  <VCard flat>
    <VCardText> Hello world </VCardText>
    <VCardActions>
      <VSpacer />
      <VBtn
        text="Cancel"
        @click="$emit('onSubmit', 'The value of cancel')"
      />
      <VBtn
        color="primary"
        text="Submit"
        @click="$emit('onSubmit', 'The value of submit')"
      />
    </VCardActions>
  </VCard>
</template>

<script setup lang="ts">
  defineEmits(['onSubmit'])
</script>
