<template lang="html">
  <section class="m-auto text-center">
    <video
      id="video1"
      ref="video1"
      width="100%"
      height="500"
      autoplay
      muted
    />
    <button
      type="button"
      class="btn btn-primary my-3"
      @click="turnCameraOff"
    >
      Stop Detecting
    </button> <br>
    <select
      id="videoSource"
      ref="videoSource"
      class="btn btn-secondary dropdown-toggle"
      @change="startVideo"
    />
  </section>
</template>
<script lang="js">
import * as faceapi from "../../../public/face-api.min";

export default {
  name: 'DetectingCamera',
  props: [],
  data() {
    return {
      refreshId: null
    }
  },
  computed: {
  },
  mounted() {
    const videoSelect = this.$refs.videoSource;
    const video = this.$refs.video1;
    navigator.mediaDevices.enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        if (device.kind === 'videoinput') {
          const option = document.createElement('option');
          option.value = device.deviceId;
          option.text = device.label || `camera ${videoSelect.length + 1}`;
          videoSelect.appendChild(option);
        }
      })
    })
    ///adding event listener to video
    video.addEventListener('playing', () => {
      const canvas = faceapi.createCanvasFromMedia(video)
      const displaySize = {
        width: video.width,
        height: video.height
      }
      faceapi.matchDimensions(canvas, displaySize)
      this.detect()
      this.refreshId = setInterval(this.detect, 1000)
    });
    //loading required material
    Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri('./models'),
        faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
        faceapi.nets.faceExpressionNet.loadFromUri('./models')
      ])
      .then(() => {
        this.startVideo()
      });
  },
  beforeDestroy(){
    this.turnCameraOff()
  },
  methods: {
    startVideo: function () {
      const video = this.$refs.video1;
      const videoSelect = this.$refs.videoSource;
      if (window.stream) {
        window.stream.getTracks().forEach(function(track) {
          track.stop();
        });
      }
      const constraints = {video: {deviceId: {exact: videoSelect.value}}};
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          window.stream = stream;
          video.srcObject = stream;
        })
        .catch((err) => {
          console.error('Error: ', err);
        });
    },
    detect: async function detect() {
      const video = this.$refs.video1;
      const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceExpressions().withFaceDescriptors()
      if (detections.length) {
        let filteredDetections = detections.map(elm => {
            return {
              descriptor: elm.descriptor,
              expressions: elm.expressions
            }
          });
        
        try {
          this.$apollo.mutate({
            mutation: userFaceIdentifier,
            variables: {
              data: {
                filteredDetections
              }
            }
          })
          .then(result => {
            console.log('Result after deteving... ' + result);
          })
        } catch (err) {
          // problem with detecting
          console.log('Problem while Detecting...')
        }
      }
    },
    turnCameraOff: function (){
      const video = this.$refs.video1;
      video.pause();
      video.removeAttribute('src');
      clearInterval(this.refreshId)
      video.srcObject.getTracks().forEach(track => {
        track.stop();
      });
    }
  }
}
</script>
<style scoped lang="scss"></style>