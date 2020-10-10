<template>
  <div class="wrapperMain">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "MainContainer"
}
</script>

<style scoped>
.wrapperMain {
  height: 100%;
  width: 100%;
}
</style>