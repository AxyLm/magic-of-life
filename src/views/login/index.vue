<template>
  <div id="Login">
        <a-form-model ref='userInfo' :rules="rules" :model="userInfo">
            <a-form-model-item ref="us" prop="userName">
                <a-input v-model="userInfo.userName" focus placeholder="用户名" clearable type='text'/>
            </a-form-model-item>
            <a-form-model-item ref="ps" prop="passWord">
                <a-input v-model="userInfo.passWord" placeholder="密码" clearable type="password" :show-password='true'/>
            </a-form-model-item>
            <a-form-model-item>
                <a-button type='submit' @click="Login()">sumbit</a-button>
            </a-form-model-item>
        </a-form-model>
  </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            userInfo:{
                userName:'',
                passWord:'',
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
                    component: "Layout",
                    children:[
                        {
                            path: 'report',
                            component: "report/index"
                        },
                        {
                            path: 'assine',
                            component: "assine/index"
                        },
                    ]
                },
                {
                    path: '/user',
                    component: 'Layout',
                    children:[
                        {
                            path:'info',
                            component:'userInfo/index'
                        }
                    ]
                },
            ],
            adminList:[
                {
                    path: '/Magic',
                    name: 'Magic',
                    component: "magic",
                    children:[
                    {
                        path: '/report',
                        name: 'report',
                        component: "report"
                    },
                    {
                        path: '/assine',
                        name: 'assine',
                        component: "assine"
                    },
                    {
                        path: '/userInfo',
                        name: 'userInfo',
                        component: 'userInfo'
                    },
                    ]
                },
            ]
        }
    },
    mounted(){
        
    },
    methods:{
        Login(){
            this.$refs.userInfo.validate(valid => {
                if (valid) {
                    this.$message.loading('Action in progress..', 1,()=>{

                        this.$router.push('/Magic')
                    });
                    // this.$router.addRoutes( this.routerUtile(this.routerList) )
                    // return
                    localStorage.setItem('router',JSON.stringify(this.routerList))
                    // localStorage.setItem('router',this.routerList)


                    console.log(this.$route,this.$router)
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            // this.$message({
            //     iconClass:'el-icon-loading',
            //     message:'loading',
            // });
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
