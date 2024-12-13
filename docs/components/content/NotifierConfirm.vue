<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Props">
        <VTextField
          :model-value="confirmOptions.title"
          label="Title"
          @change="confirmOptions.title = $event.target.value"
        />
        <VTextField
          :model-value="confirmOptions.text"
          label="Text"
          @change="confirmOptions.text = $event.target.value"
        />
        <VSelect
          v-model="confirmOptions.color"
          :items="['primary', 'secondary', 'success', 'error', 'purple']"
          label="Color"
        />
      </VCard>
    </VCol>
    <VCol
      cols="6"
      md="6"
    >
      <VCard title="Props">
        <VTextField
          :model-value="confirmOptions.options.width"
          label="Width"
          @change="confirmOptions.options.width = $event.target.value"
        />
        <VSelect
          v-model="confirmOptions.options.textAlign"
          :items="['left', 'center', 'right']"
          label="Text Align"
        />
        <VSelect
          v-model="confirmOptions.options.buttonAlign"
          :items="['start', 'center', 'end']"
          label="Buttons Align"
        />
        <VSelect
          v-model="confirmOptions.color"
          :items="['primary', 'secondary', 'success', 'error', 'purple']"
          label="Color"
        />
        <VListItem title="Divider">
          <template #append>
            <VSwitch
              v-model="confirmOptions.options.divider"
              hide-details
            />
          </template>
        </VListItem>
        <VListItem title="Persistent">
          <template #append>
            <VSwitch
              v-model="confirmOptions.options.persistent"
              hide-details
            />
          </template>
        </VListItem>
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCardActions>
        <VBtn
          block
          text="Show Confirm"
          variant="outlined"
          @click="onOpenConfirm"
        />
      </VCardActions>
    </VCol>
  </VRow>
</template>

<script lang="ts" setup>
const notifier = useNotifier()

const confirmOptions = reactive(({
  title: 'Are you sure?',
  text: 'Do you want to continue?',
  color: 'primary',
  onSubmit: () => {},
  onClose: () => {},
  options: {
    divider: true,
    textAlign: undefined,
    buttonAlign: undefined,
    persistent: false,
    width: 400,
  },
}))

watch(confirmOptions, () => {
  onOpenConfirm()
})

function onOpenConfirm() {
  notifier.confirm({
    ...confirmOptions,
    onSubmit: (data: any) => {
      console.log('Submit', data)
    },
    onClose: () => console.log('Cancel'),
  })
}

const confirmCode = computed(() => `
const notifier = useNotifier()

notifier.confirm(${useObjectToString(confirmOptions)})`)
</script>

<style lang="scss">

</style>
