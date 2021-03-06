import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import initAxios from './assets/js/axiosPreset'
import './assets/js/element'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    initAxios(this)
  }
}).$mount('#app')
