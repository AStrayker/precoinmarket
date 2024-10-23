document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const menuClose = document.querySelector('.menu-close');
    const menuOverlay = document.querySelector('.menu-overlay');

    // Открыть меню
    menuToggle.addEventListener('click', function () {
        sidebar.classList.add('open');
        menuOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запретить прокрутку страницы
    });

    // Закрыть меню при клике на кнопку закрытия
    menuClose.addEventListener('click', function () {
        sidebar.classList.remove('open');
        menuOverlay.style.display = 'none';
        document.body.style.overflow = ''; // Восстановить прокрутку страницы
    });

    // Закрыть меню при клике на overlay
    menuOverlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        menuOverlay.style.display = 'none';
        document.body.style.overflow = ''; // Восстановить прокрутку страницы
    });
});
