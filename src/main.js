import Vue from 'vue'
import App from './App.vue'
import DashboardPlugin from '@/plugins/dashboard-plugins'

import router from "./router/index";
import "vue-notifyjs/themes/default.css";

Vue.use(DashboardPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
