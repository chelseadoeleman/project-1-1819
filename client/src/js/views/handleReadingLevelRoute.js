
export const handleReadingLevelRoute = (main, router) => {
    return async () => {
        main.innerHTML = ''

        const headingElement = document.createElement('h1')
        const sectionElement = document.querySelector('section')
        const errorMessage = document.createElement('p')
        const backToHome = document.createElement('a')
        
        sectionElement.classList.add('genre-wrapper')
        headingElement.innerText = 'OOPS!'
        errorMessage.innerText = 'This page does not seem to exist... But we know a page that does exist:'
        backToHome.innerText = `Let's go back to an existing page!`
        backToHome.classList.add('button')
        backToHome.addEventListener('click', () => {
            router.navigate('/')
        })

        main.appendChild(headingElement)
        main.appendChild(sectionElement)
        main.appendChild(errorMessage)
        main.appendChild(backToHome)
    }
}