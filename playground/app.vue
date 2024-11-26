<template>
  <VApp>
    <VMain>
      <VContainer class="d-flex flex-column ga-4">
        <VExpansionPanels :model-value="[4]">
          <VExpansionPanel title="Dialog">
            <VExpansionPanelText>
              <VRow>
                <VCol cols="8" align-self="center" class="text-center">
                  <VBtn @click="onOpenDialog" text="Component" variant="outlined" />
                </VCol>
                <VCol cols="4">
                  <VCard title="Props">

                  </VCard>
                </VCol>
              </VRow>
            </VExpansionPanelText>
          </VExpansionPanel>

          <VExpansionPanel title="Toast">
            <VExpansionPanelText>
              <VRow>
                <VCol cols="8" align-self="center" class="text-center">
                  <VBtn @click="onOpenToast" text="Toast" variant="outlined" />
                </VCol>
                <VCol cols="4">
                  <VCard title="Props">
                    <VTextField :model-value="toastOptions.text" @change="toastOptions.text = $event.target.value"
                      label="Text" />
                    <VSelect v-model="toastOptions.location"
                      :items="['top left', 'top right', 'bottom left', 'bottom right']" label="Location" />
                    <VSelect v-model="toastOptions.color"
                      :items="['primary', 'secondary', 'success', 'error', 'purple']" label="Color" />
                  </VCard>
                </VCol>
              </VRow>
            </VExpansionPanelText>
          </VExpansionPanel>

          <VExpansionPanel title="Confirm">
            <VExpansionPanelText>
              <VRow>
                <VCol cols="8" align-self="center" class="text-center">
                  <VBtn @click="onOpenConfirm" text="Confirm" variant="outlined" />
                </VCol>
                <VCol cols="4">
                  <VCard title="Props">
                    <VTextField :model-value="confirmOptions.title" @change="confirmOptions.title = $event.target.value"
                      label="Title" />
                    <VTextField :model-value="confirmOptions.text" @change="confirmOptions.text = $event.target.value"
                      label="Text" />
                    <VTextField :model-value="confirmOptions.width" @change="confirmOptions.width = $event.target.value"
                      label="Width" />
                    <VSelect v-model="confirmOptions.textAlign" :items="['left', 'center', 'right']"
                      label="Text Align" />
                    <VSelect v-model="confirmOptions.buttonAlign" :items="['start', 'center', 'end']"
                      label="Buttons Align" />
                    <VSelect v-model="confirmOptions.color"
                      :items="['primary', 'secondary', 'success', 'error', 'purple']" label="Color" />
                    <VSwitch v-model="confirmOptions.divider" label="Divider" />
                    <VSwitch v-model="confirmOptions.persistent" label="Persistent" />
                  </VCard>
                </VCol>
              </VRow>
            </VExpansionPanelText>
          </VExpansionPanel>

          <VExpansionPanel title="Alert">
            <VExpansionPanelText>
              <VRow>
                <VCol cols="8" align-self="center" class="text-center">
                  <VBtn @click="onOpenAlert" text="Alert" variant="outlined" />
                </VCol>
                <VCol cols="4">
                  <VCard title="Props">
                    <VTextField :model-value="alertOptions.title" @change="alertOptions.title = $event.target.value"
                      label="Title" />
                    <VTextField :model-value="alertOptions.text" @change="alertOptions.text = $event.target.value"
                      label="Text" />
                    <VTextField :model-value="alertOptions.width" @change="alertOptions.width = $event.target.value"
                      label="Width" />
                    <VSelect v-model="alertOptions.textAlign" :items="['left', 'center', 'right']" label="Text Align" />
                    <VSelect v-model="alertOptions.buttonAlign" :items="['start', 'center', 'end']"
                      label="Buttons Align" />
                    <VSelect v-model="alertOptions.color"
                      :items="['primary', 'secondary', 'success', 'error', 'purple']" label="Color" />
                    <VSwitch v-model="alertOptions.divider" label="Divider" />
                    <VSwitch v-model="alertOptions.persistent" label="Persistent" />
                  </VCard>
                </VCol>
              </VRow>
            </VExpansionPanelText>
          </VExpansionPanel>
          <VExpansionPanel title="Input">
            <VExpansionPanelText>
              <VRow>
                <VCol cols="8" align-self="center" class="d-flex justify-center ga-4">
                  <VBtn v-notifier-confirm="{
                    ...confirmDirectyOptions,
                    onSubmit() {
                      console.log('Submit')
                    },
                  }" text="Quick confirm" variant="outlined" />

                  <VBtn v-notifier-input="{
                    ...confirmDirectyOptions,
                    onSubmit(data: any) {
                      console.log('Submit', data)
                    },
                  }" text="Input Inline" variant="outlined" />
                </VCol>
                <VCol cols="4">
                  <VCard title="Props">
                    <VTextField :model-value="confirmDirectyOptions.title"
                      @change="confirmDirectyOptions.title = $event.target.value" label="Title" />
                    <VTextField :model-value="confirmDirectyOptions.text"
                      @change="confirmDirectyOptions.text = $event.target.value" label="Text" />
                    <VSelect v-model="confirmDirectyOptions.color"
                      :items="['primary', 'secondary', 'success', 'error', 'purple']" label="Color" />
                  </VCard>
                </VCol>
              </VRow>
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VContainer>
      <VNotifierContainer />
    </VMain>
  </VApp>
</template>

<script setup lang="ts">

  import { Test } from "#components"

  const notifier = useNotifier()

  function onOpenDialog() {
    notifier.dialog(Test, {
      onSubmit(data: any) {
        console.log('Submit', data)
      },
      onCancel() {
        console.log('Cancel',)
      },
    })
  }


  const toastOptions = reactive(({
    text: 'Hello World',
    location: 'top right',
    color: 'success',
    contained: true,
  }))

  watch(toastOptions, (value) => {
    onOpenToast()
  })

  function onOpenToast() {
    notifier.toast(toastOptions)
  }

  const confirmOptions = reactive(({
    title: 'Are you sure?',
    text: 'Do you want to continue?',
    divider: true,
    textAlign: undefined,
    buttonAlign: undefined,
    persistent: false,
    color: undefined,
    width: 400,
  }))

  watch(confirmOptions, (value) => {
    onOpenConfirm()
  })

  function onOpenConfirm() {
    notifier.confirm({
      ...confirmOptions,
      onSubmit: (data) => console.log('Submit', data),
      onCancel: () => console.log('Cancel')
    })
  }

  const alertOptions = reactive(({
    title: 'Are you sure?',
    text: 'Do you want to continue?',
    divider: true,
    textAlign: undefined,
    buttonAlign: undefined,
    persistent: false,
    color: undefined,
    width: 400,
  }))

  watch(alertOptions, (value) => {
    onOpenAlert()
  })

  const confirmDirectyOptions = reactive(({
    title: 'Are you sure?',
    text: 'Do you want to continue?',
    color: undefined
  }))

  function onOpenAlert() {
    notifier.alert({
      ...alertOptions,
      onSubmit: (data) => console.log('Submit', data),
    })
  }
</script>
