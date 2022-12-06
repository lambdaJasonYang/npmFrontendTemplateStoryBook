const customtypedstuff = 4;
const someexternalStuff = undefined;
const somexternalStuff2 = undefined;
class bob {
    mode;
    constructor(x) {
        this.mode = x;
    }
}
const cores = navigator.hardwareConcurrency;
const drawCan = () => {
    const a = document.createElement('canvas');
    a.width = 400;
    a.height = 400;
    a.getContext('2d').fillRect(40, 40, 150, 100);
    return a;
};

export { bob, cores, customtypedstuff, drawCan, someexternalStuff, somexternalStuff2 };
