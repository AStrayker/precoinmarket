// Отключаем контекстное меню
document.addEventListener('contextmenu', event => event.preventDefault());

// Плавная прокрутка вверх
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Показ кнопки вверх при прокрутке вниз
window.onscroll = function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const menuOverlay = document.getElementById('menu-overlay');
    const body = document.body;

    // Открытие/закрытие меню по клику на кнопку
    menuToggle.addEventListener('click', function() {
        body.classList.toggle('menu-open');
    });

    // Закрытие меню при клике на overlay
    menuOverlay.addEventListener('click', function() {
        body.classList.remove('menu-open');
    });
});
