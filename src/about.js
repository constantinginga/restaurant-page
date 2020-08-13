import {red, elem} from './home.js';


export default function generateAbout(parent) {
    const aboutDiv = elem.create('div', 'aboutDiv', ''),
        h1 = elem.create('h1', 'h1', 'Our story'),
        desc = ['This project was started by two guys with a passion and a deep appreciation for the medieval era.',
        'Established in 2017, it is a small, yet cozy place and we plan to stay that way.',
        'If you want to take a glimpse into the medieval culture, we have the best food and atmosphere there is.',
        'You can find us at 311 Rock Creek Drive, in Bethpage, NY, between 5AM and 11PM on any day of the week!'],
        descElements = [];
        
    // for each element in array
    desc.forEach(line => {
        // create and style p node
        let aboutLine = elem.create('p', 'about-line', line);
        aboutLine.style.cssText = `font-size: 3rem;`;
        // add node to another array
        descElements.push(aboutLine);
    });
    h1.style.cssText = `font-size: 5rem; color: ${red};`;
    elem.append(aboutDiv, h1, ...descElements);
    aboutDiv.style.cssText = `width: 100rem; margin-top: 8rem; text-align: center;`;
    
    // trigger anim
    aboutDiv.classList.add('fadeIn');
    aboutDiv.addEventListener('animationend', e => aboutDiv.classList.remove('fadeIn'));
    parent.appendChild(aboutDiv);
}