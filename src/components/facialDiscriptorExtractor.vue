<template lang="html">
  <section class="facial-discriptor-extractor">
    <input
      id="imageUpload"
      type="file"
      multiple
    >
    <input
      id="name"
      type="text"
    >
    <button
      type="button"
      @click="extractDiscriptors"
    >
      Extract Discriptors
    </button>
  </section>
</template>

<script lang="js">
import * as faceapi from "../../public/face-api.min.js"
const axios = require('axios');

export default {
  name: 'FacialDiscriptorExtractor',
  props: [],
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    extractDiscriptors: () => {
      const imageUpload = document.getElementById('imageUpload')

      Promise.all([
        faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('./models'),
        faceapi.nets.faceExpressionNet.loadFromUri('./models')
      ]).then(start)

      async function start() {
        var label = document.getElementById("name").value
        addFace(imageUpload.files)
          .then((faceDescriptors) => {
            axios({
                method: 'post',
                url: 'http://localhost:3000/',
                data: {
                  faceDescriptors,
                  label
                },
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then(function(response) {
                console.log({
                  response
                });
              })
              .catch(function(error) {
                console.log({
                  error
                });
              });
            //document.body.append('Loaded')
          })
      }

      var addFace = async (imagesArray) => {
        var descriptions = [
          faceapi.bufferToImage(imagesArray[0]).then((image) => {
            return faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor()
          }).catch((err) => {
            console.log({
              err
            })
          }),
          faceapi.bufferToImage(imagesArray[1]).then((image) => {
            return faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor()
          }).catch((err) => {
            console.log({
              err
            })
          }),
          faceapi.bufferToImage(imagesArray[2]).then((image) => {
            return faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor()
          }).catch((err) => {
            console.log({
              err
            })
          })
        ];
        return Promise.all(descriptions)
      }
    }
  }
}
</script>

<style scoped lang="scss">
body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

canvas {
    position: absolute;
    top: 0;
    left: 0;
}
.facial-discriptor-extractor {
    }
</style>
