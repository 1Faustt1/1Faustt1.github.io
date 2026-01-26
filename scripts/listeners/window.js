// ========================================
// Слушатель события выгрузки страницы (очистка ресурсов)
// ========================================

export function initWindowListener() {
    // Получаем все элементы для добавления слушателей
    const answerInputs = document.getElementsByClassName("main__tasks-card-input") // по классу находим поля ввода карточки
    const answerButtons = document.getElementsByClassName("main__tasks-card-btn") // по классу находим кнопки отправки ответа
    const infoButtons = document.getElementsByClassName("main__tasks-card-footer-info") // кнопка информации в карточке
    
    // При закрытии страницы удаляем все слушатели для очистки памяти
    window.addEventListener('beforeunload', () => { // при закрытии окна удалить все слушатели
        answerInputs.forEach((answerInput, index) => {
            answerInputs[index].removeEventListener('change')
            answerButtons[index].removeEventListener('click')
            infoButtons[index].removeEventListener('click')
        })
        alert("Очистка успешна.")
    })
}
