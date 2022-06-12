import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard/Dashboard.vue'
import DataTable from '@/components/DataTable/DataTable.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard },
  { path: '/data-table/:name', component: DataTable },
]

export default new VueRouter({
  base: "/web",
  routes,
  mode: 'history',
})
