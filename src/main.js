import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';
import router from "./router/index";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css'; //Vuesax styles

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuesax);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
