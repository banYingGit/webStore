<template>
  <div class="login">
    <mt-field label="账号" placeholder="请输入您的手机号码" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password">
      <div class="forget"><router-link to="forget.html">忘记密码?</router-link></div>
    </mt-field>
    <mt-button size="large">立即登录</mt-button>
    <router-link to="register.html" class="register">立即注册</router-link>
    <div class="aa"><p>使用第三方账户登录</p></div>

  </div>
</template>

<script>
  export default {
    name: 'login',
    data: function () {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>
