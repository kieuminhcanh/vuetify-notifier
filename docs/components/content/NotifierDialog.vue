<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Component Props">
        <VTextField
          :model-value="dialogOptions.msg"
          label="Component prop"
          @change="dialogOptions.msg = $event.target.value"
        />
      </VCard>
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Options">
        <VTextField
          :model-value="dialogOptions.options.title"
          label="Title"
          @change="dialogOptions.options.title = $event.target.value"
        />
        <VTextField
          :model-value="dialogOptions.options.width"
          label="Width"
          @change="dialogOptions.options.width = $event.target.value"
        />
        <VBtn
          block
          text="Component"
          variant="outlined"
          @click="onOpenDialog"
        />
      </VCard>
    </VCol>
  </VRow>
</template>

<script lang="ts" setup>
import { Test } from '#components'

const notifier = useNotifier()

const dialogOptions = reactive(({
  msg: 'World',
  onSubmit: () => {},
  onClose: () => {},
  options: {
    title: '',
    width: 500,
  },
}))

function onOpenDialog() {
  notifier.dialog(Test, {
    ...dialogOptions,
    onSubmit(data: any) {
      console.log('Submit', data)
    },
    onClose() {
      console.log('Cancel')
    },
  })
}
</script>

<style lang="scss">

</style>
