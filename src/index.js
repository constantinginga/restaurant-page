import {generateHeader, generateHome} from './home.js';
import generateMenu from './menu.js';
import generateAbout from './about.js';


// on page load
(function loadPage() {
    const content = document.querySelector('#content'),
        style = document.createElement('style'),
        anim = `@keyframes fadeIn {0% {opacity: 0;} 100% {opacity: 1;}} .fadeIn {animation: fadeIn 1s;}`,
        reset = `* {margin: 0; padding: 0; box-sizing: border-box;}`;

    // set initial page css
    style.innerHTML = `${reset} ${anim}`;
    document.head.appendChild(style);
    document.querySelector('html').style.fontSize = '10px';
    document.querySelector('body').style.cssText = `font-size: 10px; height: 100vh; font-family: 'Baloo Tamma 2', cursive; 
        background-image: url("https://i.imgur.com/7pqnKWt.jpg"); background-position: center center; background-repeat: no-repeat; 
        background-attachment: fixed; background-size: cover;`;
    document.querySelector('#content').style.cssText = `height: 100vh; padding: 4rem; color: #fff;`;

    // load header and homepage
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
    const currentTab = document.querySelector(`.${current}`);
    // if already on that tab
    if (!!currentTab) return;
    // else remove current and generate new tab
    content.removeChild(content.childNodes[1]);
    render(content);
}