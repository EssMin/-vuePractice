import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '@/components/logIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LogIn
  },
  {
    path: '/frame',
    name: 'frame',
    component: () => import('@/components/Frame.vue'),
    children:[
      {
        path: 'colorTest',
        name: 'colorTest',
        component: () => import('@/views/colorTest.vue'),
      },
      {
        path: 'HelloWorld',
        name: 'HelloWorld',
        component: () => import('@/views/HelloWorld.vue'),
      },

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
