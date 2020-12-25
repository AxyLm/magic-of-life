<template>
  <keep-alive>
    <a-menu :theme="theme" mode="inline" :default-selected-keys="selMenu" :default-open-keys="openMenu" >
      <template v-for="item in menuLists">
        <a-menu-item v-if="!item.children" :key="item.id">
          <router-link :to="item.route">
            <a-icon type="pie-chart" />
            <span>{{ item.title }}</span>
          </router-link>
        </a-menu-item>
        <sub-menu v-else :key="item.id" :menu-info="item" />
      </template>



      
    </a-menu>
  </keep-alive>
</template>
<script>
import { Menu } from 'ant-design-vue';
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.key">
            <router-link :to="item.route">
              <a-icon type="pie-chart" />
              <span>{{ item.title }}</span>
            </router-link>
          </a-menu-item>
          <sub-menu v-else :key="item.key" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
export default {
    components: {
      'sub-menu': SubMenu,
    },
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
        // this.menuInit()
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
    activated(){
      this.menuInit()
    },
    methods:{
      menuInit(){
        console.log('menu init',this.$store.state.userInfo)
        this.menuLists = JSON.parse( localStorage.getItem('router') )
      },
    }
}
</script>
<style lang="scss" scoped>
</style>
  
