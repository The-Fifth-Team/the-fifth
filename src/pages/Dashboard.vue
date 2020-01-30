<template lang="html">
  <div>
    <b-container>
      <Navbar></Navbar>
    </b-container>
    <b-row>
      <b-col sm="1"><Sidebar></Sidebar></b-col>
      <b-col sm="11"><Statbar></Statbar></b-col>
    </b-row>
    
  </div>
</template>

<script lang="js">
import Sidebar from '../components/Sidebar';
import Statbar from '../components/Statbar';
import Navbar from '../components/Navbar';

export default  {
  components: {
    Sidebar,
    Statbar,
    Navbar
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
