<template>
  <VApp>
    <VMain>
      <VContainer class="d-flex flex-column ga-4">
        <VCard>
          <VToolbar color="primary">
            <VTabs
              v-model="tab"
            >
              <VTab
                v-for="item in tabs"
                :key="item"
                :value="item"
                :text="item"
              />
            </VTabs>
            <VSpacer />
            <v-btn @click="toggleTheme">
              Toggle Theme
            </v-btn>
          </VToolbar>

          <VCardText>
            <VTabsWindow v-model="tab">
              <VTabsWindowItem value="toast">
                <ExamplesToast />
              </VTabsWindowItem>

              <VTabsWindowItem value="alert">
                <ExamplesAlert />
              </VTabsWindowItem>

              <VTabsWindowItem value="confirm">
                <ExamplesConfirm />
              </VTabsWindowItem>

              <VTabsWindowItem value="input">
                <ExamplesInput />
              </VTabsWindowItem>

              <VTabsWindowItem value="dialog">
                <ExamplesDialog />
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
import { useTheme } from 'vuetify'

const tab = ref('toast')
const tabs = ['toast', 'alert', 'confirm', 'input', 'dialog']

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
