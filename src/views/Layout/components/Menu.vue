<template>
<div>
  <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link to="/Magic/report">
            <a-icon type="user" />
            <span class="nav-text">
              report
            </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/user/info">
            <a-icon type="user" />
            <span class="nav-text">
              userinfo
            </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/user/upload">
          <a-icon type="upload" />
          <span class="nav-text">nav 3</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
</div>
</template>
<script>
export default {
    name:'Menu',
}
</script>
<style lang="scss" scoped>

</style>
  
