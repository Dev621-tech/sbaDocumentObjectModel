document.body.style.margin = '0%';

// MAIN TITLE "ACCOMPLISHMENT TRACKER" -----------------------------------------------
let title = document.getElementsByTagName('header');
title[0].style.backgroundColor = 'lightblue';
let brandname = document.createElement('h1');
brandname.textContent = 'Accomplishment Tracker'
title[0].append(brandname);


brandname.style.margin = '0';
brandname.style.fontSize = "5rem";
brandname.style.fontFamily = "'Courier New', monospace";

// NAVIGATION BAR -----------------------------------------------------------------------
const nav = document.createElement('nav');

const navLinks = [
    { text: 'Home', href: 'index.html' },
    { text: 'Create', href: '/create' },
    { text: 'ToDo', href: '/todo' },
    { text: 'Progress', href: '/progress' },
    { text: 'Profile', href: '/profile' }
];

navLinks.forEach(link => {
    let a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.href;

    nav.appendChild(a);

});

document.body.appendChild(nav);
nav.classList.add('flex-nav');

// MAIN CONTAINER --------------------------------------------------------------------
let main = document.querySelector('main');

// Ensures that the nav is before the main
document.body.insertBefore(nav, main);

let container = document.createElement('div');
container.classList.add('image-text-container');

// IMAGE
const img = document.createElement('img');
img.src = "images/hardWorking.jpg"
img.alt = "Young Man Working Hard"
img.classList.add('side-image');

// TEXT BOX
const textBox = document.createElement('div');
textBox.classList.add('text-box');
textBox.innerHTML = `<h2>Where Everything Is An Accomplishment!</h2>
<p>IT MAY NOT BE AN ACCOMPLISHMENT TO THEM, BUT IT WAS AN ACCOMPLSIHMENT TO YOU !!</p>`
    ;


container.appendChild(img);
container.appendChild(textBox);

main.appendChild(container);


// Seconf
