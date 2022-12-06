export function findDOMNode(a: any): any;
export function flushSync(a: any, b: any): any;
export function hydrate(a: any, b: any, c: any): any;
export function render(a: any, b: any, c: any): any;
export function unmountComponentAtNode(a: any): boolean;
export function unstable_createPortal(a: any, b: any, ...args: any[]): {
    $$typeof: number | symbol;
    key: string;
    children: any;
    containerInfo: any;
    implementation: any;
};
export function unstable_renderSubtreeIntoContainer(a: any, b: any, c: any, d: any): any;
export const version: "16.14.0";
declare const _exports: any;
export = _exports;
export function unstable_now(): number;
export function unstable_forceFrameRate(): void;
export const unstable_IdlePriority: 5;
export const unstable_ImmediatePriority: 1;
export const unstable_LowPriority: 4;
export const unstable_NormalPriority: 3;
export const unstable_Profiling: any;
export const unstable_UserBlockingPriority: 2;
export function unstable_cancelCallback(a: any): void;
export function unstable_continueExecution(): void;
export function unstable_getCurrentPriorityLevel(): number;
export function unstable_getFirstCallbackNode(): any;
export function unstable_next(a: any): any;
export function unstable_pauseExecution(): void;
export function unstable_runWithPriority(a: any, b: any): any;
export function unstable_scheduleCallback(a: any, b: any, c: any): any;
export function unstable_shouldYield(): any;
export function unstable_wrapCallback(a: any): (...args: any[]) => any;
declare namespace lk {
    const Events: {}[];
}
declare function kk(a: any, b: any, ...args: any[]): {
    $$typeof: number | symbol;
    key: string;
    children: any;
    containerInfo: any;
    implementation: any;
};
declare function Mj(a: any, b: any): any;
declare function Z(): void;
export { lk as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kk as createPortal, Mj as unstable_batchedUpdates, Z as unstable_requestPaint };
