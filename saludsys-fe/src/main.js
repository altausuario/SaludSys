import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://localhost:3000/'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
