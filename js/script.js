// Элементы DOM
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.menu-backdrop');

// Открытие меню
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
    backdrop.classList.add('active');
});

// Закрытие меню по кнопке
menuClose.addEventListener('click', () => {
    sidebar.classList.remove('open');
    backdrop.classList.remove('active');
});

// Закрытие меню при клике на фон за пределами меню
backdrop.addEventListener('click', () => {
    sidebar.classList.remove('open');
    backdrop.classList.remove('active');
});
