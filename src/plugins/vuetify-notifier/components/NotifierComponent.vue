<template>
  <VDefaultsProvider root>
    <VDialog
      v-model="show"
      v-bind="options"      
      activator="parent"
    >
      <VCard :title="title">
        <component
          :is="component"
          @on-cancel="onCancelClick"
          @on-submit="onSubmitClick"
        />
        <v-btn
          v-if="!options.hideExistsButton"
          icon
          location="top right"
          position="fixed"
          :style="{ top: '5px', right: '10px' }"
          variant="text"
          @click="onCancelClick"
        >
          <v-icon>{{ options.closeIcon }}</v-icon>
        </v-btn>
      </VCard>
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
    component: {
      type: [String, Object],
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

  function onSubmitClick() {
    show.value = false
    if (props.onSubmit) {
      props.onSubmit(true)
    }
  }

  function onCancelClick() {
    show.value = false
    if (props.onCancel) {
      props.onCancel()
    }
  }
</script>
