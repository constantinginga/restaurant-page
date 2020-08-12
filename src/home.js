export {red, elem, generateHeader, generateHome};
const red = 'rgb(217, 51, 62)';


function generateHome(parent) {
    const welcome = elem.create('div', 'welcome', ''),
        welcomeTxt = [
            elem.create('h1', 'welcome-msg', 'The Medieval Feast'),
            elem.create('p', 'welcome-desc', 'Forget the noise of daily life and travel back to simpler times.')];
    
    // set css
    welcomeTxt[0].style.cssText = `font-size: 9rem; letter-spacing: .4rem; text-transform: uppercase;`;
    welcomeTxt[1].style.cssText = `font-size: 3rem; letter-spacing: .1rem; font-weight: 700;`;
    elem.append(welcome, ...welcomeTxt);
    welcome.style.cssText = `width: 100rem; margin-top: 8rem; text-align: center;`;
    welcome.classList.add('fadeIn');
    parent.appendChild(welcome);
}


function generateHeader(parent) {
    const header = elem.create('header', 'header', ''),
        logo = elem.create('img', 'logo', ''),
        logoDiv = elem.create('div', 'logo-div', '');

    logo.src = '../images/castle.png';
    logo.style.cssText = `width: 100%; height: 100%;`;
    logoDiv.style.cssText = `cursor: pointer; width: 10rem; height: 10rem; padding: 2rem;
        border-radius: 50%; background-color: ${red}`;
    header.style.cssText = `user-select: none; display: flex;`;
    logoDiv.appendChild(logo);
    elem.append(header, logoDiv, generateNav());
    parent.appendChild(header);
}


function generateNav() {
    const nav = elem.create('div', 'nav', ''),
        navElements = [
            elem.create('div', 'about', 'About'),
            elem.create('div', 'menu', 'Menu')];

    // for each navigation item
    navElements.forEach(element => {
        element.style.cssText = `cursor: pointer; transition: ease .25s; font-size: 2.5rem; font-weight: 700; margin: 0 3rem;`;
        // change color on hover
        element.addEventListener('mouseover', e => {
            element.style.color = `${red}`;
            element.style.transition = `ease-in .25s`; 
        });
        element.addEventListener('mouseout', e => element.style.color = `#fff`);
    });
    elem.append(nav, ...navElements);
    nav.style.cssText = `margin-left: 5rem; display: flex; align-items: center; text-transform: uppercase;`;
    return nav;
}


const elem = {
    // create a node
    create(type, cls, text) {
        const item = document.createElement(type);
        if (text) item.innerHTML = text;
        if (cls) item.classList.add(cls);
        return item;
    },
    // append multiple nodes to the same parent
    append(parent, ...args) {
        args.forEach(item => parent.appendChild(item));
    }
}