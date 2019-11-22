import {get} from '../../http/axios'
export default {
    namespaced: true,
    state: {
        orderlines: []
    },
    mutations: {
        refreshOrderLinesByOrderId(state,orderlines) {
            state.orderLines = orderlines;
        }
    },
    actions: {
        async findOrderlinesByOrderId(commit) {
            let response = await get('/order/getOrderLinesByOrderId');
            commit('refreshOrderlinesByOrderId',response.data)
        }
    }
}