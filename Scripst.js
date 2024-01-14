const hamburger = document.getElementById('hamburger');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggleMenu('actve');
}

hamburger.addEventListener('click', toggleMenu);