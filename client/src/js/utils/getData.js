import { API } from '../../../../node_modules/oba-wrapper/js/index'
import { getTransformedResultFromResults } from '../helpers'
import { queryState } from './getQueryState'
import { Loader } from './Loader'

export async function getData() {
    try {
        const api = new API({
            key: '1e19898c87464e239192c8bfe422f280'
        })
        
        const queryUrl = queryState
            .filter(queryPart => !!queryPart)
            .join('&')
        const urlBase = `search`
        const baseQuery = `doelgroep:ageYouth&facet=language(dut)`
        const bookQuery = !queryUrl.includes('type') ? '&facet=type(book)' : ''
        const dynamicQuery = `${queryUrl ? '&' : ''}${queryUrl || ''}`
        const amount = '{50}'
        const url = `${urlBase}/${baseQuery}${bookQuery}${dynamicQuery}${amount}`
        console.log(url)
        const stream = await api.createStream(url)

        const data = await stream
            .pipe(getTransformedResultFromResults)
            .all()
            Loader.toggleLoader()
        return data
    } catch (error) {
        throw new Error(error)
    }
}