<template>
  <VBtn
    @click="notifier.alert({
      title: 'Alert',
      text: 'You dont have permission to do this action',
      color: 'warning',
      onSubmit: () => console.log('Submit'),
      options: {
        submitButton: {
          text: 'Savedsfds',
          prependIcon: 'mdi-content-save',
          variant: 'text',
        },
      },
    })"
  >
    Alert
  </VBtn>
  <VBtn
    @click="notifier.confirm({
      title: 'Confirm',
      text: 'This is test content for the alert dialog',
      color: 'primary',
      onSubmit: () => console.log('Submit'),
      onClose: () => console.log('close confirm'),
      options: {
        submitButton: {
          text: 'Save',
          prependIcon: 'mdi-content-save',
          variant: 'text',
        },
        closeButton: {
          text: 'Cancel dfsdf',
          prependIcon: 'mdi-close',
          variant: 'text',
        },
      },
    })"
  >
    Confirm
  </VBtn>
  <VBtn
    @click="notifier.toast({
      title: 'Confirm',
      text: 'This is test content for the alert dialog',
      color: 'primary',
      onClose: () => console.log('Close'),
      options: {

      },
    })"
  >
    Toast
  </VBtn>
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
const notifier = useNotifier()
</script>

<style lang="scss">

</style>
