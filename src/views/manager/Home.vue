<template>
    <div class="home">
        <van-row>
            <img src="../../assets/f4b27e9175223b448417fcb00658e3fe.jpeg" alt="" style="width:100%">
        </van-row>
        <!-- 栏目 -->
        <van-grid :column-num="3" class="categories">
            <van-grid-item
                v-for="c in getCategories(6)"
                :key="c.id"
                :icon="c.icon"
                :text="c.name"
                @click="toProductListHandler(c.id)"
            />
        </van-grid>
        <!-- 产品 -->
        <van-grid :column-num="2" class="products">
            <van-grid-item
                v-for="p in products"
                :key="p.id"
            >
            <van-image :src="p.photo" style="width:210px;height:280px"></van-image>
            <div style="color:pink">{{p.name}}</div>
            </van-grid-item>
        </van-grid>
    </div>  
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    created() {
        this.findAllCategories();
        this.queryProduct({page:0,pageSize:4});
    },
    computed: {
        ...mapState("user", ["info"]),
        ...mapState("product", ["products"]),
        ...mapState("category", ["categories"]),
        ...mapGetters("category", ["getCategories"]),
        ...mapGetters("product", ["getProducts"])
    },
    methods: {
        ...mapActions("category", ["findAllCategories"]),
        ...mapActions("product", ["queryProduct"]),
        //跳转至产品列表
        toProductListHandler(id,activeKey) {
            this.$router.push({path:'/manager/product_list',query: {id,activeKey}})
        }
    }
}
</script>
<style scoped>
    .categories {
        text-align: center;
    }
    .categories::after {
        content: "";
        clear:both;
        display: block
    }
    .categories > li {
         width: 33.33333%;
        float: left;
        height: 100px;
    }
    .products {
        text-align: center;
    }
    .products::after {
        content: "";
        clear:both;
        display: block
    }
    .products > li {
        width: 33.33333%;
        float: left;
        height: 100px;
    }
    .home {
        padding-bottom: 50px;
    }
    .header {
        height: 200px;
        overflow: hidden;
    }
    .header img {
        width: 100%;
    }
</style>