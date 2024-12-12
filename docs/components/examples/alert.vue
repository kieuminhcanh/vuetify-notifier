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
      <pre class="overflow-auto">{{ alertCode }}</pre>
    </VCol>
    <VCol
      cols="12"
      md="4"
    >
      <VCard title="Props">
        <VTextField
          :model-value="alertOptions.title"
          label="Title"
          @change="alertOptions.title = $event.target.value"
        />
        <VTextField
          :model-value="alertOptions.text"
          label="Text"
          @change="alertOptions.text = $event.target.value"
        />
        <VTextField
          :model-value="alertOptions.options.width"
          label="Width"
          @change="alertOptions.options.width = $event.target.value"
        />
        <VSelect
          v-model="alertOptions.options.textAlign"
          :items="['left', 'center', 'right']"
          label="Text Align"
        />
        <VSelect
          v-model="alertOptions.options.buttonAlign"
          :items="['start', 'center', 'end']"
          label="Buttons Align"
        />
        <VSelect
          v-model="alertOptions.color"
          :items="['primary', 'secondary', 'success', 'error', 'purple']"
          label="Color"
        />
        <VSwitch
          v-model="alertOptions.options.divider"
          label="Divider"
        />
        <VSwitch
          v-model="alertOptions.options.persistent"
          label="Persistent"
        />
        <VCardActions>
          <VBtn
            block
            text="Alert"
            variant="outlined"
            @click="onOpenAlert"
          />
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
</template>

<script lang="ts" setup>
const notifier = useNotifier()

const alertOptions = reactive(({
  title: 'Are you sure?',
  text: 'Do you want to continue?',
  color: 'primary',
  onSubmit: () => {},
  options: {
    divider: true,
    textAlign: undefined,
    buttonAlign: undefined,
    persistent: false,
    width: 400,
  },
}))

watch(alertOptions, () => {
  onOpenAlert()
})

const alertCode = computed(() => `
const notifier = useNotifier()

notifier.alert(${useObjectToString(alertOptions)})`)

function onOpenAlert() {
  notifier.alert({
    ...alertOptions,
    onSubmit: (data: any) => console.log('Submit', data),
  })
}
</script>

<style lang="scss">

</style>
