// ========================================
// Функция отрендеривания карточек заданий на странице
// ========================================

import { getTaskTheme } from '../data/taskTopics.js'

function getAnswerTypeLabel(option) {
    if (option === 'input') return 'Краткий ответ (ввод с клавиатуры)'
    if (option === 'select') return 'Выбор из вариантов'
    if (option === 'none') return 'Развернутый/устный ответ'
    return 'Не указан'
}

export function render(tasks) {
    // Получаем шаблон карточки и контейнер для размещения карточек
    const templateCard = document.getElementById("template-card") // по id находится шаблон карточки
    const tasksContainer = document.getElementById("tasks-container") // по id находится блок где будут находиться все карточки с заданиями
    tasksContainer.innerHTML = ''
    // Проходим по всем заданиям и создаём карточку для каждого
    for (let i = 0; i < tasks.length; i++) { // пока все задания не обработаются цикл работает
        const card = templateCard.cloneNode(true) // копируется шаблон карточки
        const input = card.querySelector('.t--main__tasks-card-input') // берется поле ввода карточка
        const btn = card.querySelector('.t--main__tasks-card-btn') // берется кнопка ответить из карточки
        const moduleInfo = card.querySelector('.t--main__tasks-card-module-info')

        card.classList.remove("hidden") // убираем класс hidden, чтобы отобразить карточку
        card.childNodes[1].innerHTML = tasks[i].name // вписывается заголовок
        card.childNodes[3].innerHTML = tasks[i].description // вписывается описание (само задание)
        card.childNodes[7].childNodes[1].childNodes[1].innerHTML = "Номер: " + tasks[i].id // вписывается идентификационный номер задания
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
        tasksContainer.appendChild(card) // готовая карточка добавляется в блок

        // вариации ответа на задание
        if (tasks[i].option === "none") {
            if (input) input.style.display = "none"
            btn.textContent = "Изменить статус";
            btn.classList.add("main__tasks-card-btn_none")
        } else if (tasks[i].options === "select") {

        }
    }
    // tasksContainer.removeChild(templateCard) // со страницы убирается шаблон карточки
}
