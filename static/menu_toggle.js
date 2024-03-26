const mobileMenu = document.getElementById('menu_icon');
const navMenu = document.querySelector('nav');

mobileMenu.addEventListener('click', function() {
    navMenu.classList.toggle('mobile');
});