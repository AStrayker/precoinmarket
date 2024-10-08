// Функция для открытия и закрытия мобильного меню
function toggleMenu() {
    const menuContent = document.getElementById('menu-content');
    if (menuContent.style.display === 'flex') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'flex';
    }
}

// Функция для загрузки контента с других страниц
function loadPage(page) {
    fetch('content/' + page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        });
}

// Загрузка баннера при старте
fetch('content/banner.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('banner').innerHTML = data;
    });
