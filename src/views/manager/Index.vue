<template>
    <div class="manager">
        <!-- 接受管理页面  首页，订单  我的 -->
        <router-view></router-view>
        <van-tabbar route>
            <van-tabbar-item icon="home-o" to="/manager/home">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/manager/order">订单</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/manager/user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    created() {
        if(this.token) {
            this.getInfo(this.token);
        } else {
            this.$toast("登录失效，请重新登录")
            //跳转到登录
            this.$router.push({path: '../Login.vue'})
        }
    },
    computed: {
        ...mapState('user', ['token','info'])
    },
    methods: {
        ...mapActions('user', {'getInfo': 'info'})
    }
}
</script>