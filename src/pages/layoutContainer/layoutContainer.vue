<template>
  <div class="layoutContainer">
   <Header/>
    <Aside/>
    <MainContainer/>
  </div>
</template>

<script>
import MainContainer from "@/pages/layoutContainer/MainContainer";
import Aside from "@/pages/layoutContainer/aside";
import Header from "@/pages/layoutContainer/header";
export default {
  name: "layoutContainer",
  components: {Header, MainContainer, Aside},
}
</script>

<style scoped>
.layoutContainer{
  height: 100%;
  width: 100%;
}
</style>