<template>
  <div class="vuetify-notifier-toast">
    <VDefaultsProvider>
      <VSnackbar v-model="show" :color="status === 'default' ? options.defaultColor : status"
        @update:modelValue="onCancel" v-bind="options.toastProps">
        <div class="font-weight-bold mb-2" v-if="title">{{ title }}</div>
        <p>{{ text }}</p>
        <template #actions>
          <VBtn :icon="options.closeIcon" size="x-small" variant="tonal" @click="onCancel" />
        </template>
      </VSnackbar>
    </VDefaultsProvider>
  </div>
</template>

<script setup lang="ts">

import { PropType, computed, ref } from "vue";
import { NotifierToastOptions } from "../types";

const props = defineProps({
  content: {
    type: [String, Object],
    required: true,
    default: 'Are you sure?',
  },
  options: {
    type: Object as PropType<NotifierToastOptions>,
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

const title = computed(() => typeof props.content === 'object' ? props.content?.title : undefined);
const text = computed(() => typeof props.content === 'object' ? props.content?.text : props.content);


// const onSubmit = async () => {
//   show.value = false;
//   props.onSubmit(true);
// }

const onCancel = () => {
  show.value = false;
  props.onCancel();
}


</script>

