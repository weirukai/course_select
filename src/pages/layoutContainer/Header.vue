<template>
<div class="headerContainer main-backgroundColor">
  <div class="headerUp">
    <div class="headleft">
      <img
          src="../../assets/hust.png"
          class="hust-img"
      >
      <div class="input-wrapper">
        <el-input
            placeholder="Search or jump to..."
            suffix-icon="el-icon-search"
            v-model="input1">
        </el-input>
      </div>
    </div>

    <div class="headerright">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avator-wrapper">
          <img
              :src="user.avatar"
              class="user-avatar"
          ><i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
  <div class="headerDown">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col><div class="col-name">姓名：{{user.username}}</div></el-col>
      <el-col><div class="col-studentID>"> 学号：{{user.studentID}}</div></el-col>
      <el-col><div class="col-classID"> 班级：{{user.classID}}</div></el-col>
    </el-row>
  </div>
</div>


</template>

<script>
export default {
  data(){
    return {
      input1: '',
      name: "Header",
      user:{
        username:"pl",
        studentID:"u201816235",
        classID:"软件学院",
        avatar:"http://img.alicdn.com/tfs/TB1fc6SdKuSBuNjy1XcXXcYjFXa-36-36.png",
      }
    }
  }
}
</script>

<style scoped>


.headerContainer{
  height:100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.headerUp{
  display: flex;
  justify-content: space-between;
  height: 75%;
}
.headerDown{
  height: 25%;
  display: flex;
  justify-content: flex-end;
  background-color: aqua;
}
.headleft{
  float: left;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.headerright{
  float: right;
  margin-top: 10px;
}
.avator-wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.user-avatar{
  height: 45px;
}
.hust-img{
  height:60px;
  margin-left: 60px;
}
.el-icon-caret-bottom{
  color: white;
  font-size: 20px;
}
.input-wrapper{
  margin-left: 20px;
}
.row-bg{
  width: 550px;
}
.headerDownright{
  display: flex;
  justify-content: end;
}
</style>