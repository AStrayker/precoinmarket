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
        name: "CATI",
        logo: "https://s1.bycsi.com/app/assets/token/eea1aac00e0c1c40aec44397cb0f741c.png", // URL логотипа
        avgPrice: 0.76,
        bots: ["Bot 1", "Bot 2"],
        exchanges: [
            { name: "Binance", price: 0.75 },
            { name: "Coinbase", price: 0.76 }
        ],
        socials: {
            telegram: "https://t.me/cati",
            twitter: "https://twitter.com/cati"
        },
        listingDate: "2024-10-10"
    },
    // Добавь другие монеты по аналогии
];

// Функция для отображения списка монет в таблице
function displayCoins() {
    const coinsTbody = document.getElementById('coins-tbody');
    coins.forEach(coin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${coin.logo}" alt="${coin.name}"></td>
            <td>${coin.avgPrice} USDT</td>
            <td><button onclick="showBotInfo('${coin.name}')">Бот</button></td>
            <td><button onclick="showExchangeInfo('${coin.name}')">Список бирж</button></td>
            <td>${coin.listingDate}</td>
            <td><button onclick="copyLink('${coin.name}')">Поделиться токеном</button></td>
            <td id="last-trade-price-${coin.name}">Загрузка...</td> <!-- Ячейка для последней цены -->
        `;
        coinsTbody.appendChild(row);
    });
}

// Функции для кнопок
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
    const url = `${window.location.origin}?token=${coinName}`;
    navigator.clipboard.writeText(url).then(() => {
        alert(`Ссылка на ${coinName} скопирована!`);
    }).catch(err => {
        alert('Ошибка при копировании ссылки: ', err);
    });
}

// Функция для конвертации
function convert() {
    const amount = document.getElementById('coin-amount').value;
    const selectedCoin = document.getElementById('coin-select').value;
    let price;

    if (selectedCoin === 'average') {
        // Используем среднюю цену
        const selectedCoinObj = coins.find(coin => coin.name === "CATI"); // Измени по необходимости
        price = selectedCoinObj.avgPrice;
    } else {
        // Используем цену выбранной биржи
        // Добавь логику для выбора биржи
        price = 0.76; // Пример
    }

    const result = amount * price;
    document.getElementById('result').innerText = `Стоимость: ${result} USDT`;
}

// Функция для получения последней цены сделки с Bybit
async function fetchLastTradePrice(coinName) {
    const apiUrl = `https://api.bybit.com/spot/quote/v1/ticker/24hr?symbol=${coinName}USDT`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.result && data.result.lastPrice && data.result.priceChangePercent) {
            const lastPrice = parseFloat(data.result.lastPrice).toFixed(3);
            const priceChangePercent = parseFloat(data.result.priceChangePercent).toFixed(2);

            // Определяем класс для изменения цвета текста в зависимости от изменения цены
            const changeClass = priceChangePercent >= 0 ? 'Traders_quoteChangeUp__XYZ' : 'Traders_quoteChangeDown__ABC';

            // Обновляем HTML элемента
            document.getElementById(`last-trade-price-${coinName}`).innerHTML = `
                ${lastPrice} USDT&nbsp;<span class="${changeClass}">(${priceChangePercent}%)</span>
            `;
        } else {
            document.getElementById(`last-trade-price-${coinName}`).innerText = 'Данные недоступны';
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        document.getElementById(`last-trade-price-${coinName}`).innerText = 'Ошибка загрузки';
    }
}

// Функция для обновления цен всех монет
function updateAllPrices() {
    coins.forEach(coin => {
        fetchLastTradePrice(coin.name);
    });
}

// Вызов функции отображения монет
displayCoins();

// Вызов функции обновления цен при загрузке страницы
updateAllPrices();

// Устанавливаем периодическое обновление цен каждые 60 секунд
setInterval(updateAllPrices, 60000); // 60000 миллисекунд = 60 секунд
