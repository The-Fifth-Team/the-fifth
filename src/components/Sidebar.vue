<template lang="html">

  <div class="sidebar-wrapper-docs">
   <side-bar title="Sidebar" short-title="S" background-color="vue">
        <template slot-scope="props" slot="links">
          <sidebar-item
                  :link="{
                    name: 'Dashboard',
                    icon: 'tim-icons icon-chart-pie-36',
                    path: '#',
                    isRoute: false, 
                  }">
                        
          </sidebar-item>
        </template>
  </side-bar>        
</div>

</template>

<script lang="js">

  export default  {
    name: 'sidebar',
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

<style scoped lang="scss">
  .sidebar {

  }
</style>
