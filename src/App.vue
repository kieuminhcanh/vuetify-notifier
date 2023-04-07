<template>
  <v-layout>
    <v-app-bar title="Vuetify Notifier">
      <v-btn icon="mdi-github" text href=">">Documentation</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>        
        <v-row>
          <v-col cols="12">
            <v-card title="Toast">
              <VCardText>
                <VListSubheader>Simple Toast</VListSubheader>
                <v-row>
                  <v-col><v-btn prepend-icon="mdi-bell-outline" @click="notifierToast()">Default</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-bell-outline" @click="notifierToast('success')"
                      color="success">Success</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-bell-outline" @click="notifierToast('info')"
                      color="info">Into</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-bell-outline" @click="notifierToast('warning')"
                      color="warning">Warning</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-bell-outline" @click="notifierToast('error')"
                      color="error">Error</v-btn></v-col>
                </v-row>
                <VListSubheader>Advanced Toast</VListSubheader>
                <v-row>
                  <v-col><v-btn prepend-icon="mdi-bell-plus" @click="notifierToastWithTitle()">Default</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-bell-plus" @click="notifierToastWithTitle('success')"
                      color="success">Success</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-bell-plus" @click="notifierToastWithTitle('info')"
                      color="info">Into</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-bell-plus" @click="notifierToastWithTitle('warning')"
                      color="warning">Warning</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-bell-plus" @click="notifierToastWithTitle('error')"
                      color="error">Error</v-btn></v-col>
                </v-row>
              </VCardText>

            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card title="Dialog">
              <VCardText>
                <VListSubheader>Confirm dialogs</VListSubheader>
                <v-row>
                  <v-col><v-btn prepend-icon="mdi-help-circle" @click="notifierConfirm()">Default</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-help-circle" @click="notifierConfirm('success')"
                      color="success">Success</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-help-circle" @click="notifierConfirm('info')"
                      color="info">Into</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-help-circle" @click="notifierConfirm('warning')"
                      color="warning">Warning</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-help-circle" @click="notifierConfirm('error')"
                      color="error">Error</v-btn></v-col>
                </v-row>
                <VListSubheader>Input dialogs</VListSubheader>
                <v-row>
                  <v-col><v-btn prepend-icon="mdi-account-edit" @click="notifierPrompt()">Default</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-account-edit" @click="notifierPrompt('success')"
                      color="success">Success</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-account-edit" @click="notifierPrompt('info')"
                      color="info">Into</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-account-edit" @click="notifierPrompt('warning')"
                      color="warning">Warning</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-account-edit" @click="notifierPrompt('error')"
                      color="error">Error</v-btn></v-col>
                </v-row>
                <VListSubheader>Alert Dialog</VListSubheader>
                <v-row>
                  <v-col><v-btn prepend-icon="mdi-alert-circle" @click="notifierAlert()">Default</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-alert-circle" @click="notifierAlert('success')"
                      color="success">Success</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-alert-circle" @click="notifierAlert('info')"
                      color="info">Into</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-alert-circle" @click="notifierAlert('warning')"
                      color="warning">Warning</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-alert-circle" @click="notifierAlert('error')"
                      color="error">Error</v-btn></v-col>
                </v-row>
              </VCardText>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card title="Component">
              <VCardText>
                <VListSubheader>Confirm dialogs</VListSubheader>
                <v-row>
                  <v-col><v-btn prepend-icon="mdi-flare" @click="notifierComponentBasic()">Default</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-flare" @click="notifierComponentAdvance()">Advance</v-btn></v-col>
                  <v-col><v-btn prepend-icon="mdi-flare" @click="notifierComponentGlobal()">Global
                      component</v-btn></v-col>
                </v-row>
              </VCardText>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-layout>
</template>

<script setup lang="ts">


import BasicComponent from './components/BasicComponent.vue';
import AdvanceComponent from './components/AdvanceComponent.vue';

import { NotifierSymbol, useNotifier } from "./plugins/vuetify-notifier";

const $notifier = useNotifier();

const notifierConfirm = async (status?: string) => {
  const result = await $notifier.confirm({
    title: 'Confirm',
    text: 'Are you sure?',
  }, status);
  console.log(result);
};

const notifierAlert = async (status?: string) => {
  const result = await $notifier.alert({
    title: 'Confirm',
    text: 'Are you sure?',
  }, status);
};

const notifierPrompt = async (status?: string) => {
  const result = await $notifier.prompt('Are you sure?')
  console.log(result);
};

const notifierToast = async (status?: string) => {
  const result = await $notifier.toast("This is simple toast", status)
  console.log(result);
};

const notifierToastWithTitle = async (status?: string) => {
  const result = await $notifier.toast({
    title: 'Title',
    text: 'This is simple toast',
  }, status)
  console.log(result);
};

const notifierComponentBasic = async () => {
  const result = await $notifier.component({
    title: 'Title component',
    component: BasicComponent
  }, {
    width: 500,
  })
  console.log(result);

};

const notifierComponentAdvance = async () => {
  const result = await $notifier.component(AdvanceComponent, {
    dialogProps: {
      fullscreen: true
    }
  })
  console.log(result);
};
const notifierComponentGlobal = async () => {
  const result = await $notifier.component('global-component', {
    width: 500,
  })
  console.log(result);
};
</script>

