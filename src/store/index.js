import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import category from './modules/category'
import order from './modules/order'
import address from './modules/address'
import product from './modules/product'
import shopcar from './modules/shopcar'
import orderlines from './modules/orderlines'
export default new Vuex.Store({
  modules: {
    user,
    order,
    address,
    category,
    product,
    shopcar,
    orderlines
  }
})
 