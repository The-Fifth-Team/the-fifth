<template
  ref="formContainer"
  lang="html"
>
  <section
    class="facial-discriptor-extractor"
  >
    <b-col
      sm="8"
      xs="12"
      class="m-auto"
    >
      <sweetalert-icon
        v-if="discriptored"
        icon="success"
      />

      <sweetalert-icon
        v-if="descriptoring"
        icon="loading"
      />

      <div v-if="error">
        <h3 class="text-center"><strong>Please Pick images</strong></h3>
        <sweetalert-icon  
          icon="warning"
        />
      </div>
      <b-form-file 
        id="imageUpload"
        class="mt-3"
        multiple 
      >
        <template
          slot="file-name"
          slot-scope="{ names }"
        >
          <b-badge variant="dark">
            {{ names[0] }}
          </b-badge>
          <b-badge
            v-if="names.length > 1"
            variant="dark"
            class="ml-1"
          >
            + {{ names.length - 1 }} More files
          </b-badge>
        </template>
      </b-form-file>
    </b-col>
    <br>
    <b-col sm="8 m-auto text-center">
      <b-button
        class="mt-4 border-0"
        type="button"
        variant="primary"
        style="background-color: #ffc247; color: black;"
        @click="extractDiscriptors"
      >
        Extract Discriptor
      </b-button>
    </b-col>
  </section>
</template>

<script lang="js">
import * as faceapi from "../../public/face-api.min.js";
import SuccessComponent from '../components/AnimationComponents/SuccessComponent'
import axios from 'axios';


export default {
  name: 'FacialDiscriptorExtractor',
  props: [],
  data() {
    return {
      discriptored: false,
      descriptoring: false,
      error: false,
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    extractDiscriptors: function() {
      const imageUpload = document.getElementById('imageUpload')
      const that = this
      
      if ( imageUpload.files.length === 0 ) {
        this.error = true;
        setTimeout(() => {
          this.error = false
        }, 1500);
      }
      this.error ? null : this.descriptoring = true;

      // document.body.style.opacity = ''
      // const loader = this.$loading.show({
      //   container: this.$refs.formContainer,
      //   canCancel: false,
      //   color: 'green',
      //   loader: 'dots'
      //   // onCancel: this.onCancel,
      // },{
      //   // before: this.$createElement(),
      //   // after: this.$createElement('<template><sweetalert-icon icon="success" /></template>')
      // }
      // );
      

      Promise.all([
        faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('./models'),
        faceapi.nets.faceExpressionNet.loadFromUri('./models')
      ]).then(start)

      async function start() {
        addFace(imageUpload.files)
          .then((faceDescriptors) => {
            that.$store.commit(
              'addDescriptor', 
              faceDescriptors.map(elm => {
                return elm.descriptor;
              })
            )
            
            that.discriptored = !that.discriptored;
            that.descriptoring = !that.descriptoring;
            setTimeout(() => {
              that.discriptored = !that.discriptored;
            }, 2000);
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
  width: 100%;
  padding: 2em;
  // text-align: center;
}

#imageUpload {
  text-align: center;
  margin: auto;
}
</style>
