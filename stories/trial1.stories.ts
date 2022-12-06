import { StoryFn, Meta } from '@storybook/html';
import { drawCan, cores } from '../dist/index.js'

export default {
    title: 'hi',
} as Meta;

const appendSibling = (src,tgt) => {src.parentNode?.insertBefore(tgt,src.nextSibling)};

//Storybook works better with react components.

export const Primary: StoryFn = (): HTMLElement => {
    let dummy: HTMLElement = document.createElement('div');
    // dummy.width = 500;
    // dummy.height = 500;
    // dummy.innerText = cores!.toString();
    // dummy.replaceWith(drawCan());
    window.addEventListener("onload", ()=> {
        //demo your HTML elements here; why not directly just return it?
        //Sometimes your HTML requires the element is fully loaded or else it wont work
    
        // const btn = document.createElement('button');
        
        // dummy.appendChild(btn)
        

    })
    //if react component, we can just return it without onload.
    dummy = drawCan()
    // dummy.getContext('2d')!.fillRect(40,40,150,100);
    return dummy;
};