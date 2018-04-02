<template>
  <div class="tab-wrapper">
    <ul class="tab-list">
      <router-link 
        tag="li"
        class="tab-list-item" 
        v-for="item in footerData" 
        :key="item.link" :to="{ path: item.link }">
        <div class="item">
          <img :src="item.icon" class="icon" alt="">
          <h4 class="name">{{ item.text }}</h4>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        footerData: [
          {
            link: '/home',
            text: '首页',
            icon: 'http://img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66'
          },
          {
            link: '/transaction',
            text: '理财',
            icon: 'http://img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66'
          },
          {
            link: '/white',
            text: '白条',
            icon: 'http://img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66'
          },
          {
            link: '/group',
            text: '众筹',
            icon: 'http://img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66'
          },
          {
            link: '/mine',
            text: '我的',
            icon: 'http://img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variables.styl'
.tab-wrapper
  box-sizing border-box
  width 100%
  position fixed
  left 0
  bottom 0
  border-top 1px solid #ccc
  padding-top 2px
  .tab-list
    width 100%
    height 55px
    display flex
    justify-content space-around
    text-align center
    font-size 11px
    .item
      display flex
      flex-direction column
      .icon
        width 33px
        height 33px
      .name
        color #333
        padding-top 5px

.active
  .name
    font-weight bold
    color $color-main-red !important
</style>