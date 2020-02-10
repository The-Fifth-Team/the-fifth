import gql from 'graphql-tag'

const GET_ALL_USERS = gql `query getAllUsers{
    _id
    firstName
    lastName
    age
    gender
    descriptors
    photo
    createdAt
  }`;

const GET_PERIOD_EMOTIONS = gql `query getPeriodEmotions($startDate: String!, endDate: String!) {
    getPeriodEmotions(startDate: $startDate, endDate: $endDate) {
      averages
      status
    }
  }`;

const FACE_LOG_IN = gql `query faceLogIn($data: [Float]!) {
    faceLogIn(data: $data) {
        Token
    }
  }`;

export { GET_ALL_USERS, GET_PERIOD_EMOTIONS, FACE_LOG_IN };