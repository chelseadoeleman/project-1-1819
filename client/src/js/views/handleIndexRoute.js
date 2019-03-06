import { getData } from '../utils/getData'

export const handleIndexRoute = (main) => {
    return async () => {
        main.innerHTML = ''

        const headingElement = document.createElement('h1')
        const sectionElement = document.createElement('section')

        const results = await getData()

        results[0]
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

        main.appendChild(headingElement)
        main.appendChild(sectionElement)
    }
}