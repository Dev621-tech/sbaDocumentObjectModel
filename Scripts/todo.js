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
    { text: 'Home', href: '../index.html' },
    { text: 'Create', href: '/create' },
    { text: 'ToDo', href: '/todo' },
    { text: 'Progress', href: '/progress' },
    { text: 'Profile', href: 'profile.html' }
];

navLinks.forEach(link => {
    let a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.href;

    nav.appendChild(a);

});

document.body.appendChild(nav);
nav.classList.add('flex-nav');