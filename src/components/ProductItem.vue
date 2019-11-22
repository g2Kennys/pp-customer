<template>
  <div class="product_item">
    <van-row>
      <van-col :offset="1" :span="19">
        <van-card
          :num="data.name"
          :price="data.price"
          :desc="data.description" 
          :thumb="data.photo"
          :centered="true"
        >
         <div slot="footer">
          <van-stepper size="mini" v-model="data.number"  @change="numberChangeHandler(data)"/>
          
        </div>
        </van-card>
        <!-- <div> <strong>名称：</strong> {{data.name}}</div>
        <div> <strong>价格：</strong> {{data.price}}</div>
        <div> <strong>描述：</strong> {{data.description}}</div>
        <div> <van-stepper v-model="data.number" :min="0" @change="numberChangeHandler(data)"/> </div> -->
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props:['data'],
  data(){
    return {
      value:0
    }
  },
  methods:{
    ...mapMutations('shopcar',['addShopCar']),
    numberChangeHandler(val){
      let orderLine = {
        productId:val.id,
        productName:val.name,
        price:val.price,
        number:val.number
      }
      console.log(orderLine);
      this.addShopCar(orderLine);
      
    }
  }
}
</script>
<style scoped>
/* .product_item {
  margin:.5em 1em;
  padding: .5em;
  border-radius: 5px;
  height: 80px;
  border: 1px dotted #ccc;
} */

.product_item img {
  width: 140%;
  border-radius: 3px;
}

</style>