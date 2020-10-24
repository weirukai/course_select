<template>
  <div class="selectedCourseContainer">


    <div >
      <div v-for="(Item,index) in courses" :key="Item.courseId">
        <el-row :gutter="20">
          <el-col :span="12">
            <div v-if="index%2===0" :key="Item.courseId" class="courseItem selectedCourseItem" @mouseover="handleMouseOver($event)"
                 @mouseleave="handleMouseLeave($event)">
              <div class="recruit-list-link" @click="dropClass" style="text-align: left">
                <h4 class="courseTitle">{{ Item.courseName }}</h4>
                <p class="recruit-tips">
                  <span>课时:{{ Item.courseHours }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>容量:{{ Item.peopleNum }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>学分:{{ Item.courseCredit }}</span>
                  <el-divider direction="vertical"></el-divider>

                  <span>周次:{{Item.courseWeekly}}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>地点:{{ Item.courseLocation }}</span>
                </p>
                <p class="recruit-text">
                  教师：{{ Item.courseCollege }}-{{ Item.courseTeacher }}-{{ Item.teacherType }};
                </p>
                <p class="recruit-text">
                  时间: 上课周次为{{ Item.courseWeekly }},每周时间为{{ Item.courseDay }}:{{ Item.courseSection }}
                </p>


              </div>

              <i class="el-icon-delete selectIcon color-danger"  @click="dropClass(Item.id)"></i>

            </div>
          </el-col>
          <el-col :span="12">
            <div v-if="index%2===1" :key="Item.courseId" class="courseItem selectedCourseItem" @mouseover="handleMouseOver($event)"
                 @mouseleave="handleMouseLeave($event)">
              <div class="recruit-list-link" @click="dropClass" style="text-align: left">
                <h4 class="courseTitle">{{Item.courseName }}(--{{ Item.courseType }})</h4>
                <p class="recruit-tips">
                  <span>课时:{{ Item.courseHours }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>容量1:{{ Item.capacity }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>学分:{{ Item.courseCredit }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>周次:{{ Item.courseWeek }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>地点:{{Item.courseLocation }}</span>
                </p>

                <p class="recruit-text">
                  教师：{{ Item.courseCollege }}-{{Item.teacherName }}-{{ Item.teacherTitle }};
                </p>
                <p class="recruit-text">
                  时间: 上课周次为{{ Item.courseWeek }},每周时间为{{ Item.courseTime }}
                </p>
              </div>

              <i class="el-icon-delete selectIcon color-danger" @click="dropClass(Item.id)"></i>

            </div>

          </el-col>
        </el-row>
      </div>

    </div>


  </div>
</template>

<script>
import { dropCourse, getUserSelectedCourse} from "@/assets/Utils/requestAPI";


export default {
  name: "courseSelected",
  data(){
    return {
      courses:null
    }
  },
created() {
    this.refreshSelectedCourse()
  },
  methods:{
    refreshSelectedCourse:function ()
    {
      getUserSelectedCourse().then((res)=>{
        if(res.status===200&&res.data.code===0)
        {
          this.courses=res.data.data
        }
      })
    },
    handleMouseOver: function (event) {
      var currentDom = event.currentTarget
      currentDom.setAttribute("class", "courseItemActive selectedCourseItemActive")
    },
    handleMouseLeave: function (event) {
      var currentDom = event.currentTarget
      currentDom.setAttribute("class", "courseItem selectedCourseItem")
    },
    dropClass:function (classID){
      this.$confirm('确定退选这门课程?', '确认信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        dropCourse(classID).then((res) => {
              if (res.status===200&&res.data.code===0)
              {
                this.refreshSelectedCourse()
                this.$message({
                  type: 'success',
                  message: '退选成功!'
                });
              }
            }
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });





    }



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