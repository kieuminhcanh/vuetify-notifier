<template>
  <div class="vuetify-notifier">
    <VDefaultsProvider>
      <VDialog v-model="show" persistent scrollable
        v-bind="options.dialogProps">
        <VCard v-if="title">
          <VToolbar :title="title">
            <v-btn v-if="options.existsButton" icon @click="onCancel" variant="text">
              <v-icon>{{ options.closeIcon }}</v-icon>
            </v-btn>
          </VToolbar>
          <component :is="component" v-bind="componentProps" @onSubmit="onSubmit" @onCancel="onCancel" />
        </VCard>
        <template v-else>
          <component :is="content" v-bind="componentProps" @onSubmit="onSubmit" @onCancel="onCancel" />
          <v-btn v-if="options.existsButton" position="fixed" location="top right" icon @click="onCancel" variant="text">
            <v-icon>{{ options.closeIcon }}</v-icon>
          </v-btn>
        </template>
      </VDialog>
    </VDefaultsProvider>
  </div>
</template>

<script setup lang="ts">
import { NotifierComponentOptions, NotifierDialogOptions } from "../types";
import { PropType, computed, ref } from "vue";

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
});

const show = ref(true);
const input = ref<string>('');

const title = computed(() => typeof props.content === 'object' ? props.content?.title : undefined);
const component = computed(() => typeof props.content === 'object' ? props.content?.component : props.content);

const componentProps = computed(() => {
  return {
    ...props.options.componentProps,
    onSubmit,
    onCancel,
  };
});

const onSubmit = async (value: any) => {
  show.value = false;
  props.onSubmit(value);

}

const onCancel = (value: any) => {
  show.value = false;
  props.onCancel(value);
}


</script>

