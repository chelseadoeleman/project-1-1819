export const handleFormatRoute = (main) => {
    return async () => {
        main.innerHTML = ''

        const headingElement = document.createElement('h1')
        const sectionElement = document.createElement('section')
        
        sectionElement.classList.add('format-wrapper')
        headingElement.innerText = 'Wat zoek je?'
        const formats = ['Leesboek','Voorleesboek','Informatieboek']
        
        formats.forEach(format => {
            const formatItems = document.createElement('h2')
            const article = document.createElement('article')
            
            formatItems.innerText = format

            article.appendChild(formatItems)
            sectionElement.appendChild(article)
        })
        
        main.appendChild(headingElement)
        main.appendChild(sectionElement)
    }
}