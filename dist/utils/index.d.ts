import { NotifierMountComponent, ConfirmResult } from '../types';
export declare const getVAppRoot: () => HTMLElement;
export declare const createContainer: () => HTMLDivElement;
export declare const mountComponent: ({ component, app, content, status, options }: NotifierMountComponent) => Promise<ConfirmResult>;
