// Загрузка баннера
document.addEventListener('DOMContentLoaded', function() {
    fetch('banner.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('banner').innerHTML = data;
        });
});

// Выдвижение меню для мобильных устройств
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

// Запрет долгого нажатия для копирования контента (мобильные и ПК устройства)
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Адаптация: Если экран шире 1024px, отключаем выдвижение меню (ПК версия)
function checkScreenWidth() {
    if (window.innerWidth >= 1024) {
        // Меню постоянно видно, выключаем возможность его скрытия
        menu.style.left = '0';
        content.style.marginLeft = '320px';
        menuOpen = true;
    } else {
        // В мобильной версии меню выдвигается/скрывается
        menu.style.left = '-250px';
        content.style.marginLeft = '0';
        menuOpen = false;
    }
}

window.addEventListener('resize', checkScreenWidth);
document.addEventListener('DOMContentLoaded', checkScreenWidth);
