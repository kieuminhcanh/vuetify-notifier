<template>
  <VApp>
    <VAppBar title="Vuetify Notifier">
      <VBtn
        href="https://github.com/kieuminhcanh/vuetify-notifier"
        icon="mdi-github"
        target="_blank"
        variant="text"
      >
      </VBtn>
      <VBtn
        href="https://github.com/kieuminhcanh/vuetify-notifier/blob/master/src/App.vue"
        icon="mdi-code-tags"
        target="_blank"
        variant="text"
      >
        <VTooltip
          activator="parent"
          location="bottom"
        >
          Source Code
        </VTooltip>
      </VBtn>

      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VBtn
            v-bind="props"
            href="https://github.com/kieuminhcanh/vuetify-notifier"
            icon
            target="_blank"
          >
            <VIcon> mdi-github </VIcon>
          </VBtn>
        </template>
        <span>Github</span>
      </VTooltip>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VBtn
            v-bind="props"
            href="https://github.com/kieuminhcanh/vuetify-notifier/blob/master/src/App.vue"
            icon
            target="_blank"
          >
            <VIcon> mdi-code-tags </VIcon>
          </VBtn>
        </template>
        <span>Source Code</span>
      </VTooltip>
    </VAppBar>
    <VMain>
      <VContainer>
        <VRow>
          <VCol cols="12">
            <VCard title="Toast">
              <VCardText>
                <VListSubheader>Simple Toast</VListSubheader>
                <VRow>
                  <VCol
                    ><VBtn
                      prependIcon="mdi-bell-outline"
                      @click="notifierToast()"
                      >Default</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="success"
                      prependIcon="mdi-bell-outline"
                      @click="notifierToast('success')"
                      >Success</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="info"
                      prependIcon="mdi-bell-outline"
                      @click="notifierToast('info')"
                      >Into</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="warning"
                      prependIcon="mdi-bell-outline"
                      @click="notifierToast('warning')"
                      >Warning</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="error"
                      prependIcon="mdi-bell-outline"
                      @click="notifierToast('error')"
                      >Error</VBtn
                    ></VCol
                  >
                </VRow>
                <VListSubheader>Advanced Toast</VListSubheader>
                <VRow>
                  <VCol
                    ><VBtn
                      prependIcon="mdi-bell-plus"
                      @click="notifierToastWithTitle()"
                      >Default</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="success"
                      prependIcon="mdi-bell-plus"
                      @click="notifierToastWithTitle('success')"
                      >Success</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="info"
                      prependIcon="mdi-bell-plus"
                      @click="notifierToastWithTitle('info')"
                      >Into</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="warning"
                      prependIcon="mdi-bell-plus"
                      @click="notifierToastWithTitle('warning')"
                      >Warning</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="error"
                      prependIcon="mdi-bell-plus"
                      @click="notifierToastWithTitle('error')"
                      >Error</VBtn
                    ></VCol
                  >
                </VRow>
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12">
            <VCard title="Dialog">
              <VCardText>
                <VListSubheader>Confirm dialogs</VListSubheader>
                <VRow>
                  <VCol
                    ><VBtn
                      prependIcon="mdi-help-circle"
                      @click="notifierConfirm()"
                      >Default</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="success"
                      prependIcon="mdi-help-circle"
                      @click="notifierConfirm('success')"
                      >Success</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="info"
                      prependIcon="mdi-help-circle"
                      @click="notifierConfirm('info')"
                      >Into</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="warning"
                      prependIcon="mdi-help-circle"
                      @click="notifierConfirm('warning')"
                      >Warning</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="error"
                      prependIcon="mdi-help-circle"
                      @click="notifierConfirm('error')"
                      >Error</VBtn
                    ></VCol
                  >
                </VRow>
                <VListSubheader>Input dialogs</VListSubheader>
                <VRow>
                  <VCol
                    ><VBtn
                      prependIcon="mdi-account-edit"
                      @click="notifierPrompt()"
                      >Default</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="success"
                      prependIcon="mdi-account-edit"
                      @click="notifierPrompt('success')"
                      >Success</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="info"
                      prependIcon="mdi-account-edit"
                      @click="notifierPrompt('info')"
                      >Into</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="warning"
                      prependIcon="mdi-account-edit"
                      @click="notifierPrompt('warning')"
                      >Warning</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="error"
                      prependIcon="mdi-account-edit"
                      @click="notifierPrompt('error')"
                      >Error</VBtn
                    ></VCol
                  >
                </VRow>
                <VListSubheader>Alert Dialog</VListSubheader>
                <VRow>
                  <VCol
                    ><VBtn
                      prependIcon="mdi-alert-circle"
                      @click="notifierAlert()"
                      >Default</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="success"
                      prependIcon="mdi-alert-circle"
                      @click="notifierAlert('success')"
                      >Success</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="info"
                      prependIcon="mdi-alert-circle"
                      @click="notifierAlert('info')"
                      >Into</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="warning"
                      prependIcon="mdi-alert-circle"
                      @click="notifierAlert('warning')"
                      >Warning</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      color="error"
                      prependIcon="mdi-alert-circle"
                      @click="notifierAlert('error')"
                      >Error</VBtn
                    ></VCol
                  >
                </VRow>
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12">
            <VCard title="Component">
              <VCardText>
                <VListSubheader>Confirm dialogs</VListSubheader>
                <VRow>
                  <VCol
                    ><VBtn
                      prependIcon="mdi-flare"
                      @click="notifierComponentBasic()"
                      >Default</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      prependIcon="mdi-flare"
                      @click="notifierComponentAdvance()"
                      >Advance</VBtn
                    ></VCol
                  >
                  <VCol
                    ><VBtn
                      prependIcon="mdi-flare"
                      @click="notifierComponentGlobal()"
                      >Global component</VBtn
                    ></VCol
                  >
                </VRow>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VContainer>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
  import AdvanceComponent from './components/AdvanceComponent.vue'
  import BasicComponent from './components/BasicComponent.vue'
  import GlobalComponent from './components/GlobalComponent.vue'
  import { useNotifier } from './plugins/vuetify-notifier'

  const $notifier = useNotifier()

  const notifierConfirm = async (status?: string) => {
    $notifier.confirm({ text: 'Are you sure?' }, status)
  }

  const notifierAlert = async (status?: string) => {
    $notifier.alert(
      {
        title: 'Confirm',
        text: 'Are you sure?',
      },
      status
    )
  }

  const notifierPrompt = async (status?: string) => {
    const result = await $notifier.prompt('Are you sure?', status)
    console.log(result)
  }

  const notifierToast = async (status?: string) => {
    const result = await $notifier.toast('This is simple toast', status)
    console.log(result)
  }

  const notifierToastWithTitle = async (status?: string) => {
    $notifier.toast(
      {
        title: 'Title',
        text: 'This is simple toast',
      },
      status
    )
  }

  const notifierComponentBasic = async () => {
    $notifier.component(
      {
        title: 'Title component',
        component: BasicComponent,
      },
      {
        width: 500,
      }
    )
  }

  const notifierComponentAdvance = async () => {
    $notifier.component(AdvanceComponent, {
      dialogProps: {
        fullscreen: true,
      },
    })
  }
  const notifierComponentGlobal = async () => {
    $notifier.component(GlobalComponent, {
      width: 500,
    })
  }
</script>
