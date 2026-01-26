// ========================================
// Функции обновления визуального состояния UI
// ========================================

// Обновляет отображение статуса решения задания (ВЕРНО/НЕ ВЕРНО)
export function updateIsSolvedUI(elem, isCorrect) {
    if (isCorrect) {
        elem.textContent = "ВЕРНО"
        elem.style.color = "green"
    } else {
        elem.textContent = "НЕ ВЕРНО"
        elem.style.color = "red"
    }
}

// Обновляет визуальное отображение кнопки избранного (закрашивает звёздочку)
export function updateFavoriteUI(elem, isFavorite) {
    const favSVG = elem.querySelector(".main__tasks-card-footer-favorite-svg")
    if (isFavorite) {
        favSVG.setAttribute('fill', 'gold');
    } else {
        favSVG.setAttribute('fill', 'transparent');
    }
}
