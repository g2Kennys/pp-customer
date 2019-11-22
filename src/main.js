import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'

//自定义组件全局注册
import Fulllayout from './components/Fulllayout'
import OrderItem from './components/OrderItem'
import AddressItem from './components/AddressItem'
import ProductItem from './components/ProductItem'
Vue.component('qxf-fulllayout',Fulllayout)
Vue.component('qxf-order-item',OrderItem)
Vue.component('qxf-address-item',AddressItem)
Vue.component('qxf-product-item',ProductItem)

//过滤器全局注册
Vue.filter('datefmt',function(val) {
  if(val) {
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
  }
  return val;
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
