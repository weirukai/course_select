<template>

  <div class="generalCourseContainer">
    <el-container style="width: 100%;height: 100%">
      <el-aside>
        <div class="asidecontainer">
          <el-menu
              default-active="2"
              class="el-menu-general"
              :unique-opened="true"
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
                      @change="handleCheckedCitiesChange">
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
                      v-model="checkedcourseDay"
                      @change="handleCheckedCourseDayChange">
                    <el-checkbox class="checkbox-container" v-for="classtime in courseDay" :label="classtime"
                                 :key="classtime">
                      <div class="item-li">{{ classtime }}</div>
                    </el-checkbox>
                  </el-checkbox-group>
                </template>
              </el-menu-item-group>
            </el-submenu>
            <!--            <el-submenu index="3">-->
            <!--              <template slot="title">-->
            <!--                <div class="option-item">-->
            <!--                  <i class="el-icon-school" style="font-size: 25px;"></i>-->
            <!--                  <a class="item-link">开课单位</a>-->
            <!--                </div>-->
            <!--              </template>-->
            <!--              <el-menu-item-group>-->
            <!--                <el-checkbox-group-->
            <!--                    style="display: flex;flex-direction: column;align-items: baseline;margin-left: 120px;"-->
            <!--                    v-model="checkeddepartments">-->
            <!--                  <el-checkbox class="checkbox-container" v-for="department in departments" :label="department"-->
            <!--                               :key="department">-->
            <!--                    <div class="item-li">{{ department }}</div>-->
            <!--                  </el-checkbox>-->
            <!--                </el-checkbox-group>-->
            <!--              </el-menu-item-group>-->
            <!--            </el-submenu>-->
            <el-submenu index="4">
              <template slot="title">
                <div class="option-item">
                  <i class="el-icon-house" style="font-size: 25px;"></i>
                  <a class="item-link">课程类型</a>
                </div>
              </template>
              <el-menu-item-group>
                <el-checkbox-group
                    style="display: flex;flex-direction: column;align-items: baseline;margin-left: 110px;"
                    v-model="checkedtypes"
                    @change="handleCheckedTypeChange">
                  <el-checkbox class="checkbox-container" v-for="classtype in classtypes" :label="classtype"
                               :key="classtype">
                    <div class="item-li">{{ classtype }}</div>
                  </el-checkbox>
                </el-checkbox-group>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>

      </el-aside>
      <el-main>
        <div class="courseDisplayContainer">
          <div v-for="Item in courses" :key="Item.courseId" class="courseItem" @mouseover="handleMouseOver($event)"
               @mouseleave="handleMouseLeave($event)">
            <div class="recruit-list-link" >
              <h4 class="courseTitle">{{ Item.courseName }}(--{{ Item.courseType }})</h4>
              <p class="recruit-tips">
                <span>课时:{{ Item.courseHours }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>容量:{{ Item.peopleNum }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>学分:{{ Item.courseCredit }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>周次:{{ Item.courseWeekly }}</span>
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
import {chooseCourse, requestForCourse} from "@/assets/Utils/requestAPI";

const localOptions = ['东九', '西十二'];
const courseDayOptions = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
const departmentsOptions = ['马克思学院', '体育学院', '计算机学院']
const classtypesOptions = ['沟通与管理', '科技与环境', '历史与文化', '社会与经济', '文学与艺术']


export default {
  name: "generalCourse",


  data() {
    return {
      checkedCities: ['东九', '西十二'],
      checkedcourseDay: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      checkeddepartments: ['马克思学院', '体育学院', '计算机学院'],
      checkedtypes: ['沟通与管理', '科技与环境', '历史与文化', '社会与经济', '文学与艺术'],
      locals: localOptions,
      courseDay: courseDayOptions,
      departments: departmentsOptions,
      classtypes: classtypesOptions,
      courses: [],
      allCourse: [],
      courseNum: 0,
      chooseType: {
        location: ["东九", "西十二"],
        courseDay: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        type: ['沟通与管理', '科技与环境', '历史与文化', '社会与经济', '文学与艺术']
      }
    }
  },

  created() {
    var currentCourse = [];
    let chooseType = this.chooseType
    requestForCourse("/course/getGeneralCourse", chooseType).then(
        (res) => {
          if (res.status === 200 && res.data.code === 0)
            this.allCourse = res.data.data
          currentCourse = this.allCourse.slice(0, 10)
          this.courses = currentCourse
          this.courseNum = this.allCourse.length
        },
        (rej) => {
          return rej
        }
    )


  },
  //
  // mounted() {
  //   let that=this
  //   let chooseType=this.chooseType
  //  requestForCourse("/course/getGeneralCourse",chooseType).then(
  //      (res)=>{
  //        if (res.status===200&&res.data.code===0)
  //          that.courses=res.data.data
  //      },
  //      (rej)=>{
  //        return rej
  //      }
  //  )
  // },

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
        chooseCourse(classID).then((res) => {
             if (res.status===200&&res.data.code===0)
             {
              this.refreshClass()
               this.$message({
                 type: 'success',
                 message: '选择成功!'
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
    },
    refreshClass: function () {
      let currentCourse = []
      let chooseType = this.chooseType
      requestForCourse('/course/getGeneralCourse', chooseType).then(
          (res) => {
            if (res.status === 200 && res.data.code === 0)
              this.allCourse = res.data.data
            currentCourse = this.allCourse.slice(0, 10)
            this.courses = currentCourse
            this.courseNum = this.allCourse.length
          },
          (rej) => {
            return rej
          }
      )

    },
    handleCurrentChange(val) {
      this.courses = this.allCourse.slice((val - 1) * 10, val * 10);
    },
    handleCheckedCitiesChange() {
      this.chooseType.location = this.checkedCities;
      this.refreshClass()
    },
    handleCheckedCourseDayChange() {
      this.chooseType.courseDay = this.checkedcourseDay;
      this.refreshClass()

    },
    handleCheckedTypeChange() {
      this.chooseType.type = this.checkedtypes;
      this.refreshClass()
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
