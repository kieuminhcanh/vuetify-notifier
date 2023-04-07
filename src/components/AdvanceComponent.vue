

<template>
  <v-card>
    <VCardTitle>Advance Component dialog</VCardTitle>
    <VImg src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" />
    <VCardText>
      This is advance component dialog. User need to design title, content and action buttons.
    </VCardText>
    <VCardActions>
      <VSpacer />
      <v-btn color="primary" @click="$emit('onSubmit', 'The value of submit')">Submit</v-btn>
      <v-btn @click="$emit('onSubmit', 'The value of cancel')">Cancel</v-btn>
    </VCardActions>
  </v-card>
</template>

<script setup lang="ts">


</script>

