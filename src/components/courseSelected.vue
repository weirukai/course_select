<template>
  <div class="selectedCourseContainer">


    <div >
      <div v-for="Item in courses" :key="Item.courseId">
        <el-row :gutter="20">
          <el-col :span="12">
            <div :key="Item.courseId" class="courseItem selectedCourseItem" @mouseover="handleMouseOver($event)"
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

              <i class="el-icon-delete selectIcon color-danger"  @click="chooseClass(Item.id)"></i>

            </div>
          </el-col>
          <el-col :span="12">

            <div :key="Item.courseId" class="courseItem selectedCourseItem" @mouseover="handleMouseOver($event)"
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

              <i class="el-icon-delete selectIcon color-danger" @click="chooseClass(Item.id)"></i>


            </div>

          </el-col>
        </el-row>

      </div>




    </div>







  </div>
</template>

<script>
import {ManyCourses} from "@/components/ManyCourses";

export default {
  name: "courseSelected",
  data(){
    return {
      courses:ManyCourses
    }
  },
  methods:{
    handleMouseOver: function (event) {
      var currentDom = event.currentTarget
      currentDom.setAttribute("class", "courseItemActive selectedCourseItemActive")
    },
    handleMouseLeave: function (event) {
      var currentDom = event.currentTarget
      currentDom.setAttribute("class", "courseItem selectedCourseItem")
    },
  }

}


</script>

<style scoped>
.selectedCourseContainer{

  height: 100%;
  width: 100%;

}
.selectedCourseItem{
  min-width: 460px;
}

.selectedCourseItemActive{
  min-width: 460px;
}
</style>