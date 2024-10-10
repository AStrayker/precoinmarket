// Убираем контекстное меню
document.addEventListener('contextmenu', event => event.preventDefault());

// Прокрутка вверх
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Показ кнопки "Наверх"
window.onscroll = function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};
