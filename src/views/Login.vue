<template>
    <div class="login">
        <header class="header">
            <div class="logo">
                jz      
            </div>
            <div class="title">客户</div>          
        </header>
        <article class="content" >
            {{form}}
            <van-cell-group>
                <van-field
                    v-model="form.username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"/>
                <van-field
                     @keyup.enter="loginHandler"
                    v-model="form.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required/>
            </van-cell-group>
            <van-button round plain type="success" @click="loginHandler">登录</van-button>
        </article>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            form: {
                type: 'customer'
            }
        }
    },
    methods: {
        ...mapActions('user',['login']),
        loginHandler() {
            this.login(this.form)
            .then(() => {
                this.$router.push('/manager/home')
            })
        }
    }
}
</script>
<style scoped>
    .content {
        text-align: center
    }
    .header{
        height: 150px;
        padding: 50px;
        color: white;
        background-color: lightskyblue;
        text-align: center
    }
    .header .logo{
        background-color: lightgreen;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;

    }
</style>