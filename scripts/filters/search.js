// ========================================
// Функция поиска заданий по ID
// ========================================
// Ищет задания по частичному совпадению ID и скрывает/показывает карточки

import {filterById} from "./filter.js";
import {render} from "../ui/render.js";
import {syncWithLS} from "../storage/localStorage.js";
import { initAnswerCheckerListeners } from '../listeners/answers.js'
import { initInfoClickListeners } from '../listeners/info.js'
import { initFavoriteCheckerListeners } from '../listeners/favorites.js'

export function searchById() { // функция поиска задания по его ID
    const idSearchInput = document.getElementById("id-search-input") // по id находится поле ввода
    const foundTask = idSearchInput.value.trim() // берем значение из поля ввода

    if (foundTask === '') {
        window.filteredTasks = structuredClone(window.currentSubjectTasks)
        render(window.filteredTasks)
        window.filteredTasks = syncWithLS(window.filteredTasks)
        initAnswerCheckerListeners(window.filteredTasks)
        initInfoClickListeners()
        initFavoriteCheckerListeners(window.filteredTasks)
    } else {
        window.filteredTasks = filterById(window.filteredTasks, foundTask)
        render(window.filteredTasks)
        window.filteredTasks = syncWithLS(window.filteredTasks)
        initAnswerCheckerListeners(window.filteredTasks)
        initInfoClickListeners()
        initFavoriteCheckerListeners(window.filteredTasks)
    }
}
