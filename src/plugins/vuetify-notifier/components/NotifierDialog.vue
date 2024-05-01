<template>
  <VDefaultsProvider root>
    <VDialog
      v-model="show"
      v-bind="options"      
      :width="options.fullscreen ? '100%' : 'auto'"
      activator="parent"
    >
      <VForm
        validate-on="submit"
        @submit.prevent="onSubmitClick"
      >
        <VCard v-bind="options?.contentOptions">
          <VToolbar
            v-if="title"
            :color="status === 'default' ? options.defaultColor : status"
            density="compact"
            :title="title"
          >
            <VIcon
              class="mr-2"
              :icon="options[`${status}Icon`]"
            />
          </VToolbar>
          <VCardText>
            {{ text }}
          </VCardText>
          <VCardItem v-if="options.showInput">
            <VTextField
              
              v-model="input"
              :label="options.inputOptions?.label"
            />
          </VCardItem>

          <VCardActions>
            <VSpacer />
            <VBtn
              v-if="!options.hideCancel"
              v-bind="options?.secondaryButtonProps || options?.buttonProps"
              :text="options.secondaryButtonText"
              @click="onCancelClick"
            />
            <VBtn
              :color="status || 'primary'"
              type="submit"
              :text="options.primaryButtonText"
            />
          </VCardActions>
        </VCard>
      </VForm>
    </VDialog>
  </VDefaultsProvider>
</template>

<script setup lang="ts">
  defineOptions({ inheritAttrs: false })

  const props = defineProps({
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    status: {
      type: String,
      default: 'default',
    },
    onSubmit: {
      type: Function,
      default: undefined,
    },
    onCancel: {
      type: Function,
      default: undefined,
    },
  })

  const show = defineModel({ default: false, type: Boolean })

  const input = ref('')

  function onSubmitClick() {
    show.value = false
    if (props.onSubmit) {
      props.onSubmit(props.options.showInput ? input.value : true)
    }
  }

  function onCancelClick() {
    show.value = false
    if (props.onCancel) {
      props.onCancel()
    }
  }
</script>
