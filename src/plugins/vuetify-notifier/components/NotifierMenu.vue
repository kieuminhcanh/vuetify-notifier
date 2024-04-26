<template>
  <VDefaultsProvider root>
    <v-menu
      activator="parent"
      v-bind="options"      
      :close-on-content-click="!options.showInput"
      v-model="show"
    >
      <v-list>
        <v-list-item lines="one">
          <VListItemTitle v-if="!options.showInput">{{text}}</VListItemTitle>
          <VListItemTitle v-else><VTextField variant="solo-filled" clearable v-model="input" hideDetails :label="text"/></VListItemTitle>
          <template #append>
            <VListItemAction>
              <v-btn
                v-if="$props.onSubmit"
                :color="status"
                @click="onSubmit"                              
                icon="$success"
                variant="text"                
              />
                
              <v-btn
                v-if="$props.onCancel"
                color="grey"
                @click="onCancel"
                icon="$close"
              />
            </VListItemAction>
          </template>
        </v-list-item>        
      </v-list>
    </v-menu>
  </VDefaultsProvider>
</template>

<script setup lang="ts">
  const props = defineProps({
    text: {
      type: String,
      default: 'Are you sure?',
    },
    status: {
      type: String,
      default: 'default',
    },
    options: {
      type: Object,
      default: () => ({}),
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

  const show = ref(false)
  const input = ref('')

  defineOptions({inheritAttrs: false})

  watch( show, () => input.value = '')

  const onSubmit = async () => {
    show.value = false
    if (props.onSubmit) {      
      !props.options.showInput ? props.onSubmit(true) : props.onSubmit(input.value)
    }
  }

  const onCancel = () => {
    show.value = false
    if (props.onCancel) {      
      props.onCancel()
    }
  }
</script>
