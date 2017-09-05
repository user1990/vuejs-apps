import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Root from '@/components/Root'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
