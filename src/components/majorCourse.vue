<template>

  <div class="generalCourseContainer">
    <el-container style="width: 100%;height: 100%">
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

export default {
name: "majorCourse",
  data() {
    return {
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