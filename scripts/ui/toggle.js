// ========================================
// Функции переключения видимости модальных окон
// ========================================

// Импортируем слушатель для фильтра
import {filterListener, filterReseter} from '../filters/filter.js'

// Переключает видимость окна фильтра
export function toggleFilter() { // функция выключения и выключения окна фильтра
    const filterBtnSearch = document.getElementById("filter-btn-search") // кнопка применение фильтра
    const filterBtnReset = document.getElementById("filter-btn-reset") // кнопка сброса фильтра
    const block = document.getElementById("module-filter") // окно фильтра на странице
    let isHidden = block.style.display === 'none' || block.style.display === ''

    if (isHidden) {
        block.style.display = 'flex'
        filterBtnSearch.addEventListener('click', filterListener)
        filterBtnReset.addEventListener('click', filterReseter)
    } else {
        block.style.display = 'none'
        filterBtnSearch.removeEventListener('click', filterListener)
        filterBtnReset.removeEventListener('click', filterReseter)
    }
}

// Переключает видимость модального окна информации о задании
export function toggleInfoModule(index) { // функция выключения и выключения окна информации в карточке
    const infoBlock = document.getElementsByClassName("main__tasks-card-module-info") // окно информации в карточке
    const block = infoBlock[index]
    let isHidden = block.style.display === 'none' || block.style.display === ''

    if (isHidden) {
        block.style.display = 'flex'
    } else {
        block.style.display = 'none'
    }
}

// Инициализирует слушатель для кнопки открытия фильтра
export function initFilterToggleListener() {
    const filterButton = document.getElementById("filter-btn") // кнопка фильтра на странице
    filterButton.addEventListener("click", () => { // слушание кнопки открытия окна фильтра
        toggleFilter();
    })
}
