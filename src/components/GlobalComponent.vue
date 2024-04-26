

<template>
  <v-card>
    <VCardTitle>Component dialog</VCardTitle>
    <VCardText>
      Hello world
    </VCardText>
    <VCardActions>
      <VSpacer />
      <v-btn
        color="primary"
        @click="$emit('onSubmit', 'The value of submit')"
      >
        Submit
      </v-btn>
      <v-btn @click="$emit('onCancel')">
        Cancel
      </v-btn>
    </VCardActions>
  </v-card>
</template>

<script setup lang="ts">
  defineEmits(['onSubmit', 'onCancel'])
</script>

