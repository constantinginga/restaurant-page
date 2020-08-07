const menuDiv = document.createElement("div"),
    menu = require('./menu.json');


export default function generateMenu(parent) {
    const h1 = document.createElement("h1");

    menuDiv.id = 'menu';
    h1.innerHTML = 'Our current menu';
    h1.id = 'title';
    menuDiv.appendChild(h1);
    // create menu items and their descriptions
    for (let i = 0; i < menu.items.length; i++) {
        createItem('name', i);
        createItem('description', i);
        menuDiv.appendChild(document.createElement("hr"));
    }
    
    createItem('msg');
    createItem('warning');
    parent.appendChild(menuDiv);
    document.body.style.backgroundImage = 'url("../images/home.jpg")';
}


// create item with corresponding text and id
function createItem(type, i) {
    const item = document.createElement("p");
    (arguments.length === 2) ? item.innerHTML = menu.items[i][type] : item.innerHTML = menu[type];
    item.id = type;
    menuDiv.appendChild(item);
}

