import Vue from 'vue';
import Vuex from 'vuex';

import layout from './layout';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
  },
  state: {
    userData: {
      firstName: '',
      lastName: '',
      age: 0,
      gender: '',
      dateOfBirth: '',
      descriptors: []
    }
  },
  mutations: {
    handleChange (state, event) {
      state.userData[event.target.name] = event.target.value;
      // The data is saved in the state.userData
      console.log(state.userData)
    },
    addDescriptor (state, description) {

      state.userData.descriptors = description;
      console.log(state.userData)
    }
  },
  getters: {
    getUserData () {
      console.log($store)
      return this.state.userData
    }
  }
});
