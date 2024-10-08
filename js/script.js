// Пример скрипта для динамической загрузки контента
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.textContent;
        loadContent(category);
    });
});

function loadContent(category) {
    // Здесь можешь подгружать контент из других файлов (используй fetch)
    document.querySelector('#main-content').innerHTML = `<p>Загружен контент для категории: ${category}</p>`;
}

// Пример подгрузки баннера
fetch('banner.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#banner').innerHTML = data;
    });
