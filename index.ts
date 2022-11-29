const customtypedstuff : bleh = 4
const someexternalStuff : ErrorConstructor = undefined
const somexternalStuff2 : Console = undefined

interface bobby {
    mode: string;
}

class bob implements bobby {
    mode: string;
    constructor(x: string){
        this.mode = x;
    }
}
const cores : (number | undefined) = (navigator as Navigator).hardwareConcurrency;
export {cores, customtypedstuff, someexternalStuff, somexternalStuff2, bob} ;

