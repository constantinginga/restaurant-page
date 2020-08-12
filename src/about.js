import {elem} from './home.js';


export default function generateAbout(parent) {
    const aboutDiv = elem.create('div', 'aboutDiv', ''),
        h1 = elem.create('h1', 'h1', 'Our story'),
        desc = ['This project was started by two guys with a passion and a deep appreciation for the medieval era.',
        'Established in 2017, it is a small, yet cozy place and we plan to stay that way.',
        'If you want to take a glimpse into the medieval culture, we have the best food and atmosphere there is.',
        'You can find us at 311 Rock Creek Drive, in Bethpage, NY, between 5AM and 11PM on any day of the week!'],
        descElements = [];
        

    desc.forEach(line => descElements.push(elem.create('p', '', line)));
    elem.append(aboutDiv, h1, ...descElements);
    aboutDiv.classList.add('fadeIn');
    parent.appendChild(aboutDiv);
}