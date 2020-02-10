<template>
  <div
    id="my-strictly-unique-vue-upload-multiple-image"
    style="display: flex; justify-content: center;"
  >
    <vue-upload-multiple-image
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
      @data-change="dataChange"
      @limit-exceeded="limitExceeded"
    />
  </div>
</template>


<script>
import VueUploadMultipleImage from '@/components/VueUploadMultipleImage'
export default {
  name: 'UploadImage',
  components: {
    VueUploadMultipleImage
  },
  data () {
    return {
    }
  },
  methods: {
    uploadImageSuccess() {},
    editImage () {},
    dataChange () {},
    limitExceeded(){},
    beforeRemove (index, done) {
      const r = confirm("remove image");
      if (r == true) {
        done()
      }
    }
  }
}
</script>

