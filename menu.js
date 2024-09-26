// Открытие и закрытие шторки меню
const menu = document.querySelector('.menu');
document.querySelector('#menu-button').addEventListener('click', () => {
  menu.style.left = '0';
});

document.querySelector('.social-icons img[alt="Закрыть"]').addEventListener('click', () => {
  menu.style.left = '-250px';
});
