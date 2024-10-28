document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        toggleMenu(true);
    });
});

function toggleMenu(show) {
    const nav = document.querySelector('nav ul');
    const overlay = document.querySelector('.overlay');
    nav.classList.toggle('active', show);
    overlay.classList.toggle('active', show);
}
