<template>
  <a-layout id="components-layout-demo-responsive">
    <transition>
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
        :collapsed='collapsed'
        :trigger='null'
        v-show="!mobileSilder"
      >
        <div class="logo" style="overflow:hidden">
          <img src="https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg" alt="" srcset="">
        </div>
        <menus theme='dark'/>
      </a-layout-sider>
    </transition>
    <a-drawer
      placement="left"
      :mask='true'
      :closable="false"
      :visible="mobileSilderOpen"
      @close="onClose"
      v-show='mobileSilder'
      :bodyStyle='{padding:"20px 0 20px 10px"}'
    >
      <div class="logo" style="overflow:hidden;maxHeight:40px" slot="title">
        <img src="https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg" alt="" srcset="">
      </div>
      <menus theme='light'/>
    </a-drawer>
    <a-layout style="overflow:hidden">
      <a-layout-header :style="{ background: '#fff', padding: 0 ,display:'flex'}" >
        <a-button type="primary" style="margin-top: 16px" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <mHeader/>
      </a-layout-header>
      <a-layout-content class="main-content">
        <transition name="slide-fade" mode='out-in'>
          <rView/>
        </transition>
      </a-layout-content>
      <a-layout-footer style="text-align: center;height:60px;padding:0 !important;" v-if="PRO_Footer">
        <template v-if="!mobileSilder">
          <div>
            <p>Copyright © 2020 浮生若梦 All Rights Reserved.</p>
            <p>京ICP备19051903号</p>
          </div>
        </template>
        <template v-else>
          <div>
            <p>Copyright © 2020 浮生若梦</p>
            <p>All Rights Reserved.</p>
            <p>京ICP备19051903号</p>
          </div>
        </template>
       
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import menus from './components/Menu'
import mHeader from './components/Header'
import rView from './components/Layout'
export default {
    name:'Magic',
    components:{menus,mHeader,rView},
    data(){
        return{
            collapsed:false,
            mobileSilder:false,
            mobileSilderOpen:false
        }
    },
    computed:{
      PRO_Footer(){
        if(process.env.NODE_ENV == 'production'){
          return true
        }else{
          return false
        }
      }
    },
    mounted(){
        window.onresize = ((e)=>{
          if(e.currentTarget.innerWidth <= 940){
            this.mobileSilder = this.collapsed = true
          }else{
            this.collapsed = this.mobileSilder = this.mobileSilderOpen =  false
          }
        })
    },
    methods:{
      toggleCollapsed() {
        this.collapsed = !this.collapsed;

        if(this.mobileSilder){
          this.mobileSilderOpen = !this.mobileSilderOpen
        }
      },
      onClose(){
        this.mobileSilderOpen = false
      },
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
.main-content{
  margin: 20px 16px;
  overflow-x:hidden;
  overflow-y:auto;
  height:calc( 100vh - 160px);
}

.main-content::-webkit-scrollbar {
  // display: none;
} 
/*滚动条整体部分,必须要设置*/
.main-content::-webkit-scrollbar{
  width:8px;
  height:8px;
}
/*滚动条的轨道*/
.main-content::-webkit-scrollbar-track{
  border-radius: 8px;
}
/*滚动条的滑块按钮*/
.main-content::-webkit-scrollbar-thumb{
  border-radius: 8px;
  background-color: #dddee0;
}
</style>
