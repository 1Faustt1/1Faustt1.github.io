// ========================================
// ИМПОРТ МОДУЛЕЙ
// ========================================

// Импорт базы данных с заданиями
import { tasksDataJson } from './data/database.js'

// Импорт функций работы с LocalStorage
import { syncWithLS, updateTask } from './storage/localStorage.js'

// Импорт функций отрендеривания
import { render } from './ui/render.js'
import { updateIsSolvedUI, updateFavoriteUI } from './ui/updateUI.js'
import { toggleInfoModule } from './ui/toggle.js'

// Импорт функций-слушателей
import { initAnswerCheckerListeners } from './listeners/answers.js'
import { initInfoClickListeners } from './listeners/info.js'
import { initFavoriteCheckerListeners } from './listeners/favorites.js'
import { initSearchListener } from './listeners/search.js'
import { initFilterListener } from './listeners/filter.js'
import { initGeneratorListener } from './listeners/generator.js'
import { initWindowListener } from './listeners/window.js'

// Импорт функций поиска по ID и слушателя фильтра
import { searchById } from './filters/search.js'
import { filterListener } from './filters/filter.js'
import { initTaskNumbersFilter } from './filters/taskNumbersFilter.js'

// Эти функции доступны из других модулей через window
// TODO: убрать window и в каждом файле делать отдельные импорты функций
window.updateTask = updateTask
window.updateIsSolvedUI = updateIsSolvedUI
window.updateFavoriteUI = updateFavoriteUI
window.toggleInfoModule = toggleInfoModule
window.searchById = searchById
window.filterListener = filterListener


// ========================================
// ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
// ========================================

// Получаем данные заданий из базы данных
const tasksData = JSON.parse(tasksDataJson).tasks

// Получаем ID предмета из URL параметров
const subjectId = new URLSearchParams(window.location.search).get('subjectId')

// Получаем элемент заголовка страницы
const subjectTitle = document.getElementById('subjectTitle')

// Фильтруем задания по выбранному предмету
window.currentSubjectTasks = tasksData.filter((task) => {
    return task.subject_id === subjectId
})

// Отрендериваем все карточки на странице
render(window.currentSubjectTasks)

// Синхронизируем с сохранёнными данными из LocalStorage
window.currentSubjectTasks = syncWithLS(window.currentSubjectTasks)

// Создаём копию для отображения (будет изменяться при фильтрации)
window.filteredTasks = structuredClone(window.currentSubjectTasks)

// Устанавливаем название предмета в заголовок
if (window.filteredTasks.length > 0) {
    subjectTitle.innerHTML = window.filteredTasks[0].subject
}

// Инициализируем список номеров заданий в фильтре под текущий предмет
initTaskNumbersFilter(subjectId, window.currentSubjectTasks)


// console.log(window.filteredTasks, window.currentSubjectTasks)
// Инициализируем все слушатели событий
initAnswerCheckerListeners(window.filteredTasks)
initInfoClickListeners()
initFavoriteCheckerListeners(window.filteredTasks)
initSearchListener()
initFilterListener()
initGeneratorListener()

initWindowListener()
