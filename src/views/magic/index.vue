<template>
 
 <div>magic</div>
</template>
<script>
export default {
    name:'Magic',
    data(){
        return{
            
        }
    },
    mounted(){
        
    },
    methods:{
      onCollapse(collapsed, type) {
        console.log(collapsed, type);
      },
      onBreakpoint(broken) {
        console.log(broken);
      },
    }
}
</script>
<style lang="scss" scoped>
#components-layout-demo-responsive{
  height: 100vh;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
