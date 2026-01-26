// ========================================
// Функция отрендеривания карточек заданий на странице
// ========================================

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

        card.classList.remove("hidden") // убираем класс hidden, чтобы отобразить карточку
        card.childNodes[1].innerHTML = tasks[i].name // вписывается заголовок
        card.childNodes[3].innerHTML = tasks[i].description // вписывается описание (само задание)
        card.childNodes[7].childNodes[1].childNodes[1].innerHTML = "Номер: " + tasks[i].id // вписывается идентификационный номер задания
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
