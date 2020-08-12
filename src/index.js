import {generateHeader, generateHome} from './home.js';
import generateMenu from './menu.js';
import generateAbout from './about.js';


// on page load
(function loadPage() {
    const content = document.querySelector('#content');
    // set initial page css
    document.querySelector('html').style.fontSize = '10px';
    document.querySelector('body').style.cssText = `font-size: 10px; height: 100vh; font-family: 'Baloo Tamma 2', cursive; 
        background-image: url("../images/bg.jpeg"); background-position: center center; background-repeat: no-repeat; 
        background-attachment: fixed; background-size: cover;`;
    document.querySelector('#content').style.cssText = `height: 100vh; padding: 4rem; color: #fff;`;

    generateHeader(content);
    generateHome(content);
})();


// nav buttons
const menu = document.querySelector('.menu'),
    home = document.querySelector('.logo-div'),
    about = document.querySelector('.about');


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

// TO-DO: Add animation to JS