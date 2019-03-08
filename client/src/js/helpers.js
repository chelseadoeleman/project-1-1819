
const getAuthorFromResult = (result) => {
    return result.authors
        && result.authors['main-author']
        && result.authors['main-author']._attributes
        && result.authors['main-author']._attributes['search-term']
        || undefined
}

const getImageFromResult = (result) => {
    return result.coverimages
        && result.coverimages.coverimage
        &&  result.coverimages.coverimage[1]
        &&  result.coverimages.coverimage[1]._text
        || undefined
}

const getSeriesFromResult = (result) => {
    return result.series
        && result.series['series-title']
        && result.series['series-title']._text
        || undefined
}

const getTitleFromResult = (result) => {
    return result.titles
        && result.titles['short-title']
        && result.titles['short-title']._text
        || undefined
}

const getFormatFromResult = (result) => {
    return result.formats
        && result.formats.format
        && result.formats.format._text
        || undefined
}

const getSubjectFromResult = (result) => {
    return result.subjects
        && result.subjects['topical-subject']
        && result.subjects['topical-subject']._text
        || undefined
}

const getTargetAudienceFromResult = (result) => {
    return result['target-audiences']
        && result['target-audiences']['target-audience']
        && result['target-audiences']['target-audience']._text
        || undefined
}

const getSummaryFromResult = (result) => {
    return result.summaries
        && result.summaries.summary
        && result.summaries.summary._text
        || undefined
}

const getDetailPageFromResult = (result) => {
    return result['detail-page']
        && result['detail-page']._text
        || undefined
}


export const getTransformedResultFromResults = (results) => {
    console.log(results)
    return results
        ? results.map(result => ({
            author: getAuthorFromResult(result),
            image: getImageFromResult(result),
            series: getSeriesFromResult(result),
            title: getTitleFromResult(result),
            format: getFormatFromResult(result),
            subject: getSubjectFromResult(result),
            targetAudience: getTargetAudienceFromResult(result),
            summary: getSummaryFromResult(result),
            detailpage: getDetailPageFromResult(result)
        })) 
        : []
}


