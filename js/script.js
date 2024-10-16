// Скрипт для работы с выдвижным мобильным меню
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('open');
});
