import { getData } from '../utils/getData'
import { Loader } from '../utils/Loader'

export const handleResultsRoute = (main, router) => {
    return async () => {
        main.innerHTML = ''

        Loader.toggleLoader()
        const headingElement = document.createElement('h1')
        const sectionElement = document.createElement('section')
        const logo = document.querySelector('.logo')
        logo.addEventListener('click', () => {
            router.navigate('/')
        })

        const data = await getData()
        const results = data.flat()

        results
        .filter(result => {
            return result.image && result.image.includes('https://v19.')
        })
        .forEach(result => {
            const { image, detailpage } = result
            const article = document.createElement('article')
            const img = document.createElement('img')
            const link = document.createElement('a')
            
            sectionElement.classList.add('book-wrapper')
            headingElement.innerText = 'Ontdekken'

            if (image === undefined) {
                return
            } else {
                img.setAttribute('src', image)
                link.setAttribute('href', detailpage)
                
                link.appendChild(img)
                article.appendChild(link)
                sectionElement.appendChild(article)
            }
        })
        

        main.appendChild(headingElement)
        main.appendChild(sectionElement)
    }
}