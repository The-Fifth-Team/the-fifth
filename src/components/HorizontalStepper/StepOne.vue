<template lang="html">
  <section class="step-one">
    <b-row>
      <b-col
        lg="10"
        xs="12"
        class="m-auto w-100"
      >
        <h1 class="text-center py-4">
          User Data
        </h1>
        <form>
          <b-row>
            <b-col
              class="my-2"
              sm="3"
            >
              <label> FirstName: </label>
            </b-col>
            <b-col
              class="my-2"
              sm="9"
            >
              <input
                class="form-control"
                value=""
                name="firstName"
                type="text"
                required
                @input="handleChange"
              >
            </b-col>
            <b-col
              class="my-2"
              sm="3"
            >
              <label> LastName: </label>
            </b-col>
            <b-col
              class="my-2"
              sm="9"
            >
              <input
                class="form-control"
                value=""
                name="lastName"
                type="text"
                required
                @input="handleChange"
              >
            </b-col>
            <b-col
              class="my-2"
              sm="3"
            >
              <label> Age: </label>
            </b-col>
            <b-col
              class="my-2"
              sm="9"
            >
              <input
                class="form-control"
                value=""
                name="age"
                type="number"
                required
                @input="handleChange"
              >
            </b-col>
            <b-col
              class="my-2"
              sm="3"
            >
              <label> Gender: </label>
            </b-col>
            <b-col
              class="my-2"
              sm="9"
            >
              <select
                class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                name="gender"
                @input="addGender"
              >
                <option
                  class="dropdown-item"
                  name="Option"
                  value="Select One"
                >
                  Chose One ...
                </option>                    
                <option
                  class="dropdown-item"
                  name="gender"
                  value=""
                >
                  Male
                </option>
                <option
                  class="dropdown-item"
                  name="gender"
                  value=""
                >
                  Female
                </option>
              </select>
            </b-col>
          </b-row>
        </form>
      </b-col>
    </b-row>
  </section>
</template>

<script lang="js">
import { mapState } from 'vuex'

  export default  {
    name: 'StepOne',
    components: {  },
    props: [],
    data () {
      return {
        
      }
    },
    computed: {
      // ...mapState({
      //   firstName: state => state.firstName
      // })
    },
    mounted () {
    },
    methods: {
      handleChange (event) {
        this.$store.commit('handleChange', event)
      },
      addGender (event) {
        if (event.target.selectedOptions[0].label !== 'Chose One ...') {
          this.$store.commit('addGender', event.target.selectedOptions[0].label)
        }
      }
    }
}


</script>

<style scoped lang="scss">
  .step-one {
    padding-top: 2.5em;
    padding-bottom: 2.8em;
  }
</style>
