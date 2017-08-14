import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
/* 商品类 */
import GoodsList from '@/components/goods/GoodsList'
/* 个人中心 */
import User from '@/components/user/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/goodsList.html',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/user.html',
      name: 'User',
      component: User
    }
  ]
})
