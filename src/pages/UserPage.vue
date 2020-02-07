<template lang="html">
  <section class="user-page">
    <Header />
    <DetectingCamera class="p-5" />
  </section>
</template>

<script lang="js">
import Header from '@/components/Header/Header';
import DetectingCamera from '@/components/Cameras/DetectingCamera';


  export default  {
    name: 'UserPage',
    components: { Header, DetectingCamera },
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

    }
}


</script>

<style scoped lang="scss"></style>
