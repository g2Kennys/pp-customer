import { post_json, get, post } from '../../http/axios'
import { setToken, getToken, removeToken } from '../../utils/auth'

export default {
    namespaced: true,
    state: {
        token: getToken(),
        info: {}
    },
    mutations: {
        refreshInfo(state, info) {
            state.info = info;
        },
        refreshToken(state, token) {
            state.token = token;
        }
    },
    actions: {
        async login(context,payload) {
            const response = await post_json ("/user/login",payload);
            let token = response.data.token;
            //1.token缓存到本地
            setToken(token);
            //2.维护到状态机
           context.commit("refreshToken", token);
        },
        //通过token获取info
        async info (context, token) {
            let response = await get ("/user/info", {token});
            await context.commit("refreshInfo", response.data)
        },
        //退出
        async logout(context) {
            //请求后台退出
            await post('/user/logout');
            //将localstorageh中的token清除
            removeToken();
            //3清理storage
            context.commit('refreshToken','');
            context.commit('refreshInfo', {});
        }
    }
}