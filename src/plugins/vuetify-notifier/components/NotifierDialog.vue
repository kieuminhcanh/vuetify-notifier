<template>
  <VDefaultsProvider root>
    <VDialog
      v-model="show"
      persistent
      scrollable
      :transition="options?.transition"
      width="auto"
      v-bind="options.dialogProps"
    >
      <VForm
        validateOn="submit"
        @submit.prevent="onSubmit"
      >
        <VCard
          v-bind="options.cardProps"
          :minHeight="options?.minHeight"
          :minWidth="options?.minWidth"
        >
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
          <v-row
            align="center"
            class="px-10 py-7"
            dense
            :justify="options.textAlign"
          >
            <v-col
              class="text-center"
              cols="12"
            >
              {{ text }}
            </v-col>
            <v-col
              v-if="options.prompt"
              cols="12"
            >
              <VTextField
                v-model="input"
                v-bind="options.inputProps"
              />
            </v-col>
          </v-row>
          <VDivider v-if="options.showDivider" />
          <VCardActions>
            <VSpacer />
            <VBtn
              v-bind="options.secondaryButtonProps || options.buttonProps"
              @click="onCancel"
            >{{ options.secondaryButtonText }}</VBtn>
            <VBtn
              v-bind="options.primaryButtonProps || options.buttonProps"
              color="primary"
              type="submit"
              variant="tonal"
            >{{ options.primaryButtonText }}</VBtn>
          </VCardActions>
        </VCard>
      </VForm>
    </VDialog>
  </VDefaultsProvider>
</template>

<script setup lang="ts">
  import { NotifierDialogOptions } from '../types'  

  const props = defineProps({
    content: {
      type: [String, Object],
      required: true,
      default: 'Are you sure?',
    },
    options: {
      type: Object as PropType<NotifierDialogOptions>,
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
  const input = ref<string>('')

  const title = computed(() => (typeof props.content === 'object' ? props.content?.title : undefined))
  const text = computed(() => (typeof props.content === 'object' ? props.content?.text : props.content))

  const onSubmit = async (event: any) => {
    const { valid } = await event
    if (!valid) return

    show.value = false
    if (!props.options.prompt) {
      props.onSubmit(true)
    } else {
      props.onSubmit(input.value)
    }
  }

  const onCancel = () => {
    show.value = false
    props.onCancel()
  }
</script>
