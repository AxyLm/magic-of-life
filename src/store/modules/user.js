import axios from '@/utils/request';
const user = {
    state: {
        userInfo:{},
        router: false,
        token:"",
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
        Login( { commit }, userInfo){
            const data = userInfo
            commit("SET_USERINFO" , {
                name:data.name,
                roles:data.roles,
                username:data.username,
            })
            commit("SET_TOKEN",data.token)
            commit("SET_ROUTER",data.route)
        },
        SetRouter( {commit}, data){
            commit("SET_ROUTER",data)
            
        }
    }
}

export default user
