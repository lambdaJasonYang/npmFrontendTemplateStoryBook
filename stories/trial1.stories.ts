import { StoryFn, Meta } from '@storybook/html';
import { cores } from '../dist/index.js'

export default {
    title: 'hi',
} as Meta;

const appendSibling = (src,tgt) => {src.parentNode?.insertBefore(tgt,src.nextSibling)};

//Storybook works better with react components.

export const Primary: StoryFn = (): HTMLElement => {
    const dummy = document.createElement('div');

    window.onload = ()=> {
        //demo your HTML elements here; why not directly just return it?
        //Sometimes your HTML requires the element is fully loaded or else it wont work
    
        const btn = document.createElement('button');
        btn.innerText = cores!.toString();
        dummy.appendChild(btn)
        

    }
    //if react component, we can just return it without onload.
    return dummy;
};