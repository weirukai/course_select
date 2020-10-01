<template>
  <div id="app">
    <div  class="appContainer">
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.appContainer{
  height: 100%;
  width: 100%;
  background-color:#2c3e50;
}
</style>
