<template>

  <div class="generalCourseContainer">
    <el-container style="width: 100%;height: 100%">
      <el-aside>
        <div class="asidecontainer">
          <el-menu
              default-active="2"
              class="el-menu-general"
              unique-opened=true
              @open="handleOpen"
              @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <div class="option-item">
                  <i class="el-icon-location" style="font-size: 25px;"></i>
                  <a class="item-link">上课地点</a>
                </div>
              </template>
              <el-menu-item-group>
                <template>
                  <el-checkbox-group
                      style="display: flex;flex-direction: column;align-items: baseline;margin-left: 120px;"
                      v-model="checkedCities">
                    <el-checkbox class="checkbox-container" v-for="local in locals" :label="local" :key="local">
                      <div class="item-li">{{ local }}</div>
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
                  <el-checkbox-group
                      style="display: flex;flex-direction: column;align-items: baseline;margin-left: 120px;"
                      v-model="checkedclasstimes">
                    <el-checkbox class="checkbox-container" v-for="classtime in classtimes" :label="classtime"
                                 :key="classtime">
                      <div class="item-li">{{ classtime }}</div>
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
                <el-checkbox-group
                    style="display: flex;flex-direction: column;align-items: baseline;margin-left: 120px;"
                    v-model="checkeddepartments">
                  <el-checkbox class="checkbox-container" v-for="department in departments" :label="department"
                               :key="department">
                    <div class="item-li">{{ department }}</div>
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
                <el-checkbox-group
                    style="display: flex;flex-direction: column;align-items: baseline;margin-left: 120px;"
                    v-model="checkedtypes">
                  <el-checkbox class="checkbox-container" v-for="classtype in classtypes" :label="classtype"
                               :key="classtype">
                    <div class="item-li">{{ classtype }}</div>
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
        <div class="courseDisplayContainer">
          <div v-for="Item in courses" :key="Item.courseId" class="courseItem" @mouseover="handleMouseOver($event)"
               @mouseleave="handleMouseLeave($event)">
            <div class="recruit-list-link" @click="chooseClass">
              <h4 class="courseTitle">{{ Item.courseName }}(--{{ Item.courseType }})</h4>
              <p class="recruit-tips">
                <span>课时:{{ Item.courseHours }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>容量:{{ Item.capacity }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>学分:{{ Item.courseCredit }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>周次:{{ Item.courseWeek }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>地点:{{ Item.courseLocation }}</span>
              </p>

              <p class="recruit-text">
                教师：{{ Item.courseCollege }}-{{ Item.teacherName }}-{{ Item.teacherTitle }};
              </p>
              <p class="recruit-text">
                时间: 上课周次为{{ Item.courseWeek }},每周时间为{{ Item.courseTime }}
              </p>


            </div>

            <i class="el-icon-plus selectIcon"></i>


          </div>

          <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
          </el-pagination>

        </div>


      </el-main>

    </el-container>


  </div>

</template>

<script>
const localOptions = ['东九', '西十二'];
const classtimeOptions = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const departmentsOptions = ['马克思学院', '体育学院', '计算机学院']
const classtypesOptions = ['沟通与管理', '科技与环境', '历史与文化', '社会与经济', '思维与方法', '文学与艺术']
import {ManyCourses} from "@/components/ManyCourses";

export default {

  name: "generalCourse",
  data() {
    return {
      checkedCities: ['东九', '西十二'],
      checkedclasstimes: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      checkeddepartments: ['马克思学院', '体育学院', '计算机学院'],
      checkedtypes: ['沟通与管理', '科技与环境', '历史与文化', '社会与经济', '思维与方法', '文学与艺术'],
      locals: localOptions,
      classtimes: classtimeOptions,
      departments: departmentsOptions,
      classtypes: classtypesOptions,
      courses: ManyCourses
    }
  },

  methods: {

    handleMouseOver: function (event) {
      var currentDom = event.currentTarget
      currentDom.setAttribute("class", "courseItemActive")
    },
    handleMouseLeave: function (event) {
      var currentDom = event.currentTarget
      currentDom.setAttribute("class", "courseItem")
    },
    chooseClass:function ()
    {

    }

  },

}


</script>

<style scoped>
.generalCourseContainer {
  height: 100%;
  width: 100%;
}

.checkbox-container {
  color: #606226;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  margin-top: 8px;
}

.item-li {
  position: relative;
  display: inline-block;
  font-size: 16px;
  color: #333333;
  line-height: 20px;
  box-sizing: border-box;
  cursor: pointer;
}

.option-item {
  font-size: 16px;
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

.asidecontainer {
  height: 100%;
  width: 100%;
}


.courseDisplayContainer {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  text-align: left;
  overflow-x: hidden;
}

.courseItem {
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  min-height: 184px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 583px;

}

.courseItemActive {
  box-shadow: 8px 6px 3px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  min-height: 184px;
  color: #abcdef;
  position: relative;
  bottom: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 583px;

}

.recruit-list-link {
  padding-top: 1%;
  padding-left: 3.5%;
  padding-bottom: 3.5%;
  padding-right: 5%

}

.courseTitle {
  font-size: 22px;
  line-height: 24px;
  transition: all .05s cubic-bezier(0.2, 0.0, 0.2, 1);
}

.recruit-tips {
  font-size: 16px;
  margin: 6px 0px 22px;
  line-height: 22px;
}

.recruit-text {
  color: #808080;
  line-height: 14px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.selectIcon {
  font-size: 60px;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
}
</style>
<style>
.el-submenu__title {
  height: 73.8px;
  line-height: 56px;
  position: relative;
  white-space: nowrap;
  list-style: none;
}

.el-submenu__icon-arrow {
  font-size: 22px;
}
</style>
