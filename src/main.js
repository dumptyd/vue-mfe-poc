import Vue from 'vue'
import App from './App.vue'
import MFE from '../apps/micro-frontend/src/index'
import router from './router'
import { registerMFE } from './utils'

Vue.use(MFE, registerMFE)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
