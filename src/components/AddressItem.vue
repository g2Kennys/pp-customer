<template>
    <div class="address_item">
        <van-row>
            <van-col :span="3">
                <div class="xing">
                    <van-checkbox v-model="checked" checked-color="lightgreen"></van-checkbox>
                </div>
            </van-col>
            <van-col :span="18">
                <div>
                    {{data.customerId}}&nbsp; {{data.telephone}}
                    {{data.province}} {{data.city}} {{data.area}} {{data.address}}
                </div>
            </van-col>
            <van-col :span="3">
                <van-icon name="edit"></van-icon>
                <van-icon name="delete"></van-icon>
            </van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    props: ['data'],
    data() {
        return {
            checked: true
        }
    }
}
</script>
<style scoped>
    .address_item {
        margin: .5em 1em;
        padding: .5em;
        border-radius: 5px;
        background: #ffffff;
    }
    .address_item .xing {
        width:3em;
        height: 1em;
        border-radius: 50%;
        text-align: center;
        line-height: 3em;
        color: #ffffff
    }
    .address_item .option {
        text-align:center;
        line-height: 3em;
    }
</style>