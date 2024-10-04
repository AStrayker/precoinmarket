// Открытие и закрытие модального окна
document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Анимация для выдвижения меню
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Загрузка контента для баннера
fetch('banner.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('banner').innerHTML = data;
    });

// Загрузка контента для модального окна
fetch('modal-content.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.modal-content').innerHTML += data;
    });

// Отключение возможности долгого нажатия для контента
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
