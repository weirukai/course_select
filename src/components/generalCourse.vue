<template>
  <div class="generalCourseContainer">

    <el-container style="width: 100%;height: 100%">
      <el-aside></el-aside>
      <el-main>
        <div class="courseDisplayContainer">
          <div  v-for="Item in courses" :key="Item.courseId" class="courseItem" @mouseover="handleMouseOver($event)" @mouseleave="handleMouseLeave($event)">
            <div class="recruit-list-link" >
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
                上课时间:上课周次为{{ Item.courseWeek }},每周时间为{{ Item.courseTime }}
              </p>


            </div>

            <i class="el-icon-plus selectIcon"></i>


          </div>

        </div>

      </el-main>
    </el-container>


  </div>
</template>

<script>
export default {
  name: "generalCourse",
  methods:{

    handleMouseOver:function (event)
    {
      var currentDom=event.currentTarget
     currentDom.setAttribute("class","courseItemActive")
    },
    handleMouseLeave:function (event)
    {
      var currentDom=event.currentTarget
     currentDom.setAttribute("class","courseItem")
    }

  },
  data: function () {

    return {
      courses: [{
        courseId: 12343,
        courseName: '逻辑与幽默',
        courseType: '沟通与管理',
        courseHours: 32,
        courseCredit: 2,
        capacity: 180,
        courseCollege: '新闻学院',
        teacherName: "黄仁卓",
        teacherTitle: "副教授",
        courseWeek: "4-11",
        courseTime: "周三9-12",
        courseLocation: "东久",
      },
        {
          courseName: '逻辑与幽默',
          courseType: '沟通与管理',
          courseHours: 32,
          courseCredit: 2,
          capacity: 180,
          courseCollege: '新闻学院',
          teacherName: "黄仁卓",
          teacherTitle: "副教授",
          courseWeek: "4-11",
          courseTime: "周三9-12",
          courseLocation: "东久",
        },{
          courseName: '逻辑与幽默',
          courseType: '沟通与管理',
          courseHours: 32,
          courseCredit: 2,
          capacity: 180,
          courseCollege: '新闻学院',
          teacherName: "黄仁卓",
          teacherTitle: "副教授",
          courseWeek: "4-11",
          courseTime: "周三9-12",
          courseLocation: "东久",
        },{
          courseName: '逻辑与幽默',
          courseType: '沟通与管理',
          courseHours: 32,
          courseCredit: 2,
          capacity: 180,
          courseCollege: '新闻学院',
          teacherName: "黄仁卓",
          teacherTitle: "副教授",
          courseWeek: "4-11",
          courseTime: "周三9-12",
          courseLocation: "东久",
        }]
    }
  }
}
</script>

<style scoped>
.generalCourseContainer {
  height: 100%;
  width: 100%;
}

.courseDisplayContainer {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  text-align: left;
}

.courseItem {
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  min-height: 184px;
  display: flex;
  flex-direction: row;
  align-items: center
}

.courseItemActive{
  box-shadow: 8px 6px 3px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  min-height: 184px;
  color: #abcdef;
  position: relative;
  bottom: 6px;
  display: flex;
  flex-direction: row;
  align-items: center

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
  transition: all .35s cubic-bezier(0.2, 0.0, 0.2, 1);
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
.selectIcon{
  font-size: 60px;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
}
</style>