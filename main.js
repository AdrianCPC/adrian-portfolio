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
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//Behavior active link while scroll actions
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  })
}
