document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
});

// Пример данных о монетах
const coins = [
    { name: 'Монета A', averagePrice: 100 },
    { name: 'Монета B', averagePrice: 200 }
];

// Отображение списка монет
const coinList = document.getElementById('coin-list');
coins.forEach(coin => {
    const div = document.createElement('div');
    div.textContent = `${coin.name} - Средняя цена: ${coin.averagePrice} USDT`;
    coinList.appendChild(div);
});

// Заполнение селектора для конвертера
const coinSelector = document.getElementById('coin-selector');
coins.forEach(coin => {
    const option = document.createElement('option');
    option.value = coin.name;
    option.textContent = coin.name;
    coinSelector.appendChild(option);
});

// Расчет стоимости
document.getElementById('calculate').addEventListener('click', function() {
    const selectedCoin = coinSelector.value;
    const amount = document.getElementById('amount').value;

    const coin = coins.find(c => c.name === selectedCoin);
    
    if (coin && amount) {
        const totalValue = coin.averagePrice * amount;
        document.getElementById('result').textContent = `Стоимость: ${totalValue} USDT`;
    } else {
        document.getElementById('result').textContent = 'Пожалуйста, выберите монету и введите количество.';
    }
});