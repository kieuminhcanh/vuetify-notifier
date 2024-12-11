<template>
  <VHover v-slot="{ isHovering, props }">
    <VSheet
      color="transparent"
      :width="state.toast.width"
      position="fixed"
      :location="state.toast.location"
      class="d-flex flex-column ga-2 ma-2"
      style="z-index: 99999;"
      v-bind="props"
    >
      <VNoSsr>
        <component
          :is="transitionComponent"
          group
          leave-absolute
        >
          <NotifierAlert
            v-for="(item) in toasters"
            :key="item.notifierId"
            v-bind="{ item, isPause: isHovering, timeout: state.toast.timeout }"
            elevation="5"
          />
        </component>
      </VNoSsr>
    </VSheet>
  </VHover>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { VSlideXReverseTransition, VSlideXTransition, VSlideYReverseTransition, VSlideYTransition } from 'vuetify/components/transitions'
import useToast from '../composables/useToast'
import type { NotifierOptions } from '../types'
import NotifierAlert from './NotifierAlert.vue'

const { items } = useToast()

const state = inject('notifier') as NotifierOptions

const toasters = computed(() => items.value.slice(0, state.toast.max))

const transitionComponent = computed(() => {
  switch (state.toast.location) {
    case 'top':
      return VSlideYTransition
    case 'bottom':
      return VSlideYReverseTransition
    case 'top left':
    case 'bottom left':
      return VSlideXTransition
    default:
      return VSlideXReverseTransition
  }
})
</script>
