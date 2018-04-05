<template>
  <div class="welfare-wrapper">
    <img  class="top-image" src="https://img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320" alt="">
    <panel title="白条福利">
      <div class="welfare">
        <div class="welfare-item" v-for="welfare in welfares" :key="welfare.imgUrl">
          <div class="desc">
            <img :src="welfare.imgUrl" alt="" class="welfare-image">
            <div class="content">
              <span class="title">{{ welfare.title }}</span> <br>
              <span class="sub-title">{{ welfare.subTitle }}</span>
            </div>
          </div>
          <strong class="tips">
            <span class="tips-text">{{ welfare.tips }}</span>
            <span class="tips-arrow"> > </span>
          </strong>
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
        welfares: [
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
            title: '开通白条',
            subTitle: '送百元元礼包',
            tips: '立即查看'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
            title: '白条提额',
            subTitle: '金融app专享提额礼包',
            tips: '去提额'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
.welfare-wrapper
  .top-image
    width 100%
  .welfare
    padding 0 20px
    .welfare-item
      display flex
      justify-content space-between
      border-top 1px solid #f5f5f5
      padding 15px 0
      .desc
        display flex
        .welfare-image
          width 44px
          height 44px
        .content
          margin-left 20px
          .title
            font-size 16px
            color #333
            line-height 1.8
          .sub-title
            font-size 12px
            color #999
            line-height 1.1
      .tips
        font-weight bold
        vertical-align middle
        .tips-text
          font-size 14px
          color #FF801A
        .tips-arrow
          color #333
</style>