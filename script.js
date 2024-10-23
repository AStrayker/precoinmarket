document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const menuOverlay = document.getElementById('menu-overlay');
    const body = document.body;

    // Открытие меню
    menuToggle.addEventListener('click', function() {
        body.classList.add('menu-open');
    });

    // Закрытие меню по клику на кнопку "Закрыть"
    closeBtn.addEventListener('click', function() {
        body.classList.remove('menu-open');
    });

    // Закрытие меню по клику на overlay
    menuOverlay.addEventListener('click', function() {
        body.classList.remove('menu-open');
    });

    // Запрет контекстного меню на мобильных устройствах
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
});
