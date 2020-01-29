<template lang="html">
  <section class="webcam-2">
    <video
      id="video1"
      width="720"
      height="560"
      autoplay
      muted
    />
    <canvas
      id="canvas1"
      width="720"
      height="560"
    />

    <button
      type="button"
      @click="captureVideoButton"
    >
      Open Camera
    </button>
    <button
      type="button"
      @click="takeScreenShot"
    >
      Take Screenshot
    </button>
    <button
      type="button"
      @click="turnCameraOff"
    >
      Turn Camera Off
    </button>
  </section>
</template>


<!-- <script type="module" src="../assets/face-api.min.js"></script> -->


<script lang="js">



const faceapi = fetch("../assets/face-api.min")


// const faceapi = require('../assets/face-api.min')

// const faceapi = require('face-api.js');



//import * as faceapi from "../assets/face-api.min.js"

  export default  {
    name: 'Webcam2',
    props: [],
    data () {
      return {


      }
    },
    computed: {

    },
    mounted () {

    },
    methods: {
      startVideo: () => {
      const video = document.getElementById('video1')

       navigator.getUserMedia(
         { video: {} },
         stream => video.srcObject = stream,
         err => console.error(err)
       )
     },
      captureVideoButton:() => {
        const video = document.getElementById('video1')


        Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('../assets/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('../assets/models'),
          faceapi.nets.faceRecognitionNet.loadFromUri('../assets/models'),
          faceapi.nets.faceExpressionNet.loadFromUri('../assets/models')
        ])


        // .then(startRecognizing).catch((err) => {
        //   console.log({err})
        // });

        var startRecognizing = () => {
          console.log(video.readyState)
          navigator.getUserMedia(
            { video: {} },
            stream => video.srcObject = stream,
            err => console.error(err)
          )
          video.addEventListener('playing', () => {
            const canvas = faceapi.createCanvasFromMedia(video)
            document.body.append(canvas)
            const displaySize = { width: video.width, height: video.height }
            faceapi.matchDimensions(canvas, displaySize)
            setInterval(async () => {
              const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
              if (detections) {
                for (var i = 0; i < detections.length; i++) {
                  console.log(Object.values(detections[0].expressions))
                }
              }
              const resizedDetections = faceapi.resizeResults(detections, displaySize)
              canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
              faceapi.draw.drawDetections(canvas, resizedDetections)
              faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
              faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
            }, 1000)
          })

        }

      },
      takeScreenShot: () => {
        const video = document.getElementById('video1')
        const canvas = document.getElementById('canvas1');
        const img = document.getElementById('screenshot');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
      },
      turnCameraOff : () => {
        const video = document.getElementById('video1')
          let stream = video.srcObject;
          let tracks = stream.getTracks()[0].stop();
      }

    }
}


</script>

<style scoped lang="scss">
  .webcam-2 {

  }
</style>
