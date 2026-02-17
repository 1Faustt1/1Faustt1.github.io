// ========================================
// Слушатель для проверки ответов на задания
// ========================================

export function initAnswerCheckerListeners(tasks) {
    const answerInputs = document.getElementsByClassName("main__tasks-card-input") // по классу находим поля ввода карточки
    const inputValues = new Array(answerInputs.length).fill('') // создается пустой список длиной равной количеству полей ввода
    const answerButtons = document.getElementsByClassName("main__tasks-card-btn") // по классу находим кнопки отправки ответа
    const taskStatuses = document.getElementsByClassName("main__tasks-card-footer-status-color") // из карточки достается значение решения (решено или нет)
    for (let i = 0; i < inputValues.length; i++) { // слушание каждого поля ввода
        answerInputs[i].addEventListener('input', (event) => {
            inputValues[i] = event.target.value
        })
        answerButtons[i].addEventListener('click', (event) => { // // при клике проверяем ответ пользователя и обновляем статус задания
            const isSolved = inputValues[i].toLowerCase().trim() === tasks[i].correct_answer.toLowerCase().trim()
            if (isSolved) {
                window.updateTask(tasks, {
                    ...tasks[i],
                    is_solved: true,
                })
                window.updateIsSolvedUI(taskStatuses[i], true)
            } else {
                window.updateTask(tasks, {
                    ...tasks[i],
                    is_solved: false,
                })
                window.updateIsSolvedUI(taskStatuses[i], false)
            }
            tasks[i].is_solved = isSolved
            const sourceTask = window.currentSubjectTasks.find((task) => task.id === tasks[i].id)
            if (sourceTask) {
                sourceTask.is_solved = isSolved
            }
            if (typeof window.filterListener === 'function') {
                window.filterListener()
            }
        })
    }
}

