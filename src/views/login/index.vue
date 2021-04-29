<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="login-form">
      <h2>Login Form</h2>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.username" tableindex="1" auto-complete="on" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input type="password" v-model="loginForm.password" tabindex="2" auto-complete="on" @keyup.enter="login" placeholder="password"></el-input>
      </el-form-item>
        <el-button :loading="loading" style="width: 100%;" type="primary" @click="login">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import { validUsername } from '@/utils/validate.js'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if(!validUsername(value)) {
        callback(new Error('please enter admin or editor'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('the password can not be less 6 digits'))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: { required: true, validator: validateUsername, trigger: 'blur' },
        password:{ required: true, validator: validatePassword, trigger: 'blur' }
      },
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    login() {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          this.$store.dispatch('user/login', this.loginForm)
        }
      })
    }
  }
}
</script>
<style lang="scss">
$cursor: #fff;
$light_gray:#fff;
$bg:#283443;
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      // appearance: none;
      padding: 12px 5px 12px 15px;
      caret-color: $cursor;
      height: 47px;
      color: $light_gray;
    }
  }
  .el-form-item {
    background: rgba(0,0,0,.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  width: 100%;
  min-height: 100%;
  background-color: $bg;

  .login-form {
    width: 520px;
    margin: 0 auto;
    padding: 160px 35px 0;

    h2 {
      color: #fff;
    }
    .svg-container {
      color: $dark_gray;
      display: inline-block;
      padding: 6px 5px 6px 12px;
    }
  }
}
</style>