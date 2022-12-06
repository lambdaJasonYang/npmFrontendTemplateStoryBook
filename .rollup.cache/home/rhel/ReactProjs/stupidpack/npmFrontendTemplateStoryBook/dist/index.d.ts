declare const customtypedstuff: bleh;
declare const someexternalStuff: ErrorConstructor;
declare const somexternalStuff2: Console;
interface bobby {
    mode: string;
}
declare class bob implements bobby {
    mode: string;
    constructor(x: string);
}
declare const cores: (number | undefined);
declare const drawCan: () => HTMLCanvasElement;
export { drawCan, cores, customtypedstuff, someexternalStuff, somexternalStuff2, bob };
