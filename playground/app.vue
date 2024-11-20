<template>
  <VApp>
    <VMain>
      <VContainer>
        <VRow>
          <VCol>
            <VCard title="Component" class="text-center">
              <VCardText>
                <VRow class="ga-4">
                  <VBtn @click="onOpenDialog" text="Component" />
                  <VBtn @click="onOpenToast" text="Toast" />
                  <VBtn @click="onOpenConfirm" text="Confirm" />
                  <VBtn @click="onOpenAlert" text="Alert" />
                  <VBtn v-notifier-confirm="{
                    title: 'Confirm Inline',
                    text: 'Hello World',
                    onSubmit() {
                      console.log('Submit')
                    },
                  }" text="Confirm Inline" />
                  <VBtn v-notifier-input="{
                    text: 'Hello World',
                    onSubmit(data: any) {
                      console.log('Submit', data)
                    },
                  }" text="Input Inline" />
                </VRow>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
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

  function onOpenToast() {
    notifier.toast({
      text: 'Hello World',
    })
  }

  function onOpenConfirm() {
    notifier.confirm({
      title: 'Confirm',
      text: 'Hello World',
      onSubmit() {
        console.log('Submit')
      },
    })
  }

  function onOpenAlert() {
    notifier.alert({
      title: 'Confirm',
      text: 'Hello World',
      onSubmit() {
        console.log('OK')
      },
    })
  }
</script>
