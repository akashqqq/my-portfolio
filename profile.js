let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// Scroll කරන විට menu එක වැසීමට
window.onscroll = () => {
    navbar.classList.remove('active');
};