document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const menuOverlay = document.getElementById('menu-overlay');
    const body = document.body;

    // Открытие/закрытие меню по клику на кнопку
    menuToggle.addEventListener('click', function() {
        if (body.classList.contains('menu-open')) {
            body.classList.remove('menu-open');
        } else {
            body.classList.add('menu-open');
        }
    });

    // Закрытие меню при клике на overlay
    menuOverlay.addEventListener('click', function() {
        body.classList.remove('menu-open');
    });
});
