import { Loader } from '../utils/Loader'

export const handleFormatRoute = (main, router) => {
    return async () => {
        main.innerHTML = ''

        Loader.toggleLoader()
        const headingElement = document.createElement('h1')
        const sectionElement = document.createElement('section')
        const logo = document.querySelector('.logo')
        logo.addEventListener('click', () => {
            router.navigate('/')
        })
        
        sectionElement.classList.add('format-wrapper')
        headingElement.innerText = 'Wat zoek je?'
        const formats = ['Leesboek','Voorleesboek','Informatieboek']
        
        formats.forEach(format => {
            const formatItems = document.createElement('h2')
            const article = document.createElement('article')
            
            formatItems.innerText = format

            article.addEventListener('click', () => {
            router.navigate('/readinglevel')
            })

            article.appendChild(formatItems)
            sectionElement.appendChild(article)
        })
        
        main.appendChild(headingElement)
        main.appendChild(sectionElement)

        Loader.toggleLoader()
    }
}