import {elem} from './home.js';

export default function generateAbout(parent) {
    const aboutDiv = elem.create('div', 'menuDiv', '');

    parent.appendChild(aboutDiv);
}