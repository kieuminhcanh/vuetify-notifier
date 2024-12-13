<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
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
      </VCard>
    </VCol>
    <VCol>
      <VCard title="Options">
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
        <VListItem title="Divider">
          <template #append>
            <VSwitch
              v-model="alertOptions.options.divider"
              hide-details
            />
          </template>
        </VListItem>
        <VListItem title="Persistent">
          <template #append>
            <VSwitch
              v-model="alertOptions.options.persistent"
              hide-details
            />
          </template>
        </VListItem>
      </VCard>
    </VCol>
    <VCol cols="12">
      <VBtn
        block
        text="Show Alert"
        variant="outlined"
        @click="onOpenAlert"
      />
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

function onOpenAlert() {
  notifier.alert({
    ...alertOptions,
    onSubmit: (data: any) => console.log('Submit', data),
  })
}
</script>

<style lang="scss">

</style>
