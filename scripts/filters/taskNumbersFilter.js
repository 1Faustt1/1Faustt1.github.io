// ========================================
// РАБОТА С НОМЕРАМИ ЗАДАНИЙ В ФИЛЬТРЕ
// ========================================

// Создаёт один option для выпадающего списка номеров заданий
function createFilterOption(value) {
    const option = document.createElement('option')
    option.className = 'main__tasks-card-module-filter-form-number-of-oge-select-option'
    option.value = String(value)
    option.textContent = String(value)
    return option
}

// Заполняет select с id="filter-select" списком номеров заданий
function fillFilterSelect(taskNumbers) {
    const filterSelect = document.getElementById('filter-select')
    if (!filterSelect) return

    const previousValue = filterSelect.value
    filterSelect.innerHTML = ''
    filterSelect.appendChild(createFilterOption('all'))
    filterSelect.options[0].textContent = 'Выбор'

    taskNumbers.forEach((taskNumber) => {
        filterSelect.appendChild(createFilterOption(taskNumber))
    })

    const hasPreviousValue = taskNumbers.some((taskNumber) => String(taskNumber) === previousValue)
    filterSelect.value = hasPreviousValue ? previousValue : 'all'
}

// Возвращает уникальные номера заданий из уже отфильтрованных задач предмета
function getTaskNumbersFromCurrentTasks(currentTasks) {
    return [...new Set(currentTasks.map((task) => String(task.number_of_oge)))]
        .sort((a, b) => Number(a) - Number(b))
}

// Инициализирует список номеров в фильтре:
// 1) пытается взять данные из subjects.json
// 2) если не получилось — использует номера из текущих задач (fallback)
export async function initTaskNumbersFilter(subjectId, currentTasks) {
    try {
        const response = await fetch('../json/oge/subjects.json')
        if (!response.ok) throw new Error('subjects.json is unavailable')

        const subjectsData = await response.json()
        const currentSubject = subjectsData.subjects.find((subject) => subject.id === subjectId)
        if (!currentSubject) throw new Error('subject not found')

        const hasCount = Number.isInteger(currentSubject.count_of_tasks) && currentSubject.count_of_tasks > 0
        const taskNumbers = hasCount
            ? Array.from({ length: currentSubject.count_of_tasks }, (_, index) => String(index + 1))
            : Array.isArray(currentSubject.tasks)
                ? currentSubject.tasks
                : []

        if (taskNumbers.length === 0) throw new Error('task numbers not found')

        fillFilterSelect(taskNumbers)
    } catch (error) {
        fillFilterSelect(getTaskNumbersFromCurrentTasks(currentTasks))
    }
}
