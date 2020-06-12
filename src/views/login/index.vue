<template>
  <div id="Login">
      <el-card>

        <el-form>
            <el-input/>
            <el-input/>
            <el-button type='submit'>sumbit</el-button>
        </el-form>
      </el-card>
  </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{

        }
    },
    mounted(){
        
    },
    methods:{

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
