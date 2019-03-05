'use strict'

import 'babel-polyfill'
import { API } from '../../../node_modules/oba-wrapper/js/index'
import { getTransformedResultFromResults } from './helpers'

(async () => {
    try {
    const api = new API({
        key: "1e19898c87464e239192c8bfe422f280"
    })

    const stream = await api.createStream("search/harry potter{5}")
        stream
            .pipe(getTransformedResultFromResults)
            .pipe(console.log)
            // .pipe(toJSON)
            // .pipe(cleanJSON)
            // .pipe(renderToDocument)

        // const transformedResults = getTransformedResultFromResults(results)
        // console.log(transformedResults)

    } catch (error) {
        throw new Error(error)
    }
})()