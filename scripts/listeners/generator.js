// ========================================
// Слушатель кнопки перехода в генератор варианта
// ========================================

export function initGeneratorListener() {
    const generatorBtn = document.getElementById('generator-btn')
    if (!generatorBtn) {
        return
    }

    generatorBtn.addEventListener('click', () => {
        const subjectId = new URLSearchParams(window.location.search).get('subjectId')
        const targetUrl = subjectId
            ? `oge-generator.html?subjectId=${encodeURIComponent(subjectId)}`
            : 'oge-generator.html'
        window.location.href = targetUrl
    })
}
