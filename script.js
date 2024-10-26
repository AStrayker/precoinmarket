document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.createElement('div');
    const closeButton = document.createElement('div');

    // Кнопка открытия меню
    toggleButton.classList.add('menu-toggle');
    toggleButton.innerHTML = '☰';
    document.body.appendChild(toggleButton);

    // Кнопка закрытия меню
    closeButton.classList.add('menu-close');
    closeButton.innerHTML = '&times;';
    sidebar.appendChild(closeButton);  // Добавляем кнопку закрытия в меню

    // Открытие меню
    toggleButton.addEventListener('click', function() {
        sidebar.classList.add('active');
        toggleButton.style.display = 'none';  // Скрываем кнопку открытия
    });

    // Закрытие меню
    closeButton.addEventListener('click', function() {
        sidebar.classList.remove('active');
        toggleButton.style.display = 'block';  // Показываем кнопку открытия
    });

    // Закрытие меню при клике вне меню (клик по overlay)
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
            sidebar.classList.remove('active');
            toggleButton.style.display = 'block';  // Показываем кнопку открытия
        }
    });
});
