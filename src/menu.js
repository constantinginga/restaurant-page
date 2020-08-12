import {red, elem} from './home.js';
const menu = require('./menu.json');

export default function generateMenu(parent) {
    const menuDiv = elem.create('div', 'menuDiv', ''),
        h1 = elem.create('h1', 'h1', 'What we offer*'),
        // stores item, description and hr
        menuNodes = [];

    // create each menu item
    for (let i = 0; i < menu.items.length; i++) {
        menuNodes.push(
            elem.create('p', 'item-name', menu.items[i]['name']),
            elem.create('p', 'item-desc', menu.items[i]['description']),
            document.createElement("hr"));
    }
    // add css and append items
    h1.style.cssText = `font-size: 5rem; color: ${red};`;
    elem.append(menuDiv, h1, ...menuNodes);
    elem.append(menuDiv, elem.create('p', '', menu.msg), elem.create('p', '', menu.warning));
    menuDiv.querySelectorAll('hr').forEach(hr => hr.style.cssText = `border: .1rem solid #fff; width: 80%; margin: .8rem auto;`);
    menuDiv.querySelectorAll('.item-name').forEach(name => name.style.cssText = `font-size: 3rem;`);
    menuDiv.querySelectorAll('.item-desc').forEach(desc => desc.style.cssText = ``);
    menuDiv.classList.add('fadeIn');
    menuDiv.style.cssText = `width: 100rem; margin-top: 3rem; margin-bottom: 2rem; text-align: center; font-weight: 700; 
        letter-spacing: .1rem; font-size: 1.5rem; font-family: 'Open Sans', sans-serif;`;
    parent.appendChild(menuDiv);
}