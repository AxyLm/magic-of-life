<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" style="overflow:hidden">
        <img src="https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg" alt="" srcset="">
      </div>
      <menus/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" >
        <mHeader/>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <transition name="slide-fade" mode='out-in'>
          <router-view/>
        </transition>
      </a-layout-content>
      <a-layout-footer style="textAlign: center"></a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import menus from './components/Menu'
import mHeader from './components/Header'
export default {
    name:'Magic',
    components:{menus,mHeader},
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
//router transition
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
</style>
