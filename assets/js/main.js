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
const mobileMenu = document.getElementById('mobile-menu');
const menuButton = document.getElementById('menu-button');

function toggleMenu() {
    if (menuOpen) {
        mobileMenu.style.left = '-250px'; // Скрываем меню
    } else {
        mobileMenu.style.left = '0'; // Показываем меню
    }
    menuOpen = !menuOpen;
}

// Запрет долгого нажатия для копирования контента
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Адаптация: Если экран шире 1024px, показываем горизонтальное меню
function checkScreenWidth() {
    if (window.innerWidth >= 1024) {
        // Меню постоянно видно, отключаем скрытие
        mobileMenu.style.left = '-250px';
        menuButton.style.display = 'none'; // Прячем кнопку для ПК
    } else {
        menuButton.style.display = 'block'; // Показываем кнопку для мобильных
    }
}

window.addEventListener('resize', checkScreenWidth);
document.addEventListener('DOMContentLoaded', checkScreenWidth);
