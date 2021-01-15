import axios from '@/utils/request';
const user = {
    state: {
        userInfo: {},
        router: false,
        token: "",
    },

    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_ROUTER: (state, router) => {
            state.router = router
        },

    },

    actions: {
        Login({ commit }, userInfo) {
            const { username, account, avatar, phone, emile, rolecode, rolename, token } = userInfo
            commit("SET_USERINFO", {
                username, account, avatar, phone, emile, rolecode, rolename
            })
            commit("SET_TOKEN", token)
        },
        SetRouter({ commit }, data) {
            commit("SET_ROUTER", data)
        }
    }
}

export default user
