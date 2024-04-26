<template>
  <VCard>
    <VCardTitle>Advance Component dialog</VCardTitle>
    <VImg
      :aspect-ratio="16 / 9"
      cover
      max-height="500"
      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
    />
    <VCardText>  
      <v-list
        lines="two"
        subheader
      >
        <v-list-subheader>User Controls</v-list-subheader>

        <v-list-item
          link
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
          title="Content filtering"
        />

        <v-list-item
          link
          subtitle="Require password for purchase or use password to restrict purchase"
          title="Password"
        />

        <v-divider />

        <v-list-subheader>General</v-list-subheader>

        <v-list-item
          subtitle="Notify me about updates to apps or games that I downloaded"
          title="Notifications"
        >
          <template #prepend>
            <v-list-item-action start>
              <v-checkbox-btn color="primary" />
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-list-item
          subtitle="Auto-update apps at any time. Data charges may apply"
          title="Sound"
        >
          <template #prepend>
            <v-list-item-action start>
              <v-checkbox-btn color="primary" />
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-list-item
          subtitle="Automatically add home screen widgets"
          title="Auto-add widgets"
        >
          <template #prepend>
            <v-list-item-action start>
              <v-checkbox-btn color="primary" />
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list>
    </VCardText>
   
    <VCardActions>
      <VSpacer />
      <VBtn
        text="Cancel"
        @click="$emit('onSubmit', 'The value of cancel')"
      />
      <VBtn
        color="primary"
        text="Submit"
        @click="$emit('onSubmit', 'The value of submit')"
      />
    </VCardActions>
  </VCard>
</template>

<script setup lang="ts">
  defineEmits(['onSubmit'])
</script>
