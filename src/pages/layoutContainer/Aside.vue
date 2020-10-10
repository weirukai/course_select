<template>
  <div class="asideContainer main-backgroundColor">
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo main-backgroundColor"
        @open="handleOpen"
        @close="handleClose"
        @select="select"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
      <!--router属性可以直接将menu-item的index映射成router的path-->
      <template v-for="index in menu">
        <el-menu-item :index="index.id" :key="index.id">

          <template slot="title">
           <i :class="index.icon"></i>
            <span slot="title">{{ index.name }}</span>
          </template>


        </el-menu-item>
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
      menu: menu
    }

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //select(index, indexPath) {
      // console.log(index, indexPath)
      // console.log(index, indexPath)
   // }
  }
}


</script>

<style scoped>
.asideContainer {
  height: 100%;
}
.option-item{
  font-size: 20px;
  color: #333333;
  line-height: 20px;
  padding: 24px 0;
  padding-top: 24px;
  padding-right: 0px;
  padding-bottom: 24px;
  padding-left: 0px;
}
.menu-imageWrapper{


}
</style>