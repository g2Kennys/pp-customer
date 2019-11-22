<template>
    <qxf-fulllayout title="地址列表">
        <div class="address">
            <van-list>
                <qxf-address-item  v-for="address in addresses"  :key="address.id" :data="address"></qxf-address-item>
            </van-list>
        </div>
    </qxf-fulllayout>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
       chosenAddressId:"",
    }
  },
  created() {
    this.findAllAddress();
  },
  computed: {
    ...mapState('address',['addresses'])
  },
  methods: {
    ...mapActions('address',['findAllAddress']),
    //新增地址
    // onAdd() {
    //   // this.$router.push({path: '../address/AddressEdit.vue'})
    //   console.log(1)
    // },
    // //编辑地址
    // onEdit(item, index) {
    //   this.$toast('编辑地址:' + index);
    // }
  }
}
</script>
<style scoped>
.address {
  margin-top: 30px;
  background-color: white;
  padding-bottom: .2em;
}
</style>