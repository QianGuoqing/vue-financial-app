<template>
  <header>
    <div class="header">
      <div class="login-register">
        <strong>登陆/注册</strong>
      </div>
      <div class="logo">
      </div>
      <btn class="app-download-button">APP下载</btn>
    </div>
  </header>
</template>

<script>
  import Btn from '../../core-component/btn/btn'
  
  export default {
    components: {
      Btn
    }
  }
</script>

<style lang="stylus" scoped>
header
  width 100%
  height 60px
  position fixed
  left 0
  top 0
  background-color #f9f9f9
  z-index 999
  .header
    display flex
    height 50px
    line-height 50px
    padding-left 20px
    justify-content space-between
    z-index 1000
    background #fff
    .logo-register
      font-size 28px
      height 30px
      line-height 30px
      color #333
    .logo
      width 33%
      background #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat
      background-size auto 50%
    .app-download-button
      height 28px
      line-height 28px
      margin 12px 20px 0 0
</style>
