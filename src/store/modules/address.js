import { get } from '../../http/axios'

export default {
    namespaced: true,
    state: {
        address: []
    },
    getters: {
        
    },
    mutations: {
        refreshAddresses(state, addresses) {
            state.addresses = addresses;
        }
    },
    actions: {
        //查询当前用户的所有订单
        async findAllAddress({commit, rootState}) {
            const id = rootState.user.info.id
            const response = await get('/address/findByCustomerId', {id});
            commit('refreshAddresses',response.data)
        }
    },
}