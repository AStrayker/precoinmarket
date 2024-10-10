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
