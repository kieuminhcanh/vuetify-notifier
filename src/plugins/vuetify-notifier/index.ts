// eslint-disable
/* prettier-ignore */
// @ts-nocheck
// eslint-disable @typescript-eslint/ban-ts-comment
// noinspection JSUnusedGlobalSymbols

import { createNotifier, NotifierSymbol, useNotifier } from './Notifier';
import { vNotifierMenu } from './directives'
import { NotifierSymbol } from './Notifier'

export default {
  install: (app: App, options?: any) => {
    app.provide(NotifierSymbol, createNotifier(app, options))
    app.directive('notifier', vNotifierMenu)
  },
}

export { createNotifier, useNotifier, NotifierSymbol }
