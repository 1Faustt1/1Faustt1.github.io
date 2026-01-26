// ========================================
// Слушатель для кнопок добавления в избранное
// ========================================

export function initFavoriteCheckerListeners(tasks) {
    const favoriteButtons = document.getElementsByClassName("main__tasks-card-footer-favorite") // по классу находим кнопки избранного
    for (let i = 0; i < favoriteButtons.length; i++) { // слушание каждой кнопки добавления в избранное
        window.updateFavoriteUI(favoriteButtons[i], tasks[i].is_favorite)
        favoriteButtons[i].addEventListener('click', () => {
            tasks[i].is_favorite = !tasks[i].is_favorite;

            window.updateTask(tasks, {
                ...tasks[i],
                is_favorite: tasks[i].is_favorite,
            })
            window.updateFavoriteUI(favoriteButtons[i], tasks[i].is_favorite);
        });
    }
}
