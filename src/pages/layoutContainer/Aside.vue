<template>
  <div class="asideContainer main-backgroundColor">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo main-backgroundColor"
        @open="handleOpen"
        @close="handleClose"
        @select="select"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
      <!--router属性可以直接将menu-item的index映射成router的path-->
      <template v-for="index in menu">
        <el-submenu :index="index.id" :key="index.id">
          <template slot="title">
            <i :class="index.icon"></i>
            <span slot="title">{{ index.name }}</span>
          </template>
          <el-menu-item-group class="menu-item-group">
            <el-menu-item style="min-width:180px" v-for="item in index.subItem" :index="item.id" :key="item.id"
                          class="menu-item">{{ item.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
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
    select(index, indexPath) {
      console.log(index, indexPath)
      console.log(index, indexPath)
    }
  }
}


</script>

<style scoped>
.asideContainer {
  height: 100%;
}
</style>