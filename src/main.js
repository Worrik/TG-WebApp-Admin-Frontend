import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
