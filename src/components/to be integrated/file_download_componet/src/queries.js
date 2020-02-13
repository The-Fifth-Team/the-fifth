import gql from 'graphql-tag'

const GET_EMOTIONS_CSV_REPORT = gql `query{
    getEmotionsCsvReport
}`

export {GET_EMOTIONS_CSV_REPORT};