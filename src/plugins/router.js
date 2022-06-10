import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard },
]

export default new VueRouter({
  routes,
  mode: 'history',
})
