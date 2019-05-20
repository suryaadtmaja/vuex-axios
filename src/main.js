import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(axios);
Vue.use(BootstrapVue);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
