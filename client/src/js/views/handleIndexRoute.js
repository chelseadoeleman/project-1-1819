import { getData } from '../utils/getData'
import { Loader } from '../utils/Loader'
import { queryState } from '../utils/getQueryState';

export const handleIndexRoute = (main) => {
    return async () => {
        main.innerHTML = ''

        queryState.length = 0

        Loader.toggleLoader()
        const headingElement = document.createElement('h1')
        const sectionElement = document.createElement('section')

        const data = await getData()
        const results = data.flat()

        if (results) {
            results
            .filter(result => {
                return result.image && result.image.includes('https://v19.')
            })
            .forEach(result => {
                const { image } = result
                const article = document.createElement('article')
                const img = document.createElement('img')
                
                sectionElement.classList.add('book-wrapper')
                headingElement.innerText = 'Ontdekken'

                if (image === undefined) {
                    return
                } else {
                    img.setAttribute('src', image)
                    article.appendChild(img)
                    sectionElement.appendChild(article)
                }
            })

        } else {
            console.log('no results')
        }
        

        main.appendChild(headingElement)
        main.appendChild(sectionElement)
    }
}