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
                <VRow>
                  <VCol
                    cols="8"
                    align-self="center"
                    class="text-center"
                  >
                    <VBtn
                      text="Toast"
                      variant="outlined"
                      @click="onOpenToast"
                    />
                  </VCol>
                  <VCol cols="4">
                    <VCard title="Props">
                      <VTextField
                        :model-value="toastOptions.text"
                        label="Text"
                        @change="toastOptions.text = $event.target.value"
                      />
                      <VSelect
                        v-model="toastOptions.options.location"
                        :items="['top', 'bottom', 'top left', 'top right', 'bottom left', 'bottom right']"
                        label="Location"
                      />
                      <VSelect
                        v-model="toastOptions.options.color"
                        clearable
                        :items="['primary', 'secondary', 'success', 'error', 'purple']"
                        label="Color"
                      />
                    </VCard>
                  </VCol>
                </VRow>
              </VTabsWindowItem>

              <VTabsWindowItem value="alert">
                <VRow>
                  <VCol
                    cols="8"
                    align-self="center"
                    class="text-center"
                  >
                    <VBtn
                      text="Alert"
                      variant="outlined"
                      @click="onOpenAlert"
                    />
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
                    </VCard>
                  </VCol>
                </VRow>
              </VTabsWindowItem>

              <VTabsWindowItem value="confirm">
                <VRow>
                  <VCol
                    cols="8"
                    align-self="center"
                    class="text-center"
                  >
                    <VBtn
                      text="Confirm"
                      variant="outlined"
                      @click="onOpenConfirm"
                    />
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
                    </VCard>
                  </VCol>
                </VRow>
              </VTabsWindowItem>
              <VTabsWindowItem value="input">
                <VRow>
                  <VCol
                    cols="8"
                    align-self="center"
                    class="d-flex justify-center ga-4"
                  >
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
                <VRow>
                  <VCol
                    cols="8"
                    align-self="center"
                    class="text-center"
                  >
                    <VBtn
                      text="Component"
                      variant="outlined"
                      @click="onOpenDialog"
                    />
                  </VCol>
                  <VCol cols="4">
                    <VCard title="Props" />
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
import { Test } from '#components'

const tab = ref('toast')

const notifier = useNotifier()

function onOpenDialog() {
  notifier.dialog(Test, {
    options: {
      title: 'Test Dialog',
      width: 500,
    },
    onSubmit(data) {
      console.log('Submit', data)
    },
    onClose() {
      console.log('Cancel')
    },
  })
}

const toastOptions = reactive(({
  title: 'Toast',
  text: 'Hello World',
  options: {
    location: 'top right',
    color: 'primary',
  },
}))

watch(toastOptions, () => {
  onOpenToast()
})

function onOpenToast() {
  notifier.toast(toastOptions)
}

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
    onSubmit: (data) => {
      console.log('Submit', data)
    },
    onClose: () => console.log('Cancel'),
  })
}

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
</script>
