<template>
  <div id="m-header">
    <a-breadcrumb class="textNoSel">
      <a-breadcrumb-item href>
        <a-icon type="home" />
      </a-breadcrumb-item>
      <a-breadcrumb-item href>
        <a-icon type="user" />
        <span class="text">Application List</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item class="textNoSel">Application</a-breadcrumb-item>
    </a-breadcrumb>
    <a-dropdown>
      <a-avatar size="large" src="@/static/belief.jpg">
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
    return {};
  },
  methods: {
    signOut() {
      global.antRouter = [];
      localStorage.removeItem("router");
      this.$router.push("/Login");
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