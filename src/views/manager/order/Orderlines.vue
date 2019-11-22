<template>
    <div class="orderlines">
        <div class="orderline">

        </div>
        121
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    created() {
        this.findOrderLinesByOrderId();
    },
    computed: {
        ...mapState("orderlines", ["orderlines"])
    },
    methods: {
        ...mapActions("orderlines", ['getOrderLinesByOrderId'])
    }
}
</script>
<style scope>
    .orderline{
        width: 200px;
        height: 200px;
        background-color: aqua;
    }
</style>