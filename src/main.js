import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import axios from 'axios'

Vue.prototype.$http = axios

let telegram_init_data = window.Telegram?.WebApp.initData
Vue.prototype.$http.defaults.headers.common['Authorization'] = telegram_init_data

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
