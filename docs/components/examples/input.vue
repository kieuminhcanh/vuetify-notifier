<template>
  <VRow
    align="center"
    justify="center"
  >
    <VCol
      cols="12"
      md="4"
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
      <pre class="overflow-auto">
        {{ confirmDirectyCode }}
      </pre>
    </VCol>
    <VCol
      cols="12"
      md="4"
    >
      <VBtn
        v-notifier-input="{
          ...confirmDirectyOptions,
          onSubmit(data: any) {
            console.log('Submit', data)
          },
        }"
        text="Input Inline"
        variant="outlined"
      />
      <pre class="overflow-auto">
        {{ inputDirectyCode }}
      </pre>
    </VCol>
    <VCol
      cols="12"
      md="4"
    >
      <VCard title="Props">
        <VTextField
          :model-value="confirmDirectyOptions.title"
          label="Title"
          @change="confirmDirectyOptions.title = $event.target.value"
        />
        <VTextField
          :model-value="confirmDirectyOptions.text"
          label="Text"
          @change="confirmDirectyOptions.text = $event.target.value"
        />
        <VSelect
          v-model="confirmDirectyOptions.color"
          :items="['primary', 'secondary', 'success', 'error', 'purple']"
          label="Color"
        />
      </VCard>
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

const confirmDirectyCode = computed(() => `
<VBtn
  v-notifier-confirm="${useObjectToString(confirmDirectyOptions)}"
  text="Quick confirm"
  variant="outlined"
/>
`)

const inputDirectyCode = computed(() => `
<VBtn
  v-notifier-input="${useObjectToString(confirmDirectyOptions)}"
  text="Input Inline"
  variant="outlined"
/>
`)
</script>

<style lang="scss">

</style>
