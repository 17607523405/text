import Vue from 'vue'
import App from './App.vue'
import toast from '../src/components/Toast'
import router from './router'

Vue.config.productionTip = false
Vue.use(toast)

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
