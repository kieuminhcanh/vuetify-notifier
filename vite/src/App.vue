<template>
  <VApp>
    <VMain>
      <VContainer class="d-flex flex-column ga-4">
        <VCard>
          <VTabs
            v-model="tab"
            bg-color="primary"
          >
            <VTab value="toast">
              toast
            </VTab>
            <VTab value="alert">
              alert
            </VTab>
            <VTab value="confirm">
              confirm
            </VTab>
            <VTab value="input">
              input
            </VTab>
            <VTab value="dialog">
              dialog
            </VTab>
          </VTabs>

          <VCardText>
            <VTabsWindow v-model="tab">
              <VTabsWindowItem value="toast">
                <VRow
                  align="center"
                  justify="center"
                >
                  <VCol
                    cols="8"
                    class="d-flex justify-center"
                  >
                    <pre>
                      {{ toastCode }}
                    </pre>
                  </VCol>
                  <VCol cols="4">
                    <VCard title="Props">
                      <VTextField
                        :model-value="toastOptions.title"
                        label="Title"
                        @change="toastOptions.title = $event.target.value"
                      />
                      <VTextField
                        :model-value="toastOptions.text"
                        label="Text"
                        @change="toastOptions.text = $event.target.value"
                      />
                      <VTextField
                        :model-value="toastOptions.icon"
                        label="Icon"
                        @change="toastOptions.icon = $event.target.value"
                      />
                      <VSelect
                        v-model="toastOptions.color"
                        clearable
                        :items="['primary', 'secondary', 'success', 'error', 'purple']"
                        label="Color"
                      />
                      <VSelect
                        v-model="toastOptions.type"
                        clearable
                        :items="['success', 'info', 'warning', 'error']"
                        label="Type"
                      />
                    </VCard>
                    <VCard title="Options">
                      <VSelect
                        v-model="toastOptions.options.location"
                        :items="['top', 'bottom', 'top left', 'top right', 'bottom left', 'bottom right']"
                        label="Location"
                      />

                      <VSlider
                        v-model.number="toastOptions.options.timeout"
                        label="Timeout"
                        min="3000"
                        max="30000"
                        step="1000"
                        thumb-label="always"
                        class="mt-5"
                      >
                        <template #thumb-label="{ modelValue }">
                          {{ modelValue/1000 }}s
                        </template>
                      </VSlider>
                      <VCardActions>
                        <VBtn
                          block
                          :color="toastOptions.color"
                          text="Show Toast"
                          variant="outlined"
                          @click="onOpenToast"
                        />
                      </VCardActions>
                    </VCard>
                  </VCol>
                </VRow>
              </VTabsWindowItem>

              <VTabsWindowItem value="alert">
                <VRow
                  align="center"
                  justify="center"
                >
                  <VCol
                    cols="8"
                    class="d-flex justify-center"
                  >
                    <pre>
        {{ alertCode }}
      </pre>
                  </VCol>
                  <VCol cols="4">
                    <VCard title="Props">
                      <VTextField
                        :model-value="alertOptions.title"
                        label="Title"
                        @change="alertOptions.title = $event.target.value"
                      />
                      <VTextField
                        :model-value="alertOptions.text"
                        label="Text"
                        @change="alertOptions.text = $event.target.value"
                      />
                      <VTextField
                        :model-value="alertOptions.options.width"
                        label="Width"
                        @change="alertOptions.options.width = $event.target.value"
                      />
                      <VSelect
                        v-model="alertOptions.options.textAlign"
                        :items="['left', 'center', 'right']"
                        label="Text Align"
                      />
                      <VSelect
                        v-model="alertOptions.options.buttonAlign"
                        :items="['start', 'center', 'end']"
                        label="Buttons Align"
                      />
                      <VSelect
                        v-model="alertOptions.color"
                        :items="['primary', 'secondary', 'success', 'error', 'purple']"
                        label="Color"
                      />
                      <VSwitch
                        v-model="alertOptions.options.divider"
                        label="Divider"
                      />
                      <VSwitch
                        v-model="alertOptions.options.persistent"
                        label="Persistent"
                      />
                      <VCardActions>
                        <VBtn
                          block
                          text="Alert"
                          variant="outlined"
                          @click="onOpenAlert"
                        />
                      </VCardActions>
                    </VCard>
                  </VCol>
                </VRow>
              </VTabsWindowItem>

              <VTabsWindowItem value="confirm">
                <VRow
                  align="center"
                  justify="center"
                >
                  <VCol
                    cols="8"
                    class="d-flex justify-center"
                  >
                    <pre>
        {{ confirmCode }}
      </pre>
                  </VCol>
                  <VCol cols="4">
                    <VCard title="Props">
                      <VTextField
                        :model-value="confirmOptions.title"
                        label="Title"
                        @change="confirmOptions.title = $event.target.value"
                      />
                      <VTextField
                        :model-value="confirmOptions.text"
                        label="Text"
                        @change="confirmOptions.text = $event.target.value"
                      />
                      <VTextField
                        :model-value="confirmOptions.options.width"
                        label="Width"
                        @change="confirmOptions.options.width = $event.target.value"
                      />
                      <VSelect
                        v-model="confirmOptions.options.textAlign"
                        :items="['left', 'center', 'right']"
                        label="Text Align"
                      />
                      <VSelect
                        v-model="confirmOptions.options.buttonAlign"
                        :items="['start', 'center', 'end']"
                        label="Buttons Align"
                      />
                      <VSelect
                        v-model="confirmOptions.color"
                        :items="['primary', 'secondary', 'success', 'error', 'purple']"
                        label="Color"
                      />
                      <VSwitch
                        v-model="confirmOptions.options.divider"
                        label="Divider"
                      />
                      <VSwitch
                        v-model="confirmOptions.options.persistent"
                        label="Persistent"
                      />
                      <VCardActions>
                        <VBtn
                          block
                          text="Confirm"
                          variant="outlined"
                          @click="onOpenConfirm"
                        />
                      </VCardActions>
                    </VCard>
                  </VCol>
                </VRow>
              </VTabsWindowItem>

              <VTabsWindowItem value="input">
                <VRow
                  align="center"
                  justify="center"
                >
                  <VCol cols="4">
                    <VBtn
                      v-notifier-confirm="{
                        ...confirmDirectyOptions,
                        onSubmit() {
                          console.log('Submit')
                        },
                      }"
                      text="Quick confirm"
                      variant="outlined"
                    />
                    <pre>
        {{ confirmDirectyCode }}
      </pre>
                  </VCol>
                  <VCol cols="4">
                    <VBtn
                      v-notifier-input="{
                        ...confirmDirectyOptions,
                        onSubmit(data: any) {
                          console.log('Submit', data)
                        },
                      }"
                      text="Input Inline"
                      variant="outlined"
                    />
                    <pre>
        {{ inputDirectyCode }}
      </pre>
                  </VCol>
                  <VCol cols="4">
                    <VCard title="Props">
                      <VTextField
                        :model-value="confirmDirectyOptions.title"
                        label="Title"
                        @change="confirmDirectyOptions.title = $event.target.value"
                      />
                      <VTextField
                        :model-value="confirmDirectyOptions.text"
                        label="Text"
                        @change="confirmDirectyOptions.text = $event.target.value"
                      />
                      <VSelect
                        v-model="confirmDirectyOptions.color"
                        :items="['primary', 'secondary', 'success', 'error', 'purple']"
                        label="Color"
                      />
                    </VCard>
                  </VCol>
                </VRow>
              </VTabsWindowItem>
              <VTabsWindowItem value="dialog">
                <VRow
                  align="center"
                  justify="center"
                >
                  <VCol
                    cols="8"
                    class="d-flex justify-center"
                  >
                    <pre>
        {{ dialogCode }}
      </pre>
                  </VCol>
                  <VCol cols="4">
                    <VCard title="Props">
                      <VTextField
                        :model-value="dialogOptions.msg"
                        label="Component prop"
                        @change="dialogOptions.msg = $event.target.value"
                      />
                    </VCard>
                    <VCard title="Options">
                      <VTextField
                        :model-value="dialogOptions.options.title"
                        label="Title"
                        @change="dialogOptions.options.title = $event.target.value"
                      />
                      <VTextField
                        :model-value="dialogOptions.options.width"
                        label="Width"
                        @change="dialogOptions.options.width = $event.target.value"
                      />
                      <VBtn
                        block
                        text="Component"
                        variant="outlined"
                        @click="onOpenDialog"
                      />
                    </VCard>
                  </VCol>
                </VRow>
              </VTabsWindowItem>
            </VTabsWindow>
          </VCardText>
        </VCard>
      </VContainer>
      <VNotifierContainer />
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useNotifier } from 'vuetify-notifier'
import Test from './components/HelloWorld.vue'

const tab = ref('toast')

const notifier = useNotifier()

const dialogOptions = reactive(({
  msg: 'World',
  options: {
    title: '',
    width: 500,
  },
}))

function onOpenDialog() {
  notifier.dialog(Test, {
    ...dialogOptions,
    onSubmit(data: any) {
      console.log('Submit', data)
    },
    onClose() {
      console.log('Cancel')
    },
  })
}

const dialogCode = computed(() => `
//import { Test } from '#components' // Using Nuxt 
import { Test } from './components/Test.vue' // Using Vue 3


const notifier = useNotifier()

notifier.dialog(Test, {
  msg: ${dialogOptions.msg},
  options: {
    title: ${dialogOptions.options.title},
    width: ${dialogOptions.options.width},
  },
  onSubmit(data) {
    console.log('Submit', data)
  },
  onClose() {
    console.log('Cancel')
  },
})
`)

const toastOptions = reactive(({
  title: '',
  text: 'This is toast content',
  icon: undefined,
  color: undefined,
  type: undefined,
  options: {
    location: 'top right',
    timeout: 5000,
  },
}))

watch(toastOptions, () => {
  onOpenToast()
})

function onOpenToast() {
  notifier.toast(toastOptions)
}

const toastCode = computed(() => `
const notifier = useNotifier()

notifier.toast({  
  ${toastOptions.title ? `title: '${toastOptions.title}',` : ''}
  text: '${toastOptions.text}',
  ${toastOptions.icon ? `icon: '${toastOptions.icon}',` : ''}
  ${toastOptions.color ? `color: '${toastOptions.color}',` : ''}
  ${toastOptions.type ? `type: '${toastOptions.type}',` : ''}
  options: {
    location: '${toastOptions.options.location}',
    timeout: ${toastOptions.options.timeout},
  },
})`)

const confirmOptions = reactive(({
  title: 'Are you sure?',
  text: 'Do you want to continue?',
  color: 'primary',
  options: {
    divider: true,
    textAlign: undefined,
    buttonAlign: undefined,
    persistent: false,
    width: 400,
  },
}))

watch(confirmOptions, () => {
  onOpenConfirm()
})

function onOpenConfirm() {
  notifier.confirm({
    ...confirmOptions,
    onSubmit: (data: any) => {
      console.log('Submit', data)
    },
    onClose: () => console.log('Cancel'),
  })
}

const confirmCode = computed(() => `
const notifier = useNotifier()

notifier.confirm({  
  title: '${confirmOptions.text}',
  text: '${confirmOptions.text}',
  color: '${confirmOptions.color}',
  onSubmit(data) {
    console.log('Submit', data)
  },
  onClose() {
    console.log('Cancel')
  },
})`)

const alertOptions = reactive(({
  title: 'Are you sure?',
  text: 'Do you want to continue?',
  color: 'primary',
  options: {
    divider: true,
    textAlign: undefined,
    buttonAlign: undefined,
    persistent: false,
    width: 400,
  },
}))

watch(alertOptions, () => {
  onOpenAlert()
})

const alertCode = computed(() => `
const notifier = useNotifier()

notifier.alert({  
  title: '${alertOptions.text}',
  text: '${alertOptions.text}',
  color: '${alertOptions.color}',  
  onSubmit(data) {
    console.log('Submit', data)
  },  
})`)

function onOpenAlert() {
  notifier.alert({
    ...alertOptions,
    onSubmit: (data: any) => console.log('Submit', data),
  })
}

const confirmDirectyOptions = reactive(({
  title: 'Are you sure?',
  text: 'Do you want to continue?',
  color: 'primary',
}))

const confirmDirectyCode = computed(() => `
<VBtn
  v-notifier-confirm="{
    title: '${confirmDirectyOptions.title}',
    text: '${confirmDirectyOptions.text}',
    color: '${confirmDirectyOptions.color}',
    onSubmit() {
      console.log('Submit')
    },
  }"
  text="Quick confirm"
  variant="outlined"
/>
`)

const inputDirectyCode = computed(() => `
<VBtn
  v-notifier-input="{
    title: '${confirmDirectyOptions.title}',
    text: '${confirmDirectyOptions.text}',
    color: '${confirmDirectyOptions.color}',
    onSubmit(data: any) {
      console.log('Submit', data)
    },
  }"
  text="Input Inline"
  variant="outlined"
/>
`)
</script>
