<template>
  <VApp>
    <VMain>
      <VContainer class="d-flex flex-column ga-4">
        <VCard>
          <VTabs
            v-model="tab"
            bg-color="primary"
          >
            <VTab
              v-for="item in tabs"
              :key="item"
              :value="item"
              :text="item"
            />
          </VTabs>

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
const tab = ref('toast')
const tabs = ['toast', 'alert', 'confirm', 'input', 'dialog']
</script>
