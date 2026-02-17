// LocalStorage sync/update helpers

function normalizeSolvedStatus(status) {
    if (status === true) return true
    if (status === false) return false
    return null
}

export function syncWithLS(tasks) {
    const taskStatuses = document.getElementsByClassName('main__tasks-card-footer-status-color')
    const favoriteButtons = document.getElementsByClassName('main__tasks-card-footer-favorite')

    let savedTasks = []
    try {
        savedTasks = JSON.parse(localStorage.getItem('tasks')) ?? []
    } catch (e) {
        console.error(e)
    }

    if (!savedTasks) {
        return tasks
    }

    return [...tasks].map((task, i) => {
        const savedTask = savedTasks.find((s) => s.id === task.id)

        if (savedTask) {
            const resultTask = {
                ...structuredClone(task),
                is_solved: normalizeSolvedStatus(savedTask.is_solved),
                is_favorite: savedTask.is_favorite,
            }

            window.updateIsSolvedUI(taskStatuses[i], resultTask.is_solved)
            window.updateFavoriteUI(favoriteButtons[i], resultTask.is_favorite)
            return resultTask
        }

        const resultTask = {
            ...structuredClone(task),
            is_solved: normalizeSolvedStatus(task.is_solved),
        }

        window.updateIsSolvedUI(taskStatuses[i], resultTask.is_solved)
        window.updateFavoriteUI(favoriteButtons[i], resultTask.is_favorite)
        return resultTask
    })
}

export function updateTask(tasks, task) {
    let savedTasks = []
    try {
        savedTasks = JSON.parse(localStorage.getItem('tasks')) ?? []
    } catch (e) {
        console.error(e)
    }

    const tasksWithoutCurrent = savedTasks.filter((s) => s.id !== task.id)

    const taskToSave = {
        id: task.id,
        is_solved: normalizeSolvedStatus(task.is_solved),
        is_favorite: task.is_favorite,
    }

    tasksWithoutCurrent.push(taskToSave)
    localStorage.setItem('tasks', JSON.stringify(tasksWithoutCurrent))
}