/* Кнопка открытия меню */
.menu-toggle {
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 30px;
    color: #333;
    cursor: pointer;
    z-index: 100;
    display: block;
}

/* Кнопка закрытия меню */
.menu-close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: white;
    cursor: pointer;
    z-index: 101;
    display: none; /* По умолчанию скрыта, отображаем только при открытии меню */
}

/* Основные стили для бокового меню */
.sidebar {
    position: fixed;
    top: 0;
    left: -250px; /* Скрыто по умолчанию */
    width: 250px;
    height: 100%;
    background-color: #333;
    transition: left 0.3s ease;
    z-index: 10;
}

.sidebar.active {
    left: 0; /* Показ меню */
}

@media (max-width: 768px) {
    .sidebar {
        width: 80%;
    }
}
