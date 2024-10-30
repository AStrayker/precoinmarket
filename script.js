function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Ошибка загрузки страницы:', error));
}

// Загрузка домашней страницы при загрузке сайта
document.addEventListener("DOMContentLoaded", function() {
    loadContent('pages/home.html');
});
