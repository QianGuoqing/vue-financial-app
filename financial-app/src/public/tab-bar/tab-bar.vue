<template>
  <div class="tab-wrapper">
    <ul class="tab-list">
      <router-link 
        tag="li"
        class="tab-list-item" 
        v-for="(item, index) in footerData" 
        :key="item.link" :to="{ path: item.link }">
        <div class="item" @click="getIndex(index)">
          <img v-if="currentIndex !== item.id - 1" :src="item.icon" class="icon" alt="">
          <img v-else :src="item.activeIcon" class="icon" alt="">
          <h4 class="name">{{ item.text }}</h4>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      getIndex(index) {
        console.log(index)
        this.currentIndex = index
      }
    },
    data() {
      return {
        currentIndex: -1,
        footerData: [
          {
            id: 1,
            link: '/home',
            text: '首页',
            icon: 'http://img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66',
            activeIcon: 'https://img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66'
          },
          {
            id: 2,
            link: '/transaction',
            text: '理财',
            icon: 'http://img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66',
            activeIcon: 'https://img12.360buyimg.com/jrpmobile/jfs/t3559/44/615554467/2520/21aa9352/580f2400N4a7b5398.png?width=66&height=66'
          },
          {
            id: 3,
            link: '/white',
            text: '白条',
            icon: 'http://img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66',
            activeIcon: 'https://img12.360buyimg.com/jrpmobile/jfs/t3673/27/676974575/1305/3f51b3c1/580f4e6eN6efa3e03.png?width=66&height=66'
          },
          {
            id: 4,
            link: '/group',
            text: '众筹',
            icon: 'http://img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66',
            activeIcon: 'https://img12.360buyimg.com/jrpmobile/jfs/t4114/213/1539606521/1876/9f736561/587d8deaNf7f37693.png?width=66&height=66'
          },
          {
            id: 5,
            link: '/mine',
            text: '我的',
            icon: 'http://img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66',
            activeIcon: 'https://img12.360buyimg.com/jrpmobile/jfs/t3442/196/638449103/2121/46fae777/580f244eN4d27d517.png?width=66&height=66'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variables.styl'
.tab-wrapper
  width 100%
  position fixed
  left 0
  bottom 0
  border-top 1px solid #ccc
  z-index 999
  background #fff
  .tab-list
    width 100%
    height 55px
    display flex
    justify-content space-around
    text-align center
    font-size 11px
    padding-top 5px
    .item
      display flex
      flex-direction column
      .icon
        width 22px
        height 22px
      .name
        color #333
        padding-top 5px

.active
  .name
    font-weight bold
    color $color-main-red !important
</style>