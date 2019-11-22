import Vue from 'vue'
import VueRouter from 'vue-router'

import Manager from '../views/manager/Index.vue'
import Home from '../views/manager/Home.vue'
import User from '../views/manager/User.vue'
import Order from '../views/manager/Order.vue'

import Login from '../views/Login.vue'
import { getToken } from '../utils/auth'

import { Toast } from 'vant'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/manager/home',
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    beforeEnter: (to, from, next) => {
      // 属于路由自己的拦截器
      let token = getToken();
      if(token) {
        //查询info
        store.dispatch('user/info', token)
        .then( () => {
          //获取到用户信息后才允许跳转
          next();
        })
      } else {
        Toast("登录已失效，清重新登录")
        //跳转到登录
        next({path: '/login'})
      }
    },
    children: [{
      path: 'home',
      component: Home
    },{
      path: 'User',
      component: User
    }, {
      path: 'Order',
      component: Order
    }, {
      path: 'order_confirm',
      component: () => import('../views/manager/order/ConfirmOrder.vue')
    }, {
      path: 'address',
      component: () => import('../views/manager/address/Index.vue')
    }, {
      path: 'product_list',
      component: () => import('../views/manager/product/List.vue')
    }, {
      path: 'product_details',
      component: () => import('../views/manager/product/Details.vue')
    }, {
      path: 'order_orderlines',
      component: () => import('../views/manager/order/Orderlines.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
