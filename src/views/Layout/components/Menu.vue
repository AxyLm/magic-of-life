<template>
  <keep-alive>
    <a-menu :theme="theme" mode="inline" :default-selected-keys="selMenu" :default-open-keys="openMenu" >
      <a-sub-menu v-for="(item) in menuLists" :key='item.route'>

        <router-link :to="item.route" slot="title" class="textNoSel">
          <a-icon :type="item.icon" />
          <span class="nav-text">
            {{item.title}}
          </span>
        </router-link>

        <a-menu-item  v-for="(sub) in item.children" :key='sub.route'>
            <router-link :to="sub.route" class="textNoSel">
              <!-- <a-icon :type="sub.icon" /> -->
              <span class="nav-text">
                {{sub.title}}
              </span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </keep-alive>
</template>
<script>
import bus from '@/utils/eventbus'
export default {
    name:'Menu',
    data(){
      return{
        menuLists:[],
        openMenu:[],
        selMenu:[],
        route:[]
      }
    },
    props:{
      theme:{
        default:'dark'
      }
    },
    watch:{
      $router(){
        this.menuInit()
      },
      $route(){
        this.selMenu = [this.$route.path]
        this.openMenu = [this.$route.matched[0].path]
      }
    },
    created(){
      this.selMenu = [this.$route.path]
      this.openMenu = [this.$route.matched[0].path]
    },
    mounted(){
      this.menuInit()
    },
    methods:{
      menuInit(){
        this.menuLists = global.antRouter
      },
    }
}
</script>
<style lang="scss" scoped>
</style>
  
