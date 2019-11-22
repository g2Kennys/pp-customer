import _ from 'lodash'
export default {
    namespaced: true,
    state: {
        orderLines: new Map()
    },
    getters: {
        //计算出购物车的总额
        total(state) {
            let result = 0;
            for(let orderLines of state.orderLines.values()) {
                result += orderLines.price * orderLines.number;
            }
            return result;
        }
    },
    mutations: {
        //添加购物车{productId, productName, price, number}
        addShopCar(state, orderLine) {
            state.orderLines.set(orderLine.productId, orderLine);
            //为了让监听器监听到orderlines的改变，   可以  克隆对象，改变其引用地址
            state.orderLines = _.clone(state.orderLines);
        },
        //清空购物车
        clearShopcar(state) {
            state.orderLines.clear();
            state.orderLines = _.clone(state.orderLines);
        }
    }
}