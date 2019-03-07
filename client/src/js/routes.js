import Navigo from 'navigo'
import { handleGenreRoute } from './views/handleGenreRoute'
import { handleErrorRoute } from './views/handleErrorRoute'
import { handleIndexRoute } from './views/handleIndexRoute'
import { handleFormatRoute } from './views/handleFormatRoute'
import { handleReadingLevelRoute } from './views/handleReadingLevelRoute';
import { handleResultsRoute } from './views/handleResultsRoute';

const root = null
const useHash = true
const hash = '#'
const router = new Navigo(root, useHash, hash)

export const Router = () => {
    const main = document.querySelector('main')

    try {
        router
            .on({
                '/genre': handleGenreRoute(main, router),
                '/readinglevel': handleReadingLevelRoute(main, router),
                '/format': handleFormatRoute(main, router),
                '/results': handleResultsRoute(main, router),
                '/error': handleErrorRoute(main, router),
                '/': handleIndexRoute(main)
            })
            .notFound(() => {
                console.error('Error...')
                router.navigate('/error')
            }).resolve()
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}