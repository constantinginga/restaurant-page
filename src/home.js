export {elem, generateHeader, generateHome};


function generateHome(parent) {
    const welcome = elem.create('div', 'welcome', ''),
        welcomeTxt = [
            elem.create('h1', 'welcome-msg', 'The Medieval Feast'),
            elem.create('p', 'welcome-desc', 'Forget the noise of daily life and travel back to simpler times.')];
    elem.append(welcome, ...welcomeTxt);
    welcome.classList.add('fadeIn');
    parent.appendChild(welcome);
}


function generateHeader(parent) {
    const header = elem.create('header', 'header', ''),
        logo = elem.create('img', 'logo', ''),
        logoDiv = elem.create('div', 'logo-div', '');
    logo.src = '../images/castle.png';
    logoDiv.appendChild(logo);
    elem.append(header, logoDiv, createNav());
    parent.appendChild(header);
}


function createNav() {
    const nav = elem.create('div', 'nav', ''),
        navElements = [
            elem.create('div', 'about', 'About'),
            elem.create('div', 'menu', 'Menu')];
    elem.append(nav, ...navElements);
    return nav;
}


const elem = {
    // create a node
    create(type, id, text) {
        const item = document.createElement(type);
        if (text) item.innerHTML = text;
        if (id) item.id = id;
        return item;
    },
    // append multiple nodes to the same parent
    append(parent, ...args) {
        args.forEach(item => parent.appendChild(item));
    }
}