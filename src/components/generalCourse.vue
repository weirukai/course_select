<template>
<div class="generalCourseContainer">
  <el-container style="width: 100%;height: 100%">
    <el-aside>
      <div class="asidecontainer">
        <el-menu
            default-active="2"
            class="el-menu-general"
            @open="handleOpen"
            @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <div class="option-item">
                <i class="el-icon-location" style="font-size: 25px;"></i>
                <a class="item-link">上课地点</a>
              </div>
            </template>
            <el-menu-item-group>
              <template>
                <el-checkbox-group  style="display: flex;flex-direction: column;align-items: baseline;margin-left: 120px;"
                                    v-model="checkedCities">
                  <el-checkbox class="checkbox-container" v-for="local in locals" :label="local" :key="local">
                    <div class="item-li">{{local}}</div>
                  </el-checkbox>
                </el-checkbox-group>
              </template>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <div class="option-item">
                <i class="el-icon-date" style="font-size: 25px;"></i>
                <a class="item-link">上课时间</a>
              </div>
            </template>
            <el-menu-item-group>
              <template>
                <el-checkbox-group  style="display: flex;flex-direction: column;align-items: baseline;margin-left: 120px;"
                                    v-model="checkedclasstimes">
                  <el-checkbox class="checkbox-container" v-for="classtime in classtimes" :label="classtime" :key="classtime">
                    <div class="item-li">{{classtime}}</div>
                  </el-checkbox>
                </el-checkbox-group>
              </template>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <div class="option-item">
                <i class="el-icon-school" style="font-size: 25px;"></i>
                <a class="item-link">开课单位</a>
              </div>
            </template>
            <el-menu-item-group>
              <el-checkbox-group style="display: flex;flex-direction: column;align-items: baseline;margin-left: 120px;"
                                 v-model="checkeddepartments">
                <el-checkbox class="checkbox-container" v-for="department in departments" :label="department" :key="department">
                  <div class="item-li">{{department}}</div>
                </el-checkbox>
              </el-checkbox-group>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <div class="option-item">
                <i class="el-icon-house" style="font-size: 25px;"></i>
                <a class="item-link">课程类型</a>
              </div>
            </template>
            <el-menu-item-group>
              <el-checkbox-group style="display: flex;flex-direction: column;align-items: baseline;margin-left: 120px;"
                                 v-model="checkedtypes">
                <el-checkbox class="checkbox-container" v-for="classtype in classtypes" :label="classtype" :key="classtype">
                  <div class="item-li">{{classtype}}</div>
                </el-checkbox>
              </el-checkbox-group>
              <!--            <el-menu-item index="4-1">沟通与管理</el-menu-item>-->
              <!--            <el-menu-item index="4-2">科技与环境</el-menu-item>-->
              <!--            <el-menu-item index="4-3">历史与文化</el-menu-item>-->
              <!--            <el-menu-item index="4-4">文学与艺术</el-menu-item>-->
              <!--            <el-menu-item index="4-5">社会与经济</el-menu-item>-->
              <!--            <el-menu-item index="4-6">思维与方法</el-menu-item>-->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>

    </el-aside>
    <el-main>


    </el-main>

  </el-container>


</div>

</template>

<script>
const localOptions = ['东九','西十二'];
const classtimeOptions =['周一','周二','周三','周四','周五','周六','周日'];
const departmentsOptions =['马克思学院','体育学院','计算机学院']
const classtypesOptions =['沟通与管理','科技与环境','历史与文化','社会与经济','思维与方法','文学与艺术']
export default {
name: "generalCourse",
  data() {
    return{
      checkedCities:['东九','西十二'],
      checkedclasstimes:['周一','周二','周三','周四','周五','周六','周日'],
      checkeddepartments:['马克思学院','体育学院','计算机学院'],
      checkedtypes:['沟通与管理','科技与环境','历史与文化','社会与经济','思维与方法','文学与艺术'],
      locals:localOptions,
      classtimes:classtimeOptions,
      departments:departmentsOptions,
      classtypes:classtypesOptions,
    }
  },

  methods: {
    handleNodeClick(data){
      console.log(data)
    }
  }
}








</script>

<style scoped>
.generalCourseContainer{

  height: 100%;
  width: 100%;
}
.checkbox-container{
  color: #606226;
  font-weight: 500;
  font-size: 14px;
  cursor:pointer;
  margin-top: 8px;
}
.item-li{
  position: relative;
  display: inline-block;
  font-size: 16px;
  color: #333333;
  line-height: 20px;
  box-sizing: border-box;
  cursor: pointer;
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
  border-bottom: 1px solid #D8D8D8;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #D8D8D8;
}
.asidecontainer{
  height: 100%;
  width: 100%;
}

</style>
<style>
.el-submenu__title{
  height: 73.8px;
  line-height: 56px;
  position: relative;
  white-space: nowrap;
  list-style: none;
}
.el-submenu__icon-arrow{
  font-size: 22px;
}
</style>

