<template lang="html">
  <section>
    <div class="statbar">
    <b-card>
      <b-row>
        <b-col sm="3" xs="12">
        <div>
        <b-card
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2nowCkCyxSgdAjTkemazQJOoTFomc9kNa4DduDLuTUZ1Qgj7W"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2 imgs borderd"
        >
          <b-card-text class="card-text text-center font-weight-bold">
            Happy
          </b-card-text>
        </b-card>
        </div>
        </b-col>
    
        <b-col sm="3" xs="12">
        <div>
        <b-card
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2nowCkCyxSgdAjTkemazQJOoTFomc9kNa4DduDLuTUZ1Qgj7W"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2 imgs borderd"
        >
          <b-card-text class="card-text text-center font-weight-bold">
            Fine
          </b-card-text>    
        </b-card>
        </div>
        </b-col>
    
        <b-col sm="3" xs="12">
        <div>
        <b-card
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2nowCkCyxSgdAjTkemazQJOoTFomc9kNa4DduDLuTUZ1Qgj7W"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2 imgs borderd"
        >
          <b-card-text class="card-text text-center font-weight-bold">
            Meeh
          </b-card-text>    
        </b-card>
        </div>
        </b-col>
    
        <b-col sm="3" xs="12">
        <div>
        <b-card
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2nowCkCyxSgdAjTkemazQJOoTFomc9kNa4DduDLuTUZ1Qgj7W"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2 imgs"
        >
          <b-card-text class="card-text text-center font-weight-bold">
            Sad
          </b-card-text>

          
        </b-card>
        </div>
        </b-col>
    
      </b-row>
    </b-card>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'statbar',
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

<style scoped lang="stylus">
  .statbar 
    margin 20px 140px 40px 20px
  .imgs
    width 10em
    border none !important
    margin 20px 100px 
  .card-text
    font-size 16pt

  
</style>
