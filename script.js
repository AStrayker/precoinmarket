// Функция для открытия и закрытия меню
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.style.left === '0px') {
        menu.style.left = '-250px';
    } else {
        menu.style.left = '0';
    }
}

// Пример данных для монет
const coins = [
    {
        name: "Bitcoin",
        logo: "btc-logo.png",
        avgPrice: 40000,
        bots: ["Bot 1", "Bot 2"],
        exchanges: [
            { name: "Binance", price: 39950 },
            { name: "Coinbase", price: 40010 }
        ],
        socials: {
            telegram: "https://t.me/bitcoin",
            twitter: "https://twitter.com/bitcoin"
        },
        listingDate: "2024-10-10"
    },
    // Добавь другие монеты по аналогии
];

// Функция для отображения списка монет
function displayCoins() {
    const coinsList = document.getElementById('coins-list');
    coins.forEach(coin => {
        const coinItem = document.createElement('div');
        coinItem.classList.add('coin-item');
        coinItem.innerHTML = `
            <img src="${coin.logo}" alt="${coin.name}" width="40">
            <span>${coin.name}</span>
            <span>Средняя цена: ${coin.avgPrice} USDT</span>
            <button onclick="showBotInfo('${coin.name}')">Бот</button>
            <button onclick="showExchangeInfo('${coin.name}')">Биржи</button>
            <button onclick="showSocials('${coin.name}')">Соцсети</button>
            <button onclick="copyLink('${coin.name}')">Скопировать ссылку</button>
        `;
        coinsList.appendChild(coinItem);
    });
}

function showBotInfo(coinName) {
    alert(`Информация о ботах для ${coinName}`);
}

function showExchangeInfo(coinName) {
    alert(`Информация о биржах для ${coinName}`);
}

function showSocials(coinName) {
    alert(`Соцсети для ${coinName}`);
}

function copyLink(coinName) {
    alert(`Ссылка на ${coinName} скопирована!`);
}

// Функция для конвертации
function convert() {
    const amount = document.getElementById('coin-amount').value;
    const result = amount * 40000; // Пример расчета
    document.getElementById('result').innerText = `Стоимость: ${result} USDT`;
}

// Вызов функции отображения монет
displayCoins();
