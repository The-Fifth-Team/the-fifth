import gql from 'graphql-tag'

exports.uploadPhotoMutation = gql `mutation uploadPhoto($photo: Upload!) {
    uploadPhoto(photo: $photo) {
      filename
      path
    }
  }`;