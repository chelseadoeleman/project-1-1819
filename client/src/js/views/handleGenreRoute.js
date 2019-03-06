
import adventure from '../../assets/images/adventure.jpg'
import animals from '../../assets/images/animals.jpg'
import dragon from '../../assets/images/dragon.jpg'
import fantasy from '../../assets/images/fantasy.jpg'
import horror from '../../assets/images/horror.jpg'
import princess from '../../assets/images/princess.jpg'
import soccer from '../../assets/images/soccer.jpg'
import sports from '../../assets/images/sports.jpg'
import world from '../../assets/images/world.jpg'


export const handleGenreRoute = (main) => {
    return async () => {
        main.innerHTML = ''

        const headingElement = document.createElement('h1')
        const sectionElement = document.createElement('section')
        
        sectionElement.classList.add('genre-wrapper')
        headingElement.innerText = 'Welk plaatje spreekt jou het meest aan?'
        const genres = [ 
            adventure,
            animals,
            dragon,
            fantasy,
            horror,
            princess,
            soccer,
            sports,
            world
        ]
        
        genres.forEach(genre => {
            const genreItems = document.createElement('img')
            const article = document.createElement('article')
            
            genreItems.setAttribute('src', genre)

            article.appendChild(genreItems)
            sectionElement.appendChild(article)
        })
        
        main.appendChild(headingElement)
        main.appendChild(sectionElement)
    }
}