// ========================================
// Слушатель для кнопок информации в карточке
// ========================================

export function initInfoClickListeners() {
    const infoButtons = document.getElementsByClassName("main__tasks-card-footer-info") // кнопка информации в карточке
    for (let i = 0; i < infoButtons.length; i++) { // слушание каждой кнопки открытия окна информации
        infoButtons[i].addEventListener('click', () => {
            window.toggleInfoModule(i);
        });
    }
}
