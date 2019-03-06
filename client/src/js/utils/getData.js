import { API } from '../../../../node_modules/oba-wrapper/js/index'
import { getTransformedResultFromResults } from '../helpers'

export async function getData() {
    try {
        const api = new API({
            key: '1e19898c87464e239192c8bfe422f280'
        })
        
        const stream = await api.createStream('search/targetAudience=ageYouth&facet=type(book)&facet=language(dut)&facet=genre(sprookjes){5}')
        const data = await stream
            .pipe(getTransformedResultFromResults)
            .all()
        return data
    } catch (error) {
        throw new Error(error)
    }
}