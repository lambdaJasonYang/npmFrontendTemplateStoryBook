export = webpackContext;
export = webpackContext;
declare function webpackContext(req: any): any;
declare namespace webpackContext {
    export { keys, webpackContextResolve as resolve, id, wrap, isGeneratorFunction, mark, awrap, AsyncIterator, async, values };
}
declare function keys(): string[];
declare function webpackContextResolve(req: any): any;
declare var id: string;
declare function wrap(innerFn: any, outerFn: any, self: any, tryLocsList: any): any;
declare function isGeneratorFunction(genFun: any): boolean;
declare function mark(genFun: any): any;
declare function awrap(arg: any): {
    __await: any;
};
declare function AsyncIterator(generator: any, PromiseImpl: any): void;
declare function async(innerFn: any, outerFn: any, self: any, tryLocsList: any, PromiseImpl: any): any;
declare function values(iterable: any): any;
