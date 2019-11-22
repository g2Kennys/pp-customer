<template>
    <div class="order">
        <van-nav-bar title="我的订单"></van-nav-bar>
        <van-tabs v-model="active" swipeable>
            <van-tab title="全部">
                <qxf-order-item v-for="order in orders" :key="order.id" :data='order'></qxf-order-item>
            </van-tab>
            <van-tab title="待支付">
                <qxf-order-item v-for='order in ordersStatusFilter("待支付")' :key="order.id" :data='order'></qxf-order-item>
            </van-tab>
            <van-tab title="待服务">
                <qxf-order-item v-for='order in ordersStatusFilter("待派单")' :key="order.id" :data='order'></qxf-order-item>
                <qxf-order-item v-for='order in ordersStatusFilter("待接单")' :key="order.id" :data='order'></qxf-order-item>
                <qxf-order-item v-for='order in ordersStatusFilter("待服务")' :key="order.id" :data='order'></qxf-order-item>
            </van-tab>
            <van-tab title="待确认">
                <qxf-order-item v-for='order in ordersStatusFilter("待确认")' :key="order.id" :data='order'></qxf-order-item>
            </van-tab>
            <van-tab title="已完成">
                <qxf-order-item v-for='order in ordersStatusFilter("已完成")' :key="order.id" :data='order'></qxf-order-item>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { mapActions, mapState ,mapGetters} from 'vuex'

export default {
  data() {
    return {
      active: 0
    };
  },
  computed:{
    ...mapState('order',['orders']),
    ...mapGetters('order',['ordersStatusFilter'])
  },
  created(){
    this.findAllOrders();
  },
  methods:{
    ...mapActions('order',['findAllOrders'])
  }
}


</script>
<style scoped>
.order {
  background: #f1f1f1;
}
</style>