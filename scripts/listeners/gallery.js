export function initGallerySlider(slides, intervalMs = 10000) {
    const galleryText = document.getElementById('gallery-text')
    const dotsContainer = document.getElementById('gallery-dots')
    const prevButton = document.getElementById('gallery-arrow-left')
    const nextButton = document.getElementById('gallery-arrow-right')

    if (!galleryText || !dotsContainer || !prevButton || !nextButton || !slides?.length) {
        return
    }

    let currentSlideIndex = 0
    let intervalId = null

    const dots = slides.map((_, index) => {
        const dot = document.createElement('button')
        dot.type = 'button'
        dot.className = 'main__gallery-dot'
        dot.setAttribute('aria-label', `Перейти к слайду ${index + 1}`)
        dot.addEventListener('click', () => {
            updateSlide(index)
            restartInterval()
        })
        dotsContainer.appendChild(dot)
        return dot
    })

    function renderSlide(index) {
        galleryText.classList.add('main__gallery-text_changing')
        setTimeout(() => {
            galleryText.textContent = slides[index]
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('main__gallery-dot_active', dotIndex === index)
            })
            galleryText.classList.remove('main__gallery-text_changing')
        }, 140)
    }

    function updateSlide(index) {
        currentSlideIndex = (index + slides.length) % slides.length
        renderSlide(currentSlideIndex)
    }

    function restartInterval() {
        if (intervalId !== null) {
            clearInterval(intervalId)
        }
        intervalId = setInterval(() => {
            updateSlide(currentSlideIndex + 1)
        }, intervalMs)
    }

    prevButton.addEventListener('click', () => {
        updateSlide(currentSlideIndex - 1)
        restartInterval()
    })

    nextButton.addEventListener('click', () => {
        updateSlide(currentSlideIndex + 1)
        restartInterval()
    })

    updateSlide(0)
    restartInterval()
}
