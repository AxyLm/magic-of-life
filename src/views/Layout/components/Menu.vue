<template>
  <div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="selMenu" :default-open-keys="openMenu">
      <a-sub-menu v-for="(item) in menuLists" :key='item.route'>

        <router-link :to="item.route" slot="title">
          <a-icon :type="item.icon" />
          <span class="nav-text">
            {{item.title}}
          </span>
        </router-link>

        <a-menu-item  v-for="(sub) in item.children" :key='sub.route'>
            <router-link :to="sub.route">
            <a-icon :type="sub.icon" />
            <span class="nav-text">
              {{sub.title}}
            </span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
    name:'Menu',
    data(){
      return{
        menuLists:[],
        openMenu:[],
        selMenu:[]
      }
    },
    watch:{
      $router(){
        this.menuLists = global.antRouter
        console.log(this.menuLists)
      },
      $route(){
        this.selMenu = [this.$route.path]
        this.openMenu = [this.$route.matched[0].path]
        console.log('route',this.$route,)
      }
    },
    created(){
      this.selMenu = [this.$route.path]
      this.openMenu = [this.$route.matched[0].path]
      
      this.menuLists = global.antRouter
      console.log(this.menuLists)
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
  
