<template>
  <div class="asideContainer main-backgroundColor">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo main-backgroundColor"
        @open="handleOpen"
        @close="handleClose"
        @select="select"
        text-color="#fff"
        active-text-color="#abcdef"
        router
        >
      <!--router属性可以直接将menu-item的index映射成router的path-->
      <template v-for="index in menu" >
        <div v-bind:style="index.id!=activeIndex?'background-color:inherit':'background-color:#ecf5ff'" :key="index.id">
          <el-menu-item :index="index.id" :key="index.id" class="menuItem">
            <template slot="title">
              <i :class="index.icon"></i>
              <span slot="title">{{ index.name }}</span>
              <div class="asideSelectedDivider" v-bind:style="activeIndex!=index.id?'background-color:inherit':'background-color:#abcdef'" ></div>
            </template>
          </el-menu-item>

        </div>







      </template>
    </el-menu>
  </div>
</template>

<script>
import {menu} from "@/pages/layoutContainer/menu";

export default {
  name: "Aside",
  data: function () {
    return {
      menu: menu,
      activeIndex:"generalCourse"
    }

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    select(index) {
      console.log(1)
      this.activeIndex=index
      console.log(2)
   }
  }
}


</script>

<style scoped>
.asideContainer {
  height: 100%;
}
.asideSelectedDivider{
  height: 80%;
  width: 2px;
  background-color:inherit;
}
.menuItem{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

}


</style>