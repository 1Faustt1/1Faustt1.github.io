// ========================================
// Функции работы с LocalStorage
// ========================================
// Этот модуль содержит функции для синхронизации и обновления данных в localStorage

// Загружает сохранённые статусы решения и избранного для каждого задания

export function syncWithLS(tasks) {
    const taskStatuses = document.getElementsByClassName("main__tasks-card-footer-status-color") // из карточки достается значение решения (решено или нет)
    const favoriteButtons = document.getElementsByClassName("main__tasks-card-footer-favorite") // по классу находим кнопки избранного
    let savedTasks = []
    try {
        savedTasks = JSON.parse(localStorage.getItem('tasks')) ?? []
    } catch (e) {
        console.error(e)
    }
    if (!savedTasks) {
        return tasks;
    }
    return [...tasks].map((task, i) => {
        const savedTask = savedTasks.find(s => s.id === task.id)
        if (savedTask) {
            const resultTask = {
                ...structuredClone(task),
                is_solved: savedTask.is_solved,
                is_favorite: savedTask.is_favorite,
            }
            window.updateIsSolvedUI(taskStatuses[i], resultTask.is_solved)
            window.updateFavoriteUI(favoriteButtons[i], resultTask.is_favorite)
            return resultTask
        }
        return structuredClone(task)
    })
}

// Обновляем статус решения и избанного в задании
export function updateTask(tasks, task) {

    let savedTasks = []
    try {
        savedTasks = JSON.parse(localStorage.getItem('tasks')) ?? []
    } catch (e) {
        console.error(e)
    }
    const tasksWithoutCurrent = savedTasks.filter(s => s.id !== task.id)

    const taskToSave = {
        id: task.id,
        is_solved: task.is_solved,
        is_favorite: task.is_favorite,
    }

    tasksWithoutCurrent.push(taskToSave)
    localStorage.setItem('tasks', JSON.stringify(tasksWithoutCurrent))
}
