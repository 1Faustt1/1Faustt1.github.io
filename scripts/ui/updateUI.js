// UI state update helpers

const SOLVED_TEXT = 'ВЕРНО'
const WRONG_TEXT = 'НЕ ВЕРНО'
const UNSOLVED_TEXT = 'НЕ РЕШЕНО'

// Update solved status label: true/false/null
export function updateIsSolvedUI(elem, solvedStatus) {
    if (!elem) return

    if (solvedStatus === true) {
        elem.textContent = SOLVED_TEXT
        elem.style.color = 'green'
    } else if (solvedStatus === false) {
        elem.textContent = WRONG_TEXT
        elem.style.color = 'red'
    } else {
        elem.textContent = UNSOLVED_TEXT
        elem.style.color = ''
    }
}

// Update favorite star fill
export function updateFavoriteUI(elem, isFavorite) {
    const favSVG = elem.querySelector('.main__tasks-card-footer-favorite-svg')
    if (isFavorite) {
        favSVG.setAttribute('fill', 'gold')
    } else {
        favSVG.setAttribute('fill', 'transparent')
    }
}