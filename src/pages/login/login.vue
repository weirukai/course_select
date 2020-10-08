<template>

  <div class="loginContainer">
    <!--  <vue-particles color="#fff" :particlesNumber='60' :moveSpeed='1.5' :lineOpacity='0.5' class="bg"></vue-particles>-->
    <div class="loginForm">
      <el-row :gutter="20">
        <el-col :lg="6" :sm="10" class="aa">
          <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="账户" prop="username">
              <el-input type="password" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <!--<el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>-->
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>

          </el-form>
        </el-col>
      </el-row>
    </div>
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
  background: #2d3a4b;
  width: 100%;
  height: 100%;
  position: fixed;
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
}

.h3 {
  line-height: 60px;
  margin-left: 100px
}

.acount {
  text-align: left
}


</style>