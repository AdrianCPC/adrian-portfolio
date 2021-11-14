/*
==========================
Action menu show & hidden
==========================
*/
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

//Show the menu
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
});
//Hidden the menu
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
});

//Dissapear menu when I click
const navLink = document.querySelector('.nav__link');

function linkAction() {
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));
