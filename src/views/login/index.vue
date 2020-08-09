<template>
  <div id="Login">
        <a-form-model ref='userInfo' :rules="rules" :model="userInfo">
            <a-form-model-item ref="us" prop="username">
                <a-input v-model="userInfo.username" focus placeholder="用户名" clearable type='text'/>
            </a-form-model-item>
            <a-form-model-item ref="ps" prop="password">
                <a-input v-model="userInfo.password" placeholder="密码" clearable type="password" :show-password='true'/>
            </a-form-model-item>
            <a-form-model-item>
                <a-button type='submit' @click="Login()">
                    <a-spin :spinning='loginLoading'>
                        <a-icon slot="indicator" type="loading" style="font-size: 24px" />
                    </a-spin>
                    sumbit
                </a-button>
            </a-form-model-item>
        </a-form-model>
  </div>
</template>
<script>

import EventBus from '@/utils/eventbus'

export default {
    name:'Login',
    data(){
        return{
            userInfo:{
                username:'',
                password:'',
            },
            rules:{
                userName:[
                    { required:true,message: '用户名不能为空', trigger: ['change','blur'] },
                    { min: 3, message: '最少输入三个字符', trigger: ['change','blur'] },
                    { max: 12, message: '超出最大范围', trigger: ['change','blur'] }
                ],
                passWord:[
                    {required:true,message: '密码不能为空', trigger: ['change','blur']},
                    { min: 3, message: '密码最少三位', trigger: ['change','blur'] },
                    { max: 12, message: '超出最大范围', trigger: ['change','blur'] }
                ]
            },
            routerList:[
                {
                    path: '/Magic',
                    route:'/Magic',
                    component: "Layout",
                    title:'首页',
                    icon:'unordered-list',
                    children:[
                        {
                            path: 'report',
                            route:'/Magic/report',
                            title:'统计报表',
                            icon:'area-chart',
                            component: "report/index"
                        },
                        {
                            path: 'assine',
                            route:'/Magic/assine',
                            title:'统计报表',
                            icon:'appstore',
                            component: "assine/index"
                        },
                    ]
                },
                {
                    path: '/cloud',
                    route:'/cloud',
                    component: 'Layout',
                    title:'内容管理',
                    icon:'cloud',
                    children:[
                        {
                            path:'Media',
                            route:'/cloud/media',
                            title:'素材管理',
                            icon:'file-image',
                            component:'cloud/media/index'
                        },
                        {
                            path:'Files',
                            route:'/cloud/files',
                            title:'文件管理',
                            icon:'file',
                            component:'cloud/files/index'
                        }
                    ]
                },
                {
                    path: '/user',
                    route:'/user',
                    component: 'Layout',
                    title:'用户',
                    icon:'user',
                    children:[
                        {
                            path:'info',
                            route:'/user/info',
                            title:'用户信息',
                            icon:'edit',
                            component:'userInfo/index'
                        }
                    ]
                },
                {
                    path:'/system',
                    route:'/system',
                    component: 'Layout',
                    title:'后台管理',
                    icon:'code',
                    children:[
                        {
                            path:'router',
                            route:'/system/router',
                            title:'路由设置',
                            icon:'edit',
                            component:'system/index'
                        },
                        {
                            path:'role',
                            route:'/system/role',
                            title:'角色管理',
                            icon:'edit',
                            component:'system/role'
                        },
                    ]
                },
            ],
            loginLoading:false,
        }
    },
    watch:{
        $route(){
            location.reload()
        }
    },
    methods:{
        Login(){
            this.$refs.userInfo.validate(valid => {
                if (valid) {
                    this.loginLoading =  true
                    this.$axios.post(this.$api.url + '/soulfree/login/login',{
                        username:this.userInfo.username,
                        password:this.userInfo.password,
                    })
                    .then(res=>{
                        if(res.code == 0){
                            this.$store.state.route = res.data.route
                            localStorage.setItem('router',JSON.stringify(res.data.route))
                            localStorage.setItem('userInfo',JSON.stringify(res.data))
                            this.$router.push(res.data.route[0].path)
                            this.$message.success({ content: '登录成功', key:'loading',duration:1.5});
                            this.$EventBus.$emit('LOGIN_INIT', res.data);
                        }else{
                            this.$message.error({ content: res.msg, key:'loading',duration:1.5});
                        }
                        this.loginLoading = false
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                } else {
                    console.log(valid)
                    return false;
                }
            });
        },
        routerUtile(route){
            route.forEach(item => {
                if(item.component){
                }
            });
            console.log(route)
            return route
        },
    }
}
</script>
<style lang="scss" scoped>
#Login{
    width: 100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../assets/1580551394249.jpg') no-repeat center;
    background-size: 100% 100%;
}
</style>
