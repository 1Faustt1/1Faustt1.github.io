import { render } from '../ui/render.js'
import { syncWithLS } from '../storage/localStorage.js'
import { initAnswerCheckerListeners } from '../listeners/answers.js'
import { initInfoClickListeners } from '../listeners/info.js'
import { initFavoriteCheckerListeners } from '../listeners/favorites.js'

export const filterById = (tasks, id) => tasks.filter((task) => task.id.includes(id))

export const filterByNumberOfOge = (tasks, number) => tasks.filter((task) => String(task.number_of_oge) === String(number))

export const filterByFavorite = (tasks, isFavorite = null) => {
    if (isFavorite === null) {
        return [...tasks]
    }
    return tasks.filter((task) => task.is_favorite === isFavorite)
}

// true  -> only correct
// false -> not solved yet (false + null)
export const filterBySolved = (tasks, isSolved = null) => {
    if (isSolved === null) {
        return [...tasks]
    }

    if (isSolved === true) {
        return tasks.filter((task) => task.is_solved === true)
    }

    return tasks.filter((task) => task.is_solved !== true)
}

export function filterListener() {
    const filterSelect = document.getElementById('filter-select')
    const filterSolved = document.querySelector('input[name="isSolved"]:checked')
    const filterFavorite = document.querySelector('input[name="isFavorite"]:checked')

    const filterSelectValue = filterSelect.value

    let filterSolvedValue = filterSolved.value
    if (filterSolvedValue === 'all') {
        filterSolvedValue = null
    } else if (filterSolvedValue === 'true') {
        filterSolvedValue = true
    } else {
        filterSolvedValue = false
    }

    let filterFavoriteValue = filterFavorite.value
    if (filterFavoriteValue === 'all') {
        filterFavoriteValue = null
    } else if (filterFavoriteValue === 'true') {
        filterFavoriteValue = true
    } else {
        filterFavoriteValue = false
    }

    window.filteredTasks = filterSelectValue === 'all'
        ? structuredClone(window.currentSubjectTasks)
        : filterByNumberOfOge(window.currentSubjectTasks, filterSelectValue)

    window.filteredTasks = filterBySolved(window.filteredTasks, filterSolvedValue)
    window.filteredTasks = filterByFavorite(window.filteredTasks, filterFavoriteValue)

    render(window.filteredTasks)
    window.filteredTasks = syncWithLS(window.filteredTasks)
    initAnswerCheckerListeners(window.filteredTasks)
    initInfoClickListeners()
    initFavoriteCheckerListeners(window.filteredTasks)
}

export function filterReseter() {
    window.filteredTasks = structuredClone(window.currentSubjectTasks)
    render(window.filteredTasks)
    window.filteredTasks = syncWithLS(window.filteredTasks)
    initAnswerCheckerListeners(window.filteredTasks)
    initInfoClickListeners()
    initFavoriteCheckerListeners(window.filteredTasks)
}