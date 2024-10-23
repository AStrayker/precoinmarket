/* Основные стили */

body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.sidebar {
    position: fixed;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: #333;
    color: white;
    transition: left 0.3s ease-in-out;
    z-index: 1000;
    overflow: auto;
}

.menu-toggle {
    position: fixed;
    top: 15px;
    left: 15px;
    cursor: pointer;
    z-index: 1100;
}

.menu-toggle span {
    display: block;
    width: 30px;
    height: 4px;
    margin: 5px;
    background-color: black;
    transition: background-color 0.3s;
}

.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;
    transition: display 0.3s ease-in-out;
}

/* Кнопка для закрытия меню */
.close-btn {
    display: block;
    margin: 20px;
    padding: 10px;
    background-color: #ff0000;
    color: white;
    border: none;
    cursor: pointer;
}

.menu-open .sidebar {
    left: 0;
}

.menu-open .menu-overlay {
    display: block;
}

/* Запрет контекстного меню для мобильных устройств */
body {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.content {
    padding: 20px;
    transition: margin-left 0.3s;
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
    .sidebar {
        width: 100%;
    }
}
