// Скрипт для открытия/закрытия боковой панели в мобильной версии
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
});
