export {createNav};
export default function generateHomepage(parent) {
    const home = document.createElement("div");
    home.appendChild(createWelcomeTxt());
    home.appendChild(createNav());
    home.id = 'home';
    parent.appendChild(home);
    document.body.style.backgroundImage = 'url("../images/home.jpg")';
}


function createWelcomeTxt() {
    const welcome = document.createElement("div"),
        h1 = document.createElement("h1"), 
        p = document.createElement("p");
    
    h1.textContent = 'Welcome to The Medieval Feast!';
    p.textContent = 'Forget the noise of daily life and travel back to simpler times.';
    welcome.appendChild(h1);
    welcome.appendChild(p);
    welcome.id = 'welcome';
    return welcome;
}


function createNav() {
    const nav = document.createElement("div"),
        about = document.createElement("div"),
        menu = document.createElement("div");
    
    about.innerHTML = 'About';
    about.id = 'aboutBtn';
    menu.innerHTML = 'Menu';
    menu.id = 'menuBtn';
    nav.appendChild(about);
    nav.appendChild(menu);
    nav.id = 'nav';
    return nav;
}