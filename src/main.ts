import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from './services/Firebase';
import { messaging } from './services/Messaging';
import axios from 'axios'
import VueAxios from 'vue-axios'
import vmodal from 'vue-js-modal'

Vue.use(vmodal)
 
Vue.use(VueAxios, axios)

//firebase messaging
messaging(firebase);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
