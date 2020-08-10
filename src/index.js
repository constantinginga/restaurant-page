/* TO-DO:
    Add 'about' module; Style 'about' section; Make all pages responsive; add animations on page change;*/

import {generateHeader, generateHome} from './home.js';
import generateMenu from './menu.js';
import generateAbout from './about.js';

const content = document.querySelector('#content');
// on page load
generateHeader(content);
generateHome(content);

// nav buttons
const menu = document.querySelector('#menu'),
    home = document.querySelector('#logo-div'),
    about = document.querySelector('#about');


home.addEventListener('click', e => show('welcome', generateHome));
menu.addEventListener('click', e => show('menuDiv', generateMenu));
about.addEventListener('click', e => show('aboutDiv', generateAbout));


// switch between tabs
let show = (current, render) => {
    const currentTab = document.querySelector(`#${current}`);
    if (!!currentTab) return;
    content.removeChild(content.childNodes[1]);
    render(content);
}