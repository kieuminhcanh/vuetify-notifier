// eslint-disable
/* prettier-ignore */
// @ts-nocheck
// eslint-disable @typescript-eslint/ban-ts-comment
// noinspection JSUnusedGlobalSymbols

import { createNotifier, NotifierSymbol, useNotifier } from './Notifier';
import { vNotifierMenu, vNotifierMenuInput } from './directives'
import { NotifierSymbol } from './Notifier'

export default {
  install: (app: App, options?: any) => {
    app.provide(NotifierSymbol, createNotifier(app, options))
    app.directive('notifier', vNotifierMenu)
    app.directive('notifier-promt', vNotifierMenuInput)
  },
}

export { createNotifier, useNotifier, NotifierSymbol }
