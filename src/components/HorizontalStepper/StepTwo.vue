<template lang="html">
  <section class="step-two">
    <b-col
      lg="12"
      xs="12"
    >
      <FacialDiscriptorExtractor />
    </b-col>
  </section>
</template>

<script lang="js">
import FacialDiscriptorExtractor from '@/components/FacialDiscriptorExtractor'


  export default  {
    name: 'StepTwo',
    components: {
      FacialDiscriptorExtractor
    },
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

<style scoped lang="scss">
  .step-two {

  }
</style>
