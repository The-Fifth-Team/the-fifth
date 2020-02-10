import gql from 'graphql-tag'

const UPLOAD_USER = gql `mutation uploadUser($data: User!) {
    uploadUser(data: $data) {
      
    }
  }`;

const USER_FACE_IDENTIFIER = gql `mutation userFaceIdentifier($data: [ObservationInput]!) {
    userFaceIdentifier(data: $data) {
      
    }
  }`;

const SIGN_IN_ADMIN = gql `mutation signInAdmin($email: String!, $password String!) {
    signInAdmin(email: $email, password $password) {
      token
    }
  }`;

export {UPLOAD_USER, USER_FACE_IDENTIFIER, SIGN_IN_ADMIN};