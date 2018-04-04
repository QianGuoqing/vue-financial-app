<template>
  <div class="service-wrapper">
    <panel title="生活服务">
      <div class="service-list">
        <div class="service-list-item" v-for="item in serviceItems" :key="item.imgUrl">
          <img class="icon-image" :src="item.imgUrl" alt="">
          <h4 class="title">{{ item.title }}</h4>
          <p class="desc" v-if="item.subTitle">{{ item.subTitle }}</p>
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
    },
    data() {
      return {
        serviceItems: [
          {
            imgUrl: '//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135',
            title: '惠加油',
            subTitle: ''
          },
          {
            imgUrl: '//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132',
            title: '小白信用',
            subTitle: '全新升级'
          },
          {
            imgUrl: '//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135',
            title: '信用卡',
            subTitle: ''
          },
          {
            imgUrl: '//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135',
            title: '卡转让',
            subTitle: ''
          },
          {
            imgUrl: '//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135',
            title: '定期还款',
            subTitle: ''
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .service-list
    display flex
    justify-content space-around
    .service-list-item
      text-align center
      padding-bottom 40px
      .icon-image
        width 52px
        height 52px
      .title
        margin-top -8px
        color #666
        font-weight normal
      .desc
        margin-top -8px
        color #FF801A
</style>