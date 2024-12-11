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
  type: undefined,
}))

watch(state, () => {
  onOpenToast()
})

function onOpenToast() {
  notifier.toast(state)
}

const toastCode = computed(() => {
  return `
const notifier = useNotifier()

notifier.toast(${useObjectToString(state)})`
})
</script>

<style lang="scss"></style>
