import { get } from "../../http/axios"

export default {
    namespaced: true,
    state: {
        categories: []
    },
    getters: {
        getCategories(state) {
            return function(n) {
                return state.categories.slice(0,n);
            }
        }
    },
    mutations: {
        refreshCategories(state,categories) {
            state.categories = categories;
        }
    },
    actions: {
        async findAllCategories({commit}) {
            let response = await get("/category/findAll")
            commit("refreshCategories",response.data)
        }
    }
}