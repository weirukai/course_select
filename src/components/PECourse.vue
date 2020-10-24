<template>

  <div class="generalCourseContainer">
    <el-container style="width: 100%;height: 100%">
      <el-aside>
        <div class="asidecontainer">
          <el-menu
              default-active="2"
              class="el-menu-general"
              unique-opened=true
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
                      v-model="checkedCities"
                      @click="handleCheckedLocationsChange">
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
                      v-model="checkedCourseDay"
                      @click="handleCheckedCourseChange">
                    <el-checkbox class="checkbox-container" v-for="classtime in courseDays" :label="classtime"
                                 :key="classtime">
                      <div class="item-li">{{ classtime }}</div>
                    </el-checkbox>
                  </el-checkbox-group>
                </template>
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

            <i class="el-icon-plus selectIcon" @click="chooseClass(Item.id)"></i>


          </div>

          <el-pagination
              background
              layout="prev, pager, next"
              :page-size="10"
              :total="courseNum"
              @current-change="handleCurrentChange"
              style="text-align: center"
          >
          </el-pagination>

        </div>


      </el-main>

    </el-container>


  </div>

</template>

<script>
import {ManyCourses} from "@/components/ManyCourses";

const localOptions = ['东九', '西十二'];
const courseDayOptions = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
export default {
name: "PECourse",
  data() {
    return {
      checkedCities: ['东九', '西十二'],
      checkedCourseDay: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      locals: localOptions,
      courseDays: courseDayOptions,
      courses: [],
      courseNum: 0,
      chooseType:{
        location:["东九","西十二"],
        courseDay:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
    }
  },

  created() {
    var currentCourse = [];
    currentCourse = ManyCourses.slice(0, 10)
    this.courses = currentCourse
    this.courseNum = ManyCourses.length
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
    chooseClass: function (classID) {
      console.log(classID)
      this.$confirm('确定选择这门课程?', '确认信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '选择成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });

    },
    handleCurrentChange(val) {
      this.courses = ManyCourses.slice((val - 1) * 10, val * 10);
    },
    handleCheckedLocationsChange(){
      this.chooseType.location=this.checkedCities;
    },
    handleCheckedCourseChange(){
      this.chooseType.courseDay=this.checkedCourseDay;
    }


  },
}
</script>

<style scoped>
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

.item-li {
  position: relative;
  display: inline-block;
  font-size: 16px;
  color: #333333;
  line-height: 20px;
  box-sizing: border-box;
  cursor: pointer;
}

.checkbox-container {
  color: #606226;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  margin-top: 8px;
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