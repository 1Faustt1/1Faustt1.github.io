// ========================================
// Слушатель событий кнопок фильтра
// ========================================

import { filterListener, filterReseter } from '../filters/filter.js'

export function initFilterListener() {
    const filterBtnSearch = document.getElementById('filter-btn-search')
    const filterBtnReset = document.getElementById('filter-btn-reset')

    if (filterBtnSearch) {
        filterBtnSearch.addEventListener('click', filterListener)
    }

    if (filterBtnReset) {
        filterBtnReset.addEventListener('click', filterReseter)
    }
}
