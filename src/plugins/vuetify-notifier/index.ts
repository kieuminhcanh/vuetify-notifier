import { App } from 'vue';
import { NotifierSymbol, createNotifier, useNotifier } from './Notifier';


export default {
  install: (app: App, options?: any) => {
    app.provide(NotifierSymbol, createNotifier(app, options));
  },
};

export { createNotifier, useNotifier, NotifierSymbol }

