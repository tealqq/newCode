
//import Vue from 'vue'
//import App from './App.vue'
//import router from './router'


import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

createApp(App).use(router).mount('#app')

Vue.config.productionTip = false





new Vue({
  router,
  render: h => h(App),
}).$mount('#app')