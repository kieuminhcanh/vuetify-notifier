<template>
  <VHover v-slot="{ isHovering, props }">
    <VSheet
      color="transparent"
      width="300"
      position="fixed"
      location="top right"
      class="d-flex flex-column"
      v-bind="props"
    >
      <VNoSsr>
        <VSlideXReverseTransition
          group
          leave-absolute
        >
          <NotifierAlert
            v-for="(item) in toasters"
            :key="item.notifierId"
            v-bind="{ item, isPause: isHovering, timeout: state.timeout }"
            class="mx-2 my-1"
            elevation="5"
          />
        </VSlideXReverseTransition>
      </VNoSsr>
    </VSheet>
  </VHover>
</template>

<script setup lang="ts">
import { computed, inject, reactive } from 'vue'
import useToast from '../composables/useToast'
import type { NotifierOptions } from '../types'
import NotifierAlert from './NotifierAlert.vue'

const { items } = useToast()

// @ts-expect-error This is use for runtime configuration
const options: NotifierOptions = inject('notifier') || useRuntimeConfig().public.notifier as NotifierOptions

const state = reactive({
  max: options.toast.max,
  timeout: options.toast.timeout,
})

const toasters = computed(() => items.value.slice(0, state.max))
</script>
