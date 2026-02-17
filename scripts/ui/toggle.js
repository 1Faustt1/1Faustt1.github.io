// ========================================
// Функции переключения видимости модальных окон
// ========================================

// Переключает видимость модального окна информации о задании
export function toggleInfoModule(index) {
    const infoBlock = document.getElementsByClassName("main__tasks-card-module-info")
    const block = infoBlock[index]
    const isHidden = block.style.display === 'none' || block.style.display === ''

    if (isHidden) {
        block.style.display = 'flex'
    } else {
        block.style.display = 'none'
    }
}
