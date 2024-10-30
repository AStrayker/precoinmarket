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

// Функция для подгрузки контента
function loadContent(page) {
    const contentArea = document.getElementById('content-area');
    // Пример загрузки контента (здесь нужно будет добавить серверные функции или хранить HTML в виде отдельных файлов)
    contentArea.innerHTML = `<p>Загружен контент для страницы: ${page}</p>`;
}
