<template>
  <div class="vuetify-notifier">
    <VDefaultsProvider>
      <VDialog v-model="show" persistent :transition="options?.transition" :width="options?.width" scrollable
        v-bind="options.dialogProps">
        <VForm validate-on="submit" @submit.prevent="onSubmit">
          <VCard v-bind="options.cardProps" :min-width="options?.minWidth" :min-height="options?.minHeight">
            <VToolbar v-if="title" :title="title" density="compact"
              :color="status === 'default' ? options.defaultColor : status">
              <VIcon :icon="options[`${status}Icon`]" class="mr-2"></VIcon>
            </VToolbar>
            <VCardText>
              <v-row align="center" :justify="options.textAlign" class="h-100">
                <v-col cols="12" class="text-center">
                  {{ text }}
                </v-col>
                <v-col cols="12" v-if="options.prompt">
                  <VTextField v-model="input" v-bind="options.inputProps" />
                </v-col>
              </v-row>
            </VCardText>
            <VDivider v-if="options.showDivider" />
            <VCardActions>
              <VSpacer />
              <VBtn v-bind="options.secondaryButtonProps || options.buttonProps" @click="onCancel">{{
                options.secondaryButtonText }}</VBtn>
              <VBtn variant="tonal" v-bind="options.primaryButtonProps || options.buttonProps" color="primary"
                type="submit">{{ options.primaryButtonText }}</VBtn>
            </VCardActions>
          </VCard>
        </VForm>
      </VDialog>
    </VDefaultsProvider>
  </div>
</template>

<script setup lang="ts">
import deepmerge from "deepmerge";
import { defaultOptions } from "../utils/options";

import { NotifierDialogOptions } from "../types";
import { PropType, computed, ref } from "vue";

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
});

const show = ref(true);
const input = ref<string>('');


const title = computed(() => typeof props.content === 'object' ? props.content?.title : undefined);
const text = computed(() => typeof props.content === 'object' ? props.content?.text : props.content);


const onSubmit = async (event: any) => {
  const { valid } = await event
  if (!valid) return


  show.value = false;
  if (!props.options.prompt) {
    props.onSubmit(true);
  } else {
    props.onSubmit(input.value);
  }
}

const onCancel = () => {
  show.value = false;
  props.onCancel();
}


</script>

