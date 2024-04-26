<template>
  <VDefaultsProvider root>
    <v-menu
      activator="parent"
      v-bind="$attrs"
    >
      <v-list>
        <v-list-item :title="text">
          <template #append>
            <VListItemAction>
              <v-btn
                v-if="$props.onSubmit"
                :color="status"
                @click="onSubmit"              
              >
                Yes
              </v-btn>
              <v-btn
                v-if="$props.onCancel"
                color="grey"
                @click="onCancel"
              >
                No
              </v-btn>
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
    onSubmit: {
      type: Function,
      default: undefined,
    },
    onCancel: {
      type: Function,
      default: undefined,
    },
  })
  const show = ref(true)

  defineOptions({inheritAttrs: false})

  const onSubmit = async () => {
    show.value = false
    if (props.onSubmit) {      
      props.onSubmit(true)
    }
  }

  const onCancel = () => {
    show.value = false
    if (props.onCancel) {      
      props.onCancel()
    }
  }
</script>
