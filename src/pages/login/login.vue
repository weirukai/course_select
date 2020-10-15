<template>
  <div class="log-layout">
    <el-container class="el-container" style="height: 100%">
      <el-header class="logheader" style="height: 80px">
        <div class="logheader-left">
          <img
              src="../../assets/loghust.png"
              class="loghust"
          >
        </div>
        <div class="logheader-right">
          <div>
            <span class="infoItem">热点问题</span>
            <el-divider direction="vertical"></el-divider>
            <span class="infoItem">使用帮助</span>
            <el-divider direction="vertical"></el-divider>
            <span class="infoItem">在线客服</span>
            <el-divider direction="vertical"></el-divider>
            <span class="infoItem">使用建议</span>
          </div>
        </div>
      </el-header>

      <el-main class="logMain">
        <div class="loginContainer">
          <!--  <vue-particles color="#fff" :particlesNumber='60' :moveSpeed='1.5' :lineOpacity='0.5' class="bg"></vue-particles>-->
          <div class="loginForm">
            <div class="formContainer">
              <div class="formWrapper">
                <img src="https://pass.hust.edu.cn/cas/comm/image/logo-inside.png"
                     style="margin: 30px 0 80px;width: 300px;height: 60px;margin-bottom: 80px">
                <el-row :gutter="20">
                  <el-col :lg="6" :sm="10" class="aa">
                    <el-form class="el-form" :model="ruleForm" status-icon ref="ruleForm" label-width="100px">
                      <el-form-item style="margin-left: 0px" prop="pass">
                        <el-input  prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
                      </el-form-item>

                      <el-form-item  prop="username">
                        <el-input prefix-icon="el-icon-unlock" placeholder="请输入密码" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                      </el-form-item>
                      <!--<el-form-item label="年龄" prop="age">
                        <el-input v-model.number="ruleForm.age"></el-input>
                      </el-form-item>-->
                      <div class="buttonContainer">
                        <el-button type="primary" @click="submitForm('ruleForm')" style="margin-bottom: 20px;font-size: 20px">提交</el-button>
                        <el-button @click="resetForm('ruleForm')" style="font-size: 20px;margin-left: 0px">重置</el-button>
                      </div>



                    </el-form>
                  </el-col>
                </el-row>
              </div>

            </div>
          </div>
        </div>
      </el-main>
    </el-container>

  </div>

</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',

      }
    }


  },
  mounted() {

   var dom2= document.getElementsByClassName("el-form-item__content")
    console.log(dom2)
    for (let i=0;i<dom2.length;++i)
    {
      dom2[i].setAttribute("style","margin-left:0px");
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  }
}
</script>

<style scoped>
.loginContainer {
  width: 50%;
  height: 100%;
  float: right;
  display: table;
}

.loginForm {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: white;
  font-size: 18px;
}

.aa {
  margin: auto;
  float: none;
  width: 400px;
}
.logheader{
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #545c64;
  color: #ffffff;
}

.logheader-left{

}
.logMain{
  padding: 0;
  background:url("http://hub.hust.edu.cn/images/login-1.jpg ") no-repeat;
  background-size: 100% 100%;
}
.logheader-right{

}
.log-layout{
  width: 100%;
  height: 100%;
}
.formContainer{
  width: 420px;
  height: 470px;
  margin: auto;
  background-color: rgba(255,255,255,0.6);
  border-radius: 40px;
  margin-left: 210px;
}
.formWrapper{
  margin: auto;
  height: 400px;
}
.el-form{
  width: 270px;
  margin: auto;
}
.buttonContainer{
  display: flex;
  flex-direction: column;
  font-size: 20px;
}
.h3 {
  line-height: 60px;
  margin-left: 100px
}

.acount {
  text-align: left
}


</style>