// Открытие/закрытие мобильного меню
document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('open');
});

// Загрузка контента из JSON файлов
document.querySelectorAll('a[data-category]').forEach(link => {
    link.addEventListener('click', function() {
        let category = this.getAttribute('data-category');
        fetch(`data/${category}.json`)
            .then(response => response.json())
            .then(data => {
                let contentSection = document.getElementById('content');
                contentSection.innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`;
            })
            .catch(error => console.error('Ошибка загрузки данных:', error));
    });
});

// Блокировка долгого нажатия на мобильных устройствах
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('touchstart', function(event) {
    event.preventDefault();
});
