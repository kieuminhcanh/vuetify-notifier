import { App, InjectionKey } from 'vue';
import { Notifier, NotifierOptions } from './types';
export declare const NotifierSymbol: InjectionKey<Notifier>;
export declare function createNotifier(app: App, globalOptions?: NotifierOptions): Notifier;
export declare function useNotifier(): Notifier;
