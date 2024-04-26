<template>
  <VApp>
    <VAppBar title="Vuetify Notifier">
      <VBtn
        href="https://github.com/kieuminhcanh/vuetify-notifier"
        icon="mdi-github"
        target="_blank"
        variant="text"
      />
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
                <VRow>
                  <VCol v-for="status in items">
                    <VBtn
                      prependIcon="mdi-bell-outline"
                      @click="notifierToast(status)"
                      text="Default"
                      :color="status"
                    />
                  </VCol>
                </VRow>
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12">
            <VCard title="Dialog">
              <VCardText>
                <VListSubheader>Confirm dialogs</VListSubheader>
                <VRow>
                  <VCol v-for="status in items">
                    <VBtn
                      prependIcon="mdi-help-circle"
                      @click="notifierConfirm(status)"
                      :text="status"
                      :color="status"
                  /></VCol>
                </VRow>
                <VListSubheader>Input dialogs</VListSubheader>
                <VRow>
                  <VCol v-for="status in items">
                    <VBtn
                      prependIcon="mdi-account-edit"
                      @click="notifierInput(status)"
                      :text="status"
                      :color="status"
                  /></VCol>
                </VRow>
                <VListSubheader>Alert Dialog</VListSubheader>
                <VRow>
                  <VCol v-for="status in items"
                    ><VBtn
                      prependIcon="mdi-alert-circle"
                      @click="notifierAlert(status)"
                      :text="status"
                      :color="status"
                  /></VCol>
                </VRow>               
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12">
            <VCard title="Directives">
              <VCardText>
                <VListSubheader>Menu confirm </VListSubheader>
                <VRow>
                  <VCol v-for="status in items"
>
                    <VBtn
                      prependIcon="mdi-alert-circle"
                      v-notifier="{text: 'Are you sure?', status, type:'menu'  , onSubmit: ($event:any) => console.log($event)}"
                      :text="status"
                      :color="status">Menu</VBtn
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

  const notifier = useNotifier()

  const items = ['', 'info', 'success', 'warning', 'error']

  function notifierToast(status: string) {
    notifier.toast({ text: 'This is simple toast', status, options: { location: 'top right' } })
  }

  const notifierConfirm = async (status?: string) => {
    notifier
      .confirm({
        title: 'Confirm',
        text: 'Are you sure?',
        status,
      })
      .then((value) => {
        console.log('value', value)
      })
  }

  const notifierInput = async (status?: string) => {
    notifier
      .prompt({
        title: 'Confirm',
        text: 'Are you sure?',
        status,
      })
      .then((value) => {
        console.log('value', value)
      })
  }

  const notifierAlert = async (status?: string) => {
    notifier
      .alert({
        title: 'Alert',
        text: 'You do not have permission to access this page',
        status,
      })
      .then((value) => {
        console.log('value', value)
      })
  }


  const notifierComponentBasic = async () => {
    notifier.component({
      title: 'Title component',
      component: BasicComponent,
    })
  }

  const notifierComponentAdvance = async () => {
    notifier.component({
      component: AdvanceComponent,
    })
  }
  const notifierComponentGlobal = async () => {
    notifier.component({
      component: GlobalComponent,
    })
  }
</script>
