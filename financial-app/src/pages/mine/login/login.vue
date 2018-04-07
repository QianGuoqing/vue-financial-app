<template>
  <div class="login-wrapper">
    <div class="tab-link">
      <router-link to='/mine/password'>账号密码登陆</router-link>
      <router-link to='/mine/message'>短信验证码登陆</router-link>
    </div>
    <router-view></router-view>
    <div class="login-button">登陆</div>
    <div class="one-login-button">一键登录</div>
    <div class="extra">
      <div class="forget-password">
        <img src="./锁.svg" alt="">
        忘记密码
      </div>
      <div class="immediate-register">
        <img src="./手机.svg" alt="">
        手机立即注册
      </div>
    </div>
    <panel title="其他登录方式">
      <div class="other-login">
        <img src="./qq.svg" alt="">
        <img src="./微信.svg" alt="">
        <div class="policy">
          登录即代表您已同意隐私政策
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
  import Panel from '../../../core-component/panel/panel.vue'
  export default {
    components: {
      Panel
    }
  }
</script>

<style lang="stylus" scoped>
  .tab-link
    display flex
    justify-content space-around
    color #333
    font-size 14px
    line-height 44px
    a
      color #333
    .active
      border-bottom 2px solid #f23030

  .login-button
    width 335px
    height 45px
    line-height 45px
    text-align center
    background-color #eee
    color #848689
    border-radius 2px
    margin 10px auto
    font-weight 700
  .one-login-button
    width 335px
    height 45px
    line-height 45px
    text-align center 
    color #f23030
    border 1px solid #f23030
    font-weight 700
    margin 10px auto
  .extra
    display flex
    justify-content space-between
    padding 10px 20px
    margin-bottom 50px
    font-size 10px
    color #333
    vertical-align middle
    img
      width 22px
      height 22px
      vertical-align middle

  .other-login
    text-align center
    img
      width 22px
      height 22px
      margin 30px
    .policy
      font-size 14px
      height 30px
      line-height 30px
      color #333
      padding-bottom 30px
</style>