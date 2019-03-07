import { API } from '../../../../node_modules/oba-wrapper/js/index'
import { getTransformedResultFromResults } from '../helpers'
import { queryState } from './getQueryState'
import { Loader } from './Loader'

export async function getData() {
    try {
        const api = new API({
            key: '1e19898c87464e239192c8bfe422f280'
        })
        
        const queryUrl = queryState.join('&')
        const stream = await api.createStream(`search/doelgroep=ageYouth&facet=type(book)&facet=language(dut)${!!queryUrl ? '&' : ''}${queryUrl || ''}{50}`)
        // const stream = await api.createStream('search/doelgroep=ageYouth&facet=type(book)&facet=language(dut)&facet=genre(sprookjes)&p=jeugd{5}')
        const data = await stream
            .pipe(getTransformedResultFromResults)
            .all()
            Loader.toggleLoader()
        return data
    } catch (error) {
        throw new Error(error)
    }
}