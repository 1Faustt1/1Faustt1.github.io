import { getTaskTheme } from '../data/taskTopics.js'

function getAnswerTypeLabel(option) {
    if (option === 'input') return 'Краткий ответ (ввод с клавиатуры)'
    if (option === 'select') return 'Выбор из вариантов'
    if (option === 'none') return 'Развернутый/устный ответ'
    return 'Не указан'
}

function getAdditionalTableMarkup(tableData) {
    if (!Array.isArray(tableData) || tableData.length === 0) return ''

    const rows = tableData
        .map((row) => {
            if (!Array.isArray(row)) return ''
            const cells = row.map((cell) => `<td>${cell}</td>`).join('')
            return `<tr>${cells}</tr>`
        })
        .join('')

    if (!rows) return ''

    return `
        <div class="t--main__tasks-card-additional-table-wrap">
            <table class="t--main__tasks-card-additional-table">
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `
}

export function render(tasks) {
    const templateCard = document.getElementById('template-card')
    const tasksContainer = document.getElementById('tasks-container')
    const tasksCount = document.getElementById('tasks-count')
    tasksContainer.innerHTML = ''
    if (tasksCount) {
        tasksCount.textContent = `Отображено задач: ${tasks.length}`
    }

    for (let i = 0; i < tasks.length; i++) {
        const card = templateCard.cloneNode(true)
        const moduleInfo = card.querySelector('.t--main__tasks-card-module-info')

        card.classList.remove('hidden')
        card.childNodes[1].innerHTML = tasks[i].name
        card.childNodes[3].innerHTML = tasks[i].description
        card.childNodes[7].childNodes[1].childNodes[1].innerHTML = 'Номер: ' + tasks[i].id

        const descriptionElem = card.querySelector('.t--main__tasks-card-description')
        if (descriptionElem) {
            descriptionElem.insertAdjacentHTML('afterend', getAdditionalTableMarkup(tasks[i].additional_description_table))
        }

        const taskTheme = getTaskTheme(tasks[i].subject_id, tasks[i].number_of_oge)
        const answerType = getAnswerTypeLabel(tasks[i].option)

        moduleInfo.insertAdjacentHTML('beforeend', `
            <div class="t--main__tasks-card-module-info-content">
                <p><b>Номер задания из КИМ:</b> ${tasks[i].number_of_oge}</p>
                <p><b>Тема задания:</b> ${taskTheme}</p>
                <p><b>Тип ответа:</b> ${answerType}</p>
            </div>
        `)

        card.innerHTML = card.innerHTML.replaceAll('t--', '')

        const renderedInput = card.querySelector('.main__tasks-card-input')
        const renderedBtn = card.querySelector('.main__tasks-card-btn')

        if (tasks[i].option === 'none') {
            if (renderedInput) renderedInput.style.display = 'none'
            if (renderedBtn) {
                renderedBtn.textContent = 'Изменить статус'
                renderedBtn.classList.add('main__tasks-card-btn_none')
            }
        }

        tasksContainer.appendChild(card)
    }
}
