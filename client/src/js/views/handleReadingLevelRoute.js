

export const handleReadingLevelRoute = (main, router) => {
    return async () => {
        main.innerHTML = ''

        const headingElement = document.createElement('h1')
        const sectionElement = document.createElement('section')
        const logo = document.querySelector('.logo')
        logo.addEventListener('click', () => {
            router.navigate('/')
        })

        
        sectionElement.classList.add('reading-level-wrapper')
        headingElement.innerText = 'Kies je AVI niveau'
        const avi = ['Start','M3-E4','M5-E6','M7-E7','Plus','Sla over']
        
        avi.forEach(level => {
            const article = document.createElement('article')
            const aviLevel = document.createElement('h2')
            
            aviLevel.innerText = level

            article.addEventListener('click', () => {
            router.navigate('/')
            })

            article.appendChild(aviLevel)
            sectionElement.appendChild(article)
        })
        
        main.appendChild(headingElement)
        main.appendChild(sectionElement)
    }
}