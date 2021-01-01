<template>
  <div id="Login" >
      <a-card :hoverable='true' class="card">
          <img
            slot="cover"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        <a-form-model ref='userInfo' 
            :rules="rules" :model="userInfo" style="width:100%" layout='horizontal' 
            :wrapper-col="wrapperCol" 
            :label-col='labelCol'
            >
            <a-form-model-item ref="us" prop="username" label='用户名'>
                <a-input v-model="userInfo.username" focus placeholder="用户名" clearable type='text'/>
            </a-form-model-item>
            <a-form-model-item ref="ps" prop="password" label='密码'>
                <a-input v-model="userInfo.password" placeholder="密码" clearable type="password" :show-password='true'/>
            </a-form-model-item>
            <a-form-model-item  :wrapper-col='{span:24}'>
                <a-button type='submit' @click="Login()" :loading='loginLoading' block>
                    登录
                </a-button>
            </a-form-model-item>
        </a-form-model>
      </a-card>
  </div>
</template>
<script>


export default {
    name:'Login',
    data(){
        return{
            imgurl:"",
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
            userInfo:{
                username:'',
                password:'',
            },
            rules:{
                username:[
                    { required:true,message: '用户名不能为空', trigger: ['change','blur'] },
                    { min: 3, message: '用户名最少输入六位', trigger: ['change','blur'] },
                    { max: 16, message: '超出最大范围', trigger: ['change','blur'] }
                ],
                password:[
                    {required:true,message: '密码不能为空', trigger: ['change','blur']},
                    { min: 6, message: '密码最少三位', trigger: ['change','blur'] },
                    { max: 16, message: '超出最大范围', trigger: ['change','blur'] }
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
                    title:'系统管理',
                    icon:'code',
                    children:[
                        {
                            title:"用户管理"
                        },
                        {
                            path:'router',
                            route:'/system/router',
                            title:'路由管理',
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
    methods:{
        Login(){
            this.$refs.userInfo.validate(valid => {
                if (valid) {
                    this.loginLoading =  true
                    this.$axios.post('/login',{
                        username:this.userInfo.username,
                        password:this.userInfo.password,
                    })
                    .then(res=>{
                        if(res.code == 0){
                            try {
                                this.$store.dispatch("Login", res.data);
                                localStorage.setItem('uToken',res.data.token)
                                localStorage.setItem('userInfo',JSON.stringify(res.data))
                                this.$message.success({ content: '登录成功', key:'loading',duration:1.5});
                                this.$router.push({path:'/'})
                            } catch (error) {
                                console.log(error)
                            }
                        }else{
                            this.$message.error({ content: res.msg, key:'loading',duration:1.5});
                        }
                        setTimeout(()=>{
                            this.loginLoading = false
                        },1000 * 1.5)
                    })
                    .catch(err=>{
                        setTimeout(()=>{
                            this.loginLoading = false
                        },1000 * 1.5)
                    })
                } else {
                    console.log(valid)
                    return false;
                }
            });
        },
    }
}
</script>
<style lang="scss" scoped>
#Login{
    width: 100vw;
    height:100vh;
    display: flex;
    background-image: url("../../assets/91564913.webp") ,url("../../assets/91564913.jpg");
    justify-content: center;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .card{
        max-width: 90%;
        position: relative;
        z-index: 2;
    }
}
.backLazy{
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    text-align: center;
}
.backLazy img{
    width: auto;
    min-width: 100%;
    height: 100%;

}
@media screen and (min-width: 576px ){
    #Login{
        background-position: top;
    }
}
@media screen and (max-width: 576px ){
    #Login{
        background-size: auto 100%;
    }
}
</style>
