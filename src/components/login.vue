<template>
    <div class="login-container">
      <el-form label-width="80px" class="login-form">
        <h2 class="login-title">管理系统</h2>
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<!--<template>-->
<!--  <div>-->
<!--    用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>-->
<!--    <br><br>-->
<!--    密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>-->
<!--    <br><br>-->
<!--    <button v-on:click="login">登录</button>-->
<!--  </div>-->
<!--</template>-->

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/AppIndex'})
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style acoped>
  .login-form {
    width: 350px;
    margin: 160px auto; /* 上下间距160px，左右自动居中*/
    background-color: rgb(255, 255, 255); /* 透明背景色 */
    padding: 30px;
    border-radius: 20px; /* 圆角 */
  }

  /* 背景 */
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background: url("../assets/uu.jpg")no-repeat;
    background-size: 100%,100%;
  }

  /* 标题 */
  .login-title {
    color: #303133;
    text-align: center;
  }
</style>
