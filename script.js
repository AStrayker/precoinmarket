// Открытие и закрытие бокового меню на мобильных устройствах
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.createElement('div');
    toggleButton.classList.add('menu-toggle');
    toggleButton.innerHTML = '☰';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});
