<template>
  <div class="layoutContainer">
    <el-container  class="el-container">
      <el-header class="header">
        <Header/>
      </el-header>
      <el-container>

        <el-aside style="height: 100%">
          <Aside/>
        </el-aside>
        <el-main>
          <MainContainer/>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
import MainContainer from "@/pages/layoutContainer/MainContainer";
import Aside from "@/pages/layoutContainer/Aside";
import Header from "@/pages/layoutContainer/Header";
export default {
  name: "LayoutContainer",
  components: {Header, MainContainer, Aside},
}
</script>

<style scoped>
.layoutContainer{
  height: 100%;
  width: 100%;
}
.el-container{
  height: 100%;
}

.header{
  height: 20%;
  padding: 0;
  border-bottom: 2px solid #ffffff;
}
</style>