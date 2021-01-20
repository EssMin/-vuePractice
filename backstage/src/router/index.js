import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import UserProfilePreview from '../views/UserProfilePreview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {
        path: 'UserProfilePreview',
        name: 'UserProfilePreview',
        component: () => import('../views/UserProfilePreview.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
