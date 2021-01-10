<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
  name: 'App',
  data() {
    return {
      locale: zhCN,
    }
  },
  watch: {
    $route(newValue, oldValue) {
      document.title = newValue.name
    }
  },
  created () {
    document.addEventListener('visibilitychange', ()=> {
      if (document.hidden) {
        document.title = '不要离开太久哦！';
      } else {
        if(this.$route.name && this.$route.name != "null"){
          document.title = this.$route.name
        }
      }
    })
  },
}
</script>
<style>
*::-webkit-scrollbar {
   /* display: none; */
}
/*滚动条整体部分,必须要设置*/
*::-webkit-scrollbar{
  width: 3px;
  height: 3px;
}
/*滚动条的轨道*/
*::-webkit-scrollbar-track{
  border-radius: 3px;
}
/*滚动条的滑块按钮*/
*::-webkit-scrollbar-thumb{
  border-radius: 3px;
  background-color: rgba(0,0,0,0.3);
}
#app{
  margin:0;
  padding:0;
}
.textNoSel{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.slide-fade-enter-active {
  transition: all .33s ease-in;

}
.slide-fade-leave-active {
  transition: all .33s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transform: translateX(100px);
}
.slide-fade-enter, .slide-fade-leave-to{
  opacity: 0;
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
