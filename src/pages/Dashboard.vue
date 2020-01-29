<template lang="html">
  <div>
    
      <b-row>
        <b-col sm="1"><Sidebar></Sidebar></b-col>
        <b-col sm="11"><Statbar></Statbar></b-col>
      </b-row>
    
  </div>
</template>

<script lang="js">
import Sidebar from '../components/Sidebar';
import Statbar from '../components/Statbar';

export default  {
  components: {
    Sidebar,
    Statbar
  },
  props: [],
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}


</script>

<style scoped lang="css">
  * {
    overflow-x: hidden
  }
</style>
