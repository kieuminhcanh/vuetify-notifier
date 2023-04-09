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
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components' //option
import * as directives from 'vuetify/directives' //option

import VuetifyNotifier from 'vuetify-notifier';

const vuetify = createVuetify({ components, directives, })

const app = createApp(App);
app.use(vuetify);

app.use(VuetifyNotifier,{
  default: {
    defaultColor:"primary" //default color for all notifications
  },  
});

app.mount('#app');

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
import { NotifierSymbol, useNotifier } from "vuetify-notifier";

const $notifier = useNotifier();
//or
const $notifier = inject(NotifierSymbol);
// and then

const onLogin = async () => {
  try {
    await login();
    $notifier.toast("Login successful", "success");
  } catch (error) {
    $notifier.error("Login failed", "success");
  }
};
</script>
```

### Nuxt

```javascript
<script setup>
// useNotifier() was auto import.Don't need to import the plugin in your page
const $notifier = useNotifier();
//or
const $notifier = useNuxtApp();
// and then

const onLogin = async () => {
  try {
    await login();
    $notifier.toast("Login successful", "success");
  } catch (error) {
    $notifier.error("Login failed", "success");
  }
};
</script>
```

## API

### Options


### Methods
The plugin adds $notifier to the Vue instance, which provides the following methods:

**Confirm**
- confirm(content, status, options)
- confirmSuccess(content, options)
- confirmInfo(content, options)
- confirmWarning(content, options)
- confirmError(content, options)

**Alert**
- alert(content, status, options)
- alertSuccess(content, options)
- ...


**Toast**
- toast(content, status, options)
- toastSuccess(content, options)
- ...

**Prompt**
- prompt(content, status, options)

**Component**
- component(content, options) 

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
    
    dialogProps?: {}, // https://vuetifyjs.com/en/api/v-dialog)
    cardProps?: {}, // https://vuetifyjs.com/en/api/v-card)

    buttonProps?: {}, // https://vuetifyjs.com/en/api/v-btn)

    primaryButtonProps?: {}, // https://vuetifyjs.com/en/api/v-btn)
    secondaryButtonProps?: {}, // https://vuetifyjs.com/en/api/v-btn)

    handleCancel: 'silent',
    inputProps: { // https://vuetifyjs.com/en/api/v-text-field/
      label: 'Input',
    }
  },
  toastOptions: {
    toastProps: { // https://vuetifyjs.com/en/api/v-snackbar/
      transition: 'v-scroll-x-transition',
      location: 'top right',
    },
  },
  componentOptions: {
    existsButton: true,
  }
}

```

**Basic Examples**
```javascript
$notifier.confirm('Are you sure you want to delete this item?').then((result) => {
  if (result) {
    // Delete the item
  }
});


$notifier.prompt('Enter your name:').then((name) => {
  console.log('User entered name:', name);
});

$notifier.alert('This is an alert message!');

$notifier.toast('Toast message');

```

**Advance Examples**
```javascript
$notifier.confirmWarning({
   title: 'Warning',
   text: 'Are you sure you want to delete this item?'
}).then((result) => {
  if (result) {
    // Delete the item
  }
});

$notifier.alertError({
   title: 'Error',
   text: 'This is an error alert message!'
});

$notifier.toastSuccess({
   title: 'Success',
   text: 'This is a success toast message!'
});
```

**Super Advance Examples**
```javascript
import HelloWorld from './components/HelloWorld.vue';

$notifier.component(HelloWorld).then((result) => {
  console.log(result);
});

$notifier.component('global-component-name').then((result) => {
  console.log(result);
});

$notifier.component({
   title: 'Custom Component Title',
   component: HelloWorld,
}).then((result) => {
  console.log(result);
});

// In your component. Please emit the event 'onSubmit' or 'onClose' to close the dialog
<v-btn @click="$emit('onSubmit', 'Submit value')">Submit</v-btn>
<v-btn @click="$emit('onCancel', 'Cancel value')">Cancel</v-btn>

```
For more information about available options and customization, please refer to the TypeScript interfaces in the source code.

## License
### MIT License
