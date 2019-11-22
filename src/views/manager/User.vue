<template>
    <div class="user">
        <div class="header">
                <van-image
                    round
                    width="10rem"
                    height="10rem"
                    src="../../assets/2.jpg"
                />
            <div class="name">{{info.name}}</div>
        </div>
        <div class="line" @click.prevent="toAddressHandler">常用地址</div>
        <div class="logout" @click.prevent="logoutHandler"><van-button type="danger">退出</van-button></div>
        
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    computed: {
        ...mapState('user', ['info'])
    },
    methods:{
        ...mapActions('user', ['logout']),
        toAddressHandler() {
            this.$router.push({path: '../manager/address'})
        },
        logoutHandler(){
            //1.退出
            this.logout()
            //2跳转到登录
            .then( () => {
                this.$router.push({path:'/login'})
            })
        },
        
    },
    
}
</script>
<style scoped>
    .header {
        padding-top: 46px;
        text-align: center;
    }

    .header .photo {
        margin: 0 auto;
        width: 10em;
        height: 10em;
        border-radius: 50%;
        box-sizing: border-box;
        border:1px solid #eedded;
        overflow:hidden;
        padding: 1em;
    }
    .header .name {
        line-height: 3em;
        font-size: 16px;
    }
    .header .photo img {
        width: 100%;
    }
    .line {
        color: black;
        line-height: 4em;
        border-bottom: 1px solid #ededed;
        text-align: center
    }
    .logout{
        padding-left: 4em;
    }
</style>