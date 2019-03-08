import { getData } from '../utils/getData'
import { Loader } from '../utils/Loader'
import { queryState } from '../utils/getQueryState';

export const handleIndexRoute = (main) => {
    return async () => {
        main.innerHTML = ''

        queryState.length = 0

        Loader.toggleLoader()
        const root = document.documentElement
        const headingElement = document.createElement('h1')
        const sectionElement = document.createElement('section')

        root.style.setProperty('--colors', '')

        const data = await getData()
        const results = data.flat()

        results
        .filter(result => {
            return result.image && result.image.includes('https://v19.')
        })
        .forEach(result => {
            const { image } = result
            const article = document.createElement('article')
            const img = document.createElement('img')
            
            sectionElement.classList.add('book-wrapper')
            headingElement.innerText = 'Bekijk onze boeken'
            if (image === undefined) {
                return
            } else {
                img.setAttribute('src', image)
                article.appendChild(img)
                sectionElement.appendChild(article)
            }
        })        

        main.appendChild(headingElement)
        main.appendChild(sectionElement)
    }
}