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

const drawCan = () => {
    const a = document.createElement('canvas')
    a.width = 400;
    a.height = 400;
    a.getContext('2d').fillRect(40,40,150,100);
    return a
}

export {drawCan, cores, customtypedstuff, someexternalStuff, somexternalStuff2, bob} ;

