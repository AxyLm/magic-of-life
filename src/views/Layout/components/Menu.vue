<template>
  <keep-alive>
    <a-menu :theme="theme" mode="inline" :default-selected-keys="selMenu" :default-open-keys="openMenu"  :selectedKeys='selMenu'>
      <template v-for="item in menus">
        <a-menu-item v-if="item.children&&item.children.length == '1'" :key="item.id">
          <router-link :to="item.route">
            <a-icon :type="item.icon" />
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
          <a-icon :type="menuInfo.icon" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.id" v-show="item.type == '01'">
            <router-link :to="item.route">
              <a-icon :type="item.icon" />
              <span>{{ item.title }}</span>
            </router-link>
          </a-menu-item>
          <sub-menu v-else-if="item.children" :key="item.id" :menu-info="item" />
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
import OutSys from '@/utils/OutSys'
export default {
    components: {
      'sub-menu': SubMenu,
    },
    name:'Menu',
    data(){
      return{
        openMenu:[],
        selMenu:[],
      }
    },
    props:{
      theme:{
        default:'dark'
      }
    },
    computed: {
      menus() {
        console.log(this.$store.state.user.router)
        return this.$store.state.user.router
      }
    },
    watch:{
      $route(newValue,oldValue){
        let meta = this.$route.meta
        if (OutSys.checkOutSysUrl(newValue.path)) {
          console.log(11,meta,)
          this.selMenu = []
        }else{
          console.log(newValue.meta)
          this.selMenu = [meta.id]
        }
        this.openMenu = [this.$route.matched[0].meta.id]
      }
    },
    created(){
      this.selMenu = [this.$route.meta.id]
      this.openMenu = [this.$route.matched[0].meta.id]
    },
}
</script>
<style lang="scss" scoped>
*{
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  -khtml-user-select: none;
  /* Konqueror */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently*/
}
</style>
