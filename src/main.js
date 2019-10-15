

//window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
 


Vue.use(VueAxios, axios)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


