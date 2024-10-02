// Загрузка баннера
document.addEventListener('DOMContentLoaded', function() {
    fetch('banner.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('banner').innerHTML = data;
        });
});

// Выдвижение меню
let menuOpen = false;
const menu = document.getElementById('menu');
const content = document.getElementById('content');

document.addEventListener('click', function(event) {
    if (!menuOpen && event.target.id !== 'menu' && event.target.id !== 'menu-button') {
        menu.style.left = '-250px';
        menuOpen = false;
    }
});

function toggleMenu() {
    if (menuOpen) {
        menu.style.left = '-250px';
    } else {
        menu.style.left = '0';
    }
    menuOpen = !menuOpen;
}

// Запрет долгого нажатия
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
