<template>
  <VRow>
    <VCol
      cols="8"
      class="d-flex align-center justify-center"
    >
      <pre>{{ toastCode }}</pre>
    </VCol>
    <VCol cols="4">
      <VCard title="Props">
        <VTextField
          :model-value="state.title"
          label="Title"
          @change="state.title = $event.target.value"
        />
        <VTextField
          :model-value="state.text"
          label="Text"
          @change="state.text = $event.target.value"
        />
        <VTextField
          :model-value="state.icon"
          label="Icon"
          @change="state.icon = $event.target.value"
        />
        <VSelect
          v-model="state.color"
          clearable
          :items="['primary', 'secondary', 'success', 'error', 'purple']"
          label="Color"
        />
        <VSelect
          v-model="state.type"
          clearable
          :items="['success', 'info', 'warning', 'error']"
          label="Type"
        />
      </VCard>
      <VCard title="Options">
        <VSelect
          v-model="notifier.config.toast.location"
          :items="['top', 'bottom', 'top left', 'top right', 'bottom left', 'bottom right']"
          label="Location"
        />

        <VSlider
          v-model.number="notifier.config.toast.max"
          label="Max items"
          min="1"
          max="10"
          step="1"
          thumb-label="always"
          class="mt-5"
        />
        <VSlider
          v-model.number="notifier.config.toast.timeout"
          label="Timeout"
          min="3000"
          max="10000"
          step="1000"
          thumb-label="always"
          class="mt-5"
        >
          <template #thumb-label="{ modelValue }">
            {{ modelValue / 1000 }}s
          </template>
        </VSlider>
        <VListItem
          title="Sequential Closing"
        >
          <template #append>
            <VSwitch
              v-model="notifier.config.toast.sequentialClosing"
              hide-details
            />
          </template>
        </VListItem>
        <VCardActions>
          <VBtn
            block
            :color="state.color"
            text="Show Toast"
            variant="outlined"
            @click="onOpenToast"
          />
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
</template>

<script lang="ts" setup>
const notifier = useNotifier()

const state = reactive(({
  title: undefined,
  text: 'This is toast content',
  icon: undefined,
  color: undefined,
  type: 'info',
  onClick: () => { },
  onClose: () => { },
}))

const sample = reactive({
  items: ['Hello there! 👋',
    'I am a Vuetify Toast!',
    'Integrated with Vuetify for seamless styling.',
    'I will appear sequentially, one after another.',
    'I will close automatically in 5 seconds...',
    '...unless you close me first! 😉',
    'Up to 5 toasts can be displayed at once.',
    'Click me to trigger an event!',
    'Closing me also triggers an event.',
    'Customize me with icons, actions, and more!',
  ],
  types: ['success', 'info', 'warning', 'error'],
  index: 0,
  edit: false,
})

watch(state, () => {
  onOpenToast()
})

function onOpenToast() {
  if (!sample.edit) {
    notifier.toast({ text: sample.items[sample.index++] })
    if (sample.index >= sample.items.length) sample.edit = true
  }
  else {
    notifier.toast(state)
  }
}

const toastCode = computed(() => {
  return `
const notifier = useNotifier()

notifier.toast(${useObjectToString(state)})`
})
</script>

<style lang="scss"></style>
