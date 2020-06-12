<template>
  <div id="Login">
        <el-form ref='userInfo' :rules="rules" :model="userInfo">
            <el-form-item ref="us" prop="userName">
                <el-input v-model="userInfo.userName" focus placeholder="用户名" clearable type='text'/>
            </el-form-item>
            <el-form-item ref="ps" prop="passWord">
                <el-input v-model="userInfo.passWord" placeholder="密码" clearable type="password" :show-password='true'/>
            </el-form-item>
            <el-form-item>
                <el-button type='submit' @click="Login()">sumbit</el-button>
            </el-form-item>
        </el-form>
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
            }
        }
    },
    mounted(){
        
    },
    methods:{
        Login(){
            this.$refs['userInfo'].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            // this.$message({
            //     iconClass:'el-icon-loading',
            //     message:'loading',
            // });
        }
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
    background-size: 100%;
}
</style>
