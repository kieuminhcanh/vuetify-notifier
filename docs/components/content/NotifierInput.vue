<template>
  <VRow
    align="center"
    justify="center"
  >
    <VCol
      cols="12"
      md="6"
    >
      <VBtn
        v-notifier-confirm="{
          ...confirmDirectyOptions,
          onSubmit() {
            console.log('Submit')
          },
        }"
        text="Quick confirm"
        variant="outlined"
      />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <VBtn
        v-notifier-input="{
          ...inputDirectyOptions,
          onSubmit(data: any) {
            console.log('Submit', data)
          },
        }"
        text="Input Inline"
        variant="outlined"
      />
    </VCol>
  </VRow>
</template>

<script lang="ts" setup>
const confirmDirectyOptions = reactive(({
  title: 'Are you sure?',
  text: 'Do you want to continue?',
  color: 'primary',
  onSubmit: () => {},
  onClose: () => {},
}))

const inputDirectyOptions = reactive(({
  label: 'Name?',
  placeholder: 'Enter your name?',
  onSubmit: () => {},
  onClose: () => {},
}))
</script>

<style lang="scss">

</style>
