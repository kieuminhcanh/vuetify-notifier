<template>
  <VRow
    align="center"
    justify="center"
  >
    <VCol
      cols="12"
      md="8"
      class="d-flex justify-center"
    >
      <pre class="overflow-auto">{{ dialogCode }}</pre>
    </VCol>
    <VCol
      cols="12"
      md="4"
    >
      <VCard title="Props">
        <VTextField
          :model-value="dialogOptions.msg"
          label="Component prop"
          @change="dialogOptions.msg = $event.target.value"
        />
      </VCard>
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

const dialogCode = computed(() => `
//import { Test } from '#components' // Using Nuxt 
import { Test } from './components/Test.vue' // Using Vue 3


const notifier = useNotifier()

notifier.dialog(Test, ${useObjectToString(dialogOptions)})
`)
</script>

<style lang="scss">

</style>
