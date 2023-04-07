import { App, inject } from 'vue';
import { NotifierSymbol, createNotifier, useNotifier } from './Notifier';
import { Notifier } from "./types";
import { InjectionKey } from 'vue';
import { getCurrentInstance } from 'vue';

export default {
  install: (app: App) => {
    app.provide(NotifierSymbol, createNotifier(app));
  },
};

export { createNotifier, useNotifier, NotifierSymbol }

