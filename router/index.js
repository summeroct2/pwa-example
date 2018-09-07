import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  // {
  //   path: '*',
  //   redirect: '/',
  // },
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld'),
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
