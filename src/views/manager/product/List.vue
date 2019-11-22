<template>
  <qxf-fulllayout title="产品列表">
    <div class="product_list">
      <van-row>
        <!-- 侧边导航 -->
        <van-col :span="4">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item @click="categoryId = c.id" :title="c.name" v-for="c in categories" :key="c.id" />
           
          </van-sidebar>
        </van-col>
        <!-- 右侧产品 -->
        <van-col :span="20">
          <div class="right-content">
            <qxf-product-item v-for='p in productCustomerFilter(categoryId)' :key="p.id" :data='p'></qxf-product-item>
          </div>
        </van-col>
      </van-row>
      
      <van-submit-bar
        :price=total*100
        button-text="立即下单"
        @submit="toConfirmOrderHandler"
        />
      
    </div>
  </qxf-fulllayout>
</template>
<script>
import { mapActions, mapState,mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeKey:0,
      categoryId:'',
    }
  },
  computed: {
    ...mapState('category',['categories']),
    ...mapState("product",["products"]),
    ...mapGetters('product',['productCustomerFilter']),
    ...mapGetters('shopcar', ['total'])
  },
  created() {
    // 查询所有栏目信息
    this.findAllCategories();
    // 查询所有产品信息
    this.queryProduct({page:0,pageSize:200});
    this.categoryId = this.$route.query.id;
    this.activeKey = this.$route.query.activeKey;
  },
  methods:{
    ...mapActions('category',['findAllCategories']),
    ...mapActions('product',['queryProduct']),
    toConfirmOrderHandler() {
      this.$router.push({path:'/manager/order_Confirm'})      
    }
  }
}
</script>
<style scoped>
.car {
  position: fixed;
  bottom: 0;
  line-height: 4em;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  text-align: center;
}
</style>