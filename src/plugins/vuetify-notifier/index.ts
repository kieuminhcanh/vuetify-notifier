 
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols


import { App } from 'vue';
import { createNotifier, NotifierSymbol, useNotifier } from './Notifier';

export default {
  install: (app: App, options?: any) => {
    app.provide(NotifierSymbol, createNotifier(app, options));
  },
};

export { createNotifier, useNotifier, NotifierSymbol }

