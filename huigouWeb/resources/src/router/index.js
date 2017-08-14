import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/user/login'
import Register from '@/components/user/register'
import Forget from '@/components/user/forget'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login.html',
      name: 'Login',
      component: Login
    },
    {
      path: '/register.html',
      name: 'Register',
      component: Register
    },
    {
      path: '/forget.html',
      name: 'Forget',
      component: Forget
    }
  ]
})
