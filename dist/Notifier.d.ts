import { App } from 'vue';
import { Notifier } from './types';
import { InjectionKey } from 'vue';
export declare const NotifierSymbol: InjectionKey<Notifier>;
export declare function createNotifier(app: App): Notifier;
export declare function useNotifier(): Notifier;
