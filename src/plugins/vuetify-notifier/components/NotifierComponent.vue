<template>
  <VDefaultsProvider root>
    <VDialog
      v-model="show"
      persistent
      scrollable
      :width="!options.dialogProps?.fullscreen ? 'auto' : '100%'"
      :maxHeight='$vuetify.display.height'
      :maxWidth='$vuetify.display.width'
      v-bind="options.dialogProps"
    >
      <VCard
        v-if="title"
        :minWidth="options?.minWidth"
      >
        <VToolbar :title="title">
          <v-btn
            v-if="options.existsButton"
            icon
            variant="tonal"
            size='small'
            @click="onCancel"
          >
            X
          </v-btn>
        </VToolbar>
        <component
          :is="component"
          v-bind="componentProps"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
        />
      </VCard>
      <template v-else>
        <component
          :is="content"
          v-bind="componentProps"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
        />
        <v-btn
          v-if="options.existsButton"
          icon
          location="top right"
          position="fixed"
          variant="text"
          @click="onCancel"
        >
          <v-icon>{{ options.closeIcon }}</v-icon>
        </v-btn>
      </template>
    </VDialog>
  </VDefaultsProvider>
</template>

<script setup lang="ts">
  import { NotifierComponentOptions } from '../types'

  const props = defineProps({
    content: {
      type: [String, Object],
      required: true,
      default: 'Are you sure?',
    },
    options: {
      type: Object as PropType<NotifierComponentOptions>,
      required: true,
    },
    status: {
      type: String as PropType<'default' | 'success' | 'error' | 'warning' | 'info'>,
      required: true,
    },
    onSubmit: {
      type: Function,
      required: true,
    },
    onCancel: {
      type: Function,
      required: true,
    },
  })

  const show = ref(true)

  const title = computed(() => (typeof props.content === 'object' ? props.content?.title : undefined))
  const component = computed(() => (typeof props.content === 'object' ? props.content?.component : props.content))

  const componentProps = computed(() => {
    return {
      ...props.options.componentProps,
      onSubmit,
      onCancel,
    }
  })

  const onSubmit = async (value: any) => {
    show.value = false
    props.onSubmit(value)
  }

  const onCancel = (value: any) => {
    show.value = false
    props.onCancel(value)
  }
</script>
