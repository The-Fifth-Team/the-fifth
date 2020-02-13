import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/css/mdb.min.css';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import VueApollo from 'vue-apollo';
import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  link: createUploadLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});


new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
