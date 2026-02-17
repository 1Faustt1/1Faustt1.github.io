export function initScrollTopListener() {
    const scrollTopBtn = document.getElementById('scroll-top-btn')
    if (!scrollTopBtn) return

    const updateVisibility = () => {
        if (window.scrollY > 220) {
            scrollTopBtn.classList.add('main__scroll-top_visible')
        } else {
            scrollTopBtn.classList.remove('main__scroll-top_visible')
        }
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
}
