<template>
  <div id='m-header'>
    <a-breadcrumb>
      <a-breadcrumb-item href>
        <a-icon type="home" />
      </a-breadcrumb-item>
      <a-breadcrumb-item href>
        <a-icon type="user" />
        <span>Application List</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Application</a-breadcrumb-item>
    </a-breadcrumb>
    <a-avatar size="large" icon="user" />
  </div>
</template>
<style lang="scss" scoped>
#m-header{
    height:100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
}
</style>