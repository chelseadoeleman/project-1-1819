import { Loader } from '../utils/Loader'
import { queryState } from '../utils/getQueryState'

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
        const formats = [
            {format: 'Leesboek', query: 'facet=type(book)'},
            {format: 'Voorleesboek', query: 'facet=type(audiobook)'},
            {format: 'Filmpjes', query: 'facet=type(video)'}]
        
        formats.forEach(format => {
            const formatItems = document.createElement('h2')
            const article = document.createElement('article')

            if (format.format === 'Filmpjes') {
                article.classList.add('disabled')
            }
            
            formatItems.innerText = format.format

            article.addEventListener('click', () => {
                if (format.format !== 'Filmpjes') {
                    router.navigate('/readinglevel')
                    queryState.push(format.query)
                }
            })

            article.appendChild(formatItems)
            sectionElement.appendChild(article)
        })
        
        main.appendChild(headingElement)
        main.appendChild(sectionElement)

        Loader.toggleLoader()
    }
}