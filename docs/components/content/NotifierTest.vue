<template>
  <VBtn
    v-notifier-confirm="{
      title: 'Test',
      text: 'This is test content for the confirm dialog',
      color: 'primary',
      options: {
        submitButton: {
          text: 'Save',
          prependIcon: 'mdi-content-save',
          variant: 'text',
        },
      },
    }"
    text="Quick confirm"
  />
  <VBtn
    v-notifier-input="{
      placeholder: 'Enter your name',
      label: 'Name',
    }"
    text="Quick Input"
  />
</template>

<script lang="ts" setup>
</script>

<style lang="scss">

</style>
