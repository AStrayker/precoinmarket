// Открытие/закрытие бокового меню
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('open');
}

// Копирование ссылки на сайт
function copyLink() {
    const dummy = document.createElement('textarea');
    dummy.value = window.location.href;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Ссылка скопирована!');
}

// Пример данных монет (вы можете позже заменить их на реальные данные)
const coins = [
    {name: "Bitcoin", price: [40000, 40500, 41000], listingDate: "2024-10-10"},
    {name: "Ethereum", price: [2500, 2600, 2550], listingDate: "2024-10-12"}
];

// Загрузка списка монет
function loadCoins() {
    const coinList = document.getElementById('coinList');
    coins.forEach(coin => {
        const avgPrice = coin.price.reduce((a, b) => a + b) / coin.price.length;
        const coinElement = `
            <div class="coin">
                <img src="logo.png" alt="Логотип монеты" />
                <span>${coin.name}</span>
                <span>Средняя цена: $${avgPrice.toFixed(2)}</span>
                <span>Дата листинга: ${coin.listingDate}</span>
            </div>
        `;
        coinList.innerHTML += coinElement;
    });
}

// Конвертер монет
function calculate() {
    const coin = document.getElementById('coin').value;
    const exchange = document.getElementById('exchange').value;
    const amount = document.getElementById('amount').value;

    const coinData = coins.find(c => c.name === coin);
    const price = exchange === 'average'
        ? coinData.price.reduce((a, b) => a + b) / coinData.price.length
        : coinData.price[0]; // Например, цена на конкретной бирже

    const result = price * amount;
    document.getElementById('result').innerText = `Стоимость: ${result.toFixed(2)} USDT`;
}

// Инициализация сайта
window.onload = function() {
    loadCoins();
};
