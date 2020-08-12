import {elem} from './home.js';
const menu = require('./menu.json');


export default function generateMenu(parent) {
    const menuDiv = elem.create('div', 'menuDiv', ''),
        h1 = elem.create('h1', 'h1', 'What we offer*'),
        msg = [
            elem.create('p', 'msg', menu.msg),
            elem.create('p', 'warning', menu.warning)],
        // stores item, description and hr
        menuNodes = [];
    // create each menu item
    for (let i = 0; i < menu.items.length; i++) {
        menuNodes.push(
            elem.create('p', 'item-name', menu.items[i]['name']),
            elem.create('p', 'item-desc', menu.items[i]['description']),
            document.createElement("hr"));
    }
    elem.append(menuDiv, h1, ...menuNodes, ...msg);
    menuDiv.classList.add('fadeIn');
    parent.appendChild(menuDiv);
}