// Функция для открытия/закрытия меню
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
}

// Функция для расчёта стоимости монет
function calculate() {
    const amount = document.getElementById('amount').value;
    const result = document.getElementById('result');
    // Пример простой логики для расчёта
    const price = 1.25; // Можно заменить на динамическое значение
    const total = amount * price;
    result.textContent = `Итоговая сумма: ${total} USDT`;
}

// Функция для копирования ссылки
function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Ссылка скопирована!');
}
