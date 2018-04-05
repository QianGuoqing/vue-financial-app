<template>
  <footer class="footer-wrapper">
    <img class="image" :src="imageUrl" alt="">
    <div class="device">
      <div class="device-item" v-for="device in devices" :key="device.title">
        <img class="device-image" :src="device.imgUrl" alt="">
        <h4 class="device-title">{{ device.title }}</h4>
      </div>
    </div>
    <div class="footer-list">
      <div class="footer-list-item" v-for="item in footerLists" :key="item">
        <p>{{ item }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: {
      imageUrl: {
        type: String,
        default: 'https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252'
      },
    },
    data() {
      return {
        footerLists: [
          'Copyright © 2004-2018 京东JD.com 版权所有', 
          '投资有风险，购买需谨慎',
          '京东金融平台服务协议',
          '京东金融隐私政策'],
        devices: [
          {
            imgUrl: '//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108',
            title: '客户端'
          },
          {
            imgUrl: '//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108',
            title: '触屏版'
          },
          {
            imgUrl: '//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108',
            title: '电脑版'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
.footer-wrapper
  background-color #f5f5f5
  .image
    width 100%
  .device
    display flex
    justify-content space-around
    text-align center
    border-bottom 1px solid #ddd
    padding-bottom 20px
    .device-item
      padding-top 20px
      .device-image
        width 45px
        height 45px
      .device-title
        font-size 13px
        color #333
        padding-top 5px
  .footer-list
    text-align center
    line-height 1.6
    font-size 12px
    color #999
    .footer-list-item
      border-bottom 1px solid #ddd
      padding 12px 16px
</style>