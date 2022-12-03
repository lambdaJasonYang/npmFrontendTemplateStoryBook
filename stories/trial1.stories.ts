import { StoryFn, Meta } from '@storybook/html';
import { cores } from '../dist/index.js'

export default {
    title: 'hi',
} as Meta;

export const Primary: StoryFn = (): HTMLButtonElement => {
    const btn = document.createElement('button');
    btn.innerText = cores.toString();
    return btn;
};