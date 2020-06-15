<template>
  <div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="openMenu">
      <a-menu-item v-for="(item) in menuLists" :key='item.path'>
        <router-link :to="item.path">
          <a-icon type="user" />
          <span class="nav-text">
            {{item.path}}
          </span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
    name:'Menu',
    data(){
      return{
        menuLists:[],
        openMenu:[]
      }
    },
    watch:{
      $router(){
        this.menuLists = global.antRouter
        console.log(this.menuLists)
      },
      $route(){
        this.openMenu = [this.$route.redirectedFrom]
        console.log(this.openMenu,this.menuLists)
      }
    },
    created(){
      this.menuLists = global.antRouter
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
  
