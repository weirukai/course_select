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
          <el-dropdown-item>帮助</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>我的</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
  <div class="headerDown">
    <div>
      <span class="infoItem">{{user.username}}</span>
      <el-divider direction="vertical"></el-divider>
      <span class="infoItem">{{user.studentID}}</span>
      <el-divider direction="vertical"></el-divider>
      <span class="infoItem">{{user.classID}}</span>
    </div>


<!--    <el-row type="flex" class="row-bg" style="width: max-content">-->
<!--      <el-col class="infoItem"><div>{{user.username}}</div> </el-col>-->

<!--      <el-col class="infoItem"><div >{{user.studentID}}</div> </el-col>-->

<!--      <el-col class="infoItem"><div>{{user.classID}}</div></el-col>-->
<!--    </el-row>-->
  </div>
</div>


</template>

<script>
import {getStudentInfo} from "@/assets/Utils/requestAPI";

export default {
  data(){
    return {
      input1: '',
      name: "Header",
      user:{
        username:"黄仁卓",
        studentID:"U201816235",
        classID:"软件学院",
        avatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1877122670,861705441&fm=26&gp=0.jpg",
      }
    }
  },
  mounted() {
    getStudentInfo().then((res)=>{
      if (res.status===200&&res.data.code===0)
      {
        this.user.username=res.data.data.name
        this.user.studentID=res.data.data.studentId
        this.user.classID=res.data.data.grade
      }
    })

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
  background-color: #2c3e50;
  color: white;
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
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid #2d3a4b;
  margin-right: 10px;

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

.headerDownright{
  display: flex;
  justify-content: end;
}

.infoItem{
width: max-content;
  margin-right: 10px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 13px;
  font-weight: bold;
}
</style>