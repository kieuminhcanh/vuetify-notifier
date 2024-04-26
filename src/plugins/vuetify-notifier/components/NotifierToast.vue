<template>
  <VLayout>
    <VDefaultsProvider root>
      <VSnackbar        
        v-bind="options"        
        v-model="show"
        :color="status"
        timeout="10000"
      >
        <div
          v-if="title"
          class="font-weight-bold mb-2"
        >
          {{ title }}
        </div>
        <p>{{ text }}</p>
        <template #actions>
          <VBtn
            v-if="!options.hideSubmit"
            icon            
            @click="onSubmitClick"
          >
            <VIcon>{{ options.successIcon }}</VIcon>
          </VBtn>

          <VBtn
            icon
            @click="onCancelClick"
          >
            <VIcon :icon="options.closeIcon" />
          </VBtn>
        </template>
      </VSnackbar>
    </VDefaultsProvider>
  </VLayout>
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

  const show = defineModel({ default: false, type: Boolean})


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
