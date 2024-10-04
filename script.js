// Открытие и закрытие модального окна
document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Загрузка контента в баннер
fetch('banner.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('banner').innerHTML = data;
    });

// Загрузка контента в модальное окно
fetch('modal-content.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.modal-content').innerHTML += data;
    });

// Функция для открытия и закрытия меню на мобильной версии
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
}

// Отключение долгого нажатия (копирование/вставка)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
