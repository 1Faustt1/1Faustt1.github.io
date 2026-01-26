// ========================================
// Слушатель события поиска по ID задания
// ========================================
// Инициализирует слушатель для поля поиска по ID
// Логика поиска находится в filters/search.js

export function initSearchListener() {
    // Получаем поле ввода для поиска по ID
    const idSearchInput = document.getElementById("id-search-input") // по id находится поле ввода
    
    // Слушаем изменение в поле ввода и вызываем функцию поиска
    idSearchInput.addEventListener('input', () => {
        window.searchById()
    })
}

