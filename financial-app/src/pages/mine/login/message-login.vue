<template>
  <div class="message-login-wrapper">
    <div class="account-a">
      <span class="info">手机</span> <input type="text" placeholder="手机号码">
    </div>
    <div class="password-a">
      <span class="info">密码</span> <input type="password" placeholder="请输入密码">
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.message-login-wrapper {
  padding: 15px 22px;
}
.info {
  font-size: 14px;
  line-height: 48px;
}
.account-a, .password-a {
  border-bottom: 1px solid #f5f5f5;
}
input {
  width: 80%;
  padding: 5px 5px 0 5px;
  margin-left: 10px;
  outline: none;
  font-size: 14px;
  color: #959595;
}
</style>