<template>
<div class="headerContainer">
  <div class="headleft">华中科技大学选课系统</div>
  <div class="headerright">
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avator-wrapper">
        <img
            src="http://img.alicdn.com/tfs/TB1fc6SdKuSBuNjy1XcXXcYjFXa-36-36.png"
            class="user-avatar"
        >
        {{username}}<i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <el-dropdown-item></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>




</div>


</template>

<script>
export default {
name: "header"
}
</script>

<style scoped>


.headerContainer{
  height: 70px;
  background-color: antiquewhite;
}
.headleft{
  float: left;
}
.headerright{
  float: right;
}
</style>