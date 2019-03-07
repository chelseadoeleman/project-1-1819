
import adventure from '../../assets/images/adventure.jpg'
import animals from '../../assets/images/animals.jpg'
import dragon from '../../assets/images/dragon.jpg'
import fantasy from '../../assets/images/fantasy.jpg'
import horror from '../../assets/images/horror.jpg'
import princess from '../../assets/images/princess.jpg'
import soccer from '../../assets/images/soccer.jpg'
import sports from '../../assets/images/sports.jpg'
import world from '../../assets/images/world.jpg'
import { getAverageRGB } from '../utils/getColor'
import { queryState } from '../utils/getQueryState'
import { Loader } from '../utils/Loader';

export const handleGenreRoute = (main, router) => {
    return async () => {
        main.innerHTML = ''

        Loader.toggleLoader()
        const root = document.documentElement
        const headingElement = document.createElement('h1')
        const sectionElement = document.createElement('section')
        const logo = document.querySelector('.logo')
        logo.addEventListener('click', () => {
            router.navigate('/')
        })

        
        sectionElement.classList.add('genre-wrapper')
        headingElement.innerText = 'Welk plaatje spreekt jou het meest aan?'
        const genres = [
            { url: adventure, query: 'facet=genre(science-fiction)'}, 
            { url: animals, query: 'facet=genre(dieren)'}, 
            { url: dragon, query: 'facet=genre(avonturenroman)'}, 
            { url: fantasy, query: 'facet=topic(sprookjesfiguren)'}, 
            { url: horror, query: 'facet=genre(detective)'}, 
            { url: princess, query: 'facet=topic(verliefdheid)'}, 
            { url: soccer, query: 'facet=topic(voetbal)'}, 
            { url: sports, query: 'facet=topic(vriendschap)'},
            { url: world, query: 'facet=genre(stripverhaal)'}
        ]
        
        genres.forEach(genre => {
            const genreItem = document.createElement('img')
            const article = document.createElement('article')
            
            genreItem.setAttribute('src', genre.url)
            genreItem.addEventListener('load', () => {
                const data = getAverageRGB(genreItem)                  

                const color = `rgb(${data.r}, ${data.g}, ${data.b})`

                genreItem.addEventListener('click', () => {
                    root.style.setProperty('--colors', color)
                    router.navigate('/format')
                })
                genreItem.addEventListener('click', () => {
                    queryState.push(genre.query)
                })
            })

            article.appendChild(genreItem)
            sectionElement.appendChild(article)
        })
        
        main.appendChild(headingElement)
        main.appendChild(sectionElement)

        Loader.toggleLoader()
    }
}