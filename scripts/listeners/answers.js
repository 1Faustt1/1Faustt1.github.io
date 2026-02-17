// Answer-check listeners

export function initAnswerCheckerListeners(tasks) {
    const answerInputs = document.getElementsByClassName('main__tasks-card-input')
    const inputValues = new Array(answerInputs.length).fill('')
    const answerButtons = document.getElementsByClassName('main__tasks-card-btn')
    const taskStatuses = document.getElementsByClassName('main__tasks-card-footer-status-color')

    for (let i = 0; i < inputValues.length; i++) {
        answerInputs[i].addEventListener('input', (event) => {
            inputValues[i] = event.target.value
        })

        answerButtons[i].addEventListener('click', () => {
            let nextSolvedStatus = null

            if (tasks[i].option === 'none') {
                nextSolvedStatus = true
            } else {
                const isSolved = inputValues[i].toLowerCase().trim() === tasks[i].correct_answer.toLowerCase().trim()
                nextSolvedStatus = isSolved
            }

            window.updateTask(tasks, {
                ...tasks[i],
                is_solved: nextSolvedStatus,
            })

            tasks[i].is_solved = nextSolvedStatus
            const sourceTask = window.currentSubjectTasks.find((task) => task.id === tasks[i].id)
            if (sourceTask) {
                sourceTask.is_solved = nextSolvedStatus
            }

            window.updateIsSolvedUI(taskStatuses[i], nextSolvedStatus)

            if (typeof window.filterListener === 'function') {
                window.filterListener()
            }
        })
    }
}
