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
const menuButton = document.getElementById('menu-button');

function toggleMenu() {
    if (menuOpen) {
        menu.style.left = '-250px'; // Скрываем меню
    } else {
        menu.style.left = '0'; // Показываем меню
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
        // Меню постоянно видно, отключаем скрытие
        menu.style.left = '0';
        menuOpen = true;
        menuButton.style.display = 'none'; // Прячем кнопку для ПК
    } else {
        // В мобильной версии меню скрывается
        menu.style.left = '-250px';
        menuOpen = false;
        menuButton.style.display = 'block'; // Показываем кнопку для мобильных
    }
}

window.addEventListener('resize', checkScreenWidth);
document.addEventListener('DOMContentLoaded', checkScreenWidth);
