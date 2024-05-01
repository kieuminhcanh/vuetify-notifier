# Vuetify Notifier

![image](https://user-images.githubusercontent.com/136077/230705147-849714e2-a50b-4118-9100-f14d6a82d2e9.png)

Vuetify Notifier is a Vue 3 plugin that simplifies the process of displaying notifications, alerts, confirmations, and prompts in your Vue or Nuxt applications. It uses Vuetify components to provide a beautiful and customizable user experience.

<h2 style="text-align: center;">
➡️ <a href="https://kieuminhcanh.github.io/vuetify-notifier" target="_blank">Demo Online</a> 👌
</h2>

## Installation

```sh
$ npm install -D vuetify-notifier
or
$ yarn add -D vuetify-notifier
```

## Setup

### Vue 3 | Vite

#### **`main.js|ts`**

```js
import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'

import { VuetifyNotifier } from 'vuetify-notifier'

import { VOverlay, VDialog } from 'vuetify/components'

const vuetify = createVuetify({
  components: { VOverlay, VDialog },
})

/**
 * You can do manually import the components you are using.
 * https://vuetifyjs.com/en/features/treeshaking/#manual-imports
 */

// const vuetify = createVuetify({
//   components: {
//     VDefaultsProvider,
//     VDialog,
//     VCard,content.
//     VToolbar,
//     VBtn,
//     VIcon,
//   },
//   ...
// })

const app = createApp(App)
app.use(vuetify)

app.use(VuetifyNotifier, {
  default: {
    defaultColor: 'primary', //default color for all notifications
    closeIcon: 'mdi-close', //default close icon for component
  },
})

app.mount('#app')
```

## Nuxt

#### **`nuxt.config.js|ts`**

```javascript
export default defineNuxtConfig({
   ...
   modules: [
      'vuetify-notifier/nuxt'
   ],
   notifier:{
      default:{
         ...
      }
   }
   ...
})
```

## Usage

### Vue 3 | Vite

```javascript
<script setup>
import { useNotifier } from "vuetify-notifier";

const notifier = useNotifier();

const onLogin = async () => {
  await login();
  notifier.toast({text: "Login Success", status: "success" });
};
</script>
```

### Nuxt

```javascript
<script setup>
const notifier = useNotifier();
//or
const notifier = useNuxtApp();

const onLogin = async () => {
  await login();
  notifier.toast({text: "Login Success", status: "success" });
};
</script>
```

## API

### Options

### Methods

The plugin adds notifier to the Vue instance, which provides the following methods:

**Confirm**

- toast
- confirm
- prompt
- alert
- component

### Options

Options for each method can be customized by providing an object as the last argument. You can configure default options globally for dialogs, toasts, and components
** Options **

```typescript
export const defaultOptions: NotifierOptions = {
  default: {
    defaultColor: '',
    defaultIcon: 'mdi-alert-circle',
    successIcon: 'mdi-check-circle',
    infoIcon: 'mdi-information',
    warningIcon: 'mdi-alert',
    errorIcon: 'mdi-alert-circle',
    closeIcon: 'mdi-close',
  },
  dialogOptions: {
    transition: 'dialog-bottom-transition',
    width: 500,
    minWidth: 300,
    minHeight: 250,
    textAlign: 'center',
    primaryButtonText: 'OK',
    secondaryButtonText: 'Cancel',
    showDivider: true,
    buttonProps: {
      width: '100',
    },

    dialogProps: {}, // https://vuetifyjs.com/en/api/v-dialog)
    cardProps: {}, // https://vuetifyjs.com/en/api/v-card)

    buttonProps: {}, // https://vuetifyjs.com/en/api/v-btn)

    primaryButtonProps: {}, // https://vuetifyjs.com/en/api/v-btn)
    secondaryButtonProps: {}, // https://vuetifyjs.com/en/api/v-btn)

    handleCancel: 'silent',
    inputProps: {
      // https://vuetifyjs.com/en/api/v-text-field/
      label: 'Input',
    },
  },
  toastOptions: {
    toastProps: {
      // https://vuetifyjs.com/en/api/v-snackbar/
      transition: 'v-scroll-x-transition',
      location: 'top right',
    },
  },
  componentOptions: {
    existsButton: true,
  },
}
```

**Basic Examples**

```javascript
notifier
  .confirm({
    text: 'Are you sure you want to delete this item?',
  })
  .then((result) => {
    if (result) {
      // Delete the item
    }
  })

notifier.prompt({ text: 'Input your name' }).then((name) => {
  console.log('User entered name:', name)
})
```

**Super Advance Examples**

```javascript
import HelloWorld from './components/HelloWorld.vue';

notifier.component({title: "Component Title", component: HelloWorld}).then((result) => {
  console.log(result);
});

notifier.component({
  title: "Component Title",
  component:'global-component-name'
}).then((result) => {
  console.log(result);
});

// In your component. Please emit the event 'onSubmit' or 'onClose' to close the dialog
<v-btn @click="$emit('onSubmit', 'Submit value')">Submit</v-btn>
<v-btn @click="$emit('onCancel', 'Cancel value')">Cancel</v-btn>

```

## License

### MIT License
