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
const classtimeOptions = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
export default {
name: "PECourse",
  data() {
    return {
      checkedCities: ['东九', '西十二'],
      checkedclasstimes: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      checkeddepartments: ['马克思学院', '体育学院', '计算机学院'],
      checkedtypes: ['沟通与管理', '科技与环境', '历史与文化', '社会与经济', '思维与方法', '文学与艺术'],
      locals: localOptions,
      classtimes: classtimeOptions,
      courses: [],
      courseNum: 0
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
    }

  },
}
</script>

<style scoped>

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