'use strict'

import 'babel-polyfill'
import { API } from '../../../node_modules/oba-wrapper/js/index'
import { getTransformedResultFromResults } from './helpers'

(async () => {
    try {
    const api = new API({
        key: '1e19898c87464e239192c8bfe422f280'
    })

    const stream = await api.createStream('search/targetaudience:ageyouth&facet=type(book)&facet=language(dut){5}')
        stream
            .pipe(getTransformedResultFromResults)
            .pipe(handleRender)
            .pipe(console.log)

    } catch (error) {
        throw new Error(error)
    }

    function handleRender(results) {
        results
            .filter(result => {
                return result.image && result.image.includes('https://v19.')
            })
            .forEach(result => {
                const { image } = result
                console.log(image)
                const section = document.querySelector('section')
                section.classList.add('book-wrapper')
                const article = document.createElement('article')
                const img = document.createElement('img')
                if (image === undefined) {
                    return
                } else {
                    img.setAttribute('src', image)

                    article.appendChild(img)
                    section.appendChild(article)
                }
        })
    }
})()