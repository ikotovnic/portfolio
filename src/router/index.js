import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/folo-smartcapital',
    name:'folio_sm',
    component: () => import(/* webpackChunkName: "about" */ '../views/FolioDetail_smartcapital.vue')
  },
    {
    path:'/folo-masterprof',
    name:'folio_mp',
    component: () => import(/* webpackChunkName: "about" */ '../views/FolioDetail_masterprof.vue')
  }
]

const router = new VueRouter({
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  },
  routes,
  mode: 'history'
})

export default router
