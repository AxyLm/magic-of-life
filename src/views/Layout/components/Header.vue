<template>
  <div id="m-header">

  <a-breadcrumb class="text">

    <!-- <transition-group name="slide-fade" mode='out-in' slot="itemRender"> -->
      <a-breadcrumb-item href="item.path" v-for="(item,index) in levelList" :key="item+index">
        {{item.name}}
      </a-breadcrumb-item>
    <!-- </transition-group>/ -->
  </a-breadcrumb>
  <a-dropdown>
      <a-avatar size="large" :src="queryUser().avatar">
        <img src="@/static/belief.jpg" alt srcset slot="icon" />
      </a-avatar>

      <a-menu slot="overlay">
        <a-menu-item key="1">
          <a-icon type="user" />用户信息
        </a-menu-item>
        <a-menu-item key="2" @click="signOut">
          <a-icon type="poweroff" />退出登录
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      basePath:'',
      routes:[],
      levelList:null,
    };
  },
  watch:{
    $route(val){
      this.getBreadcrumb()
    }
  },
  created(){
    this.getBreadcrumb()
  },
  mounted(){
    this.routes = global.antRouter
  },
  methods: {
    queryUser(){
      return JSON.parse(localStorage.getItem('userInfo'))
    },
    getBreadcrumb() {
      this.levelList = this.$route.matched
    },
    signOut() {
      global.antRouter = [];
      localStorage.removeItem("router");
      this.$router.push("/");
      setTimeout(()=>{
        window.location.reload()
      },30)
    },
  },
};
</script>
<style lang="scss" scoped>
#m-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
}

.text {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>