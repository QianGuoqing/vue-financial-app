<template>
  <div class="recommend-item-wrapper">
    <img :src="topImage" alt="" class="top-image">
    <div class="item-list">
      <div class="item" v-for="item in items" :key="item.imgUrl">
        <badget class="badget" text="精选" bg-color="#c1c1c1" :size="10"></badget>
        <img :src="item.imgUrl" alt="">
        <p class="title">{{ item.title }}</p>
        <p class="price">
          <span class="rmb">￥</span>
          <span class="rmb-number">{{ item.price }}</span>
          <span class="start">起</span>
        </p>
        <div class="progress">
          <div class="progress-bar"></div>
          <div class="percent">{{ item.percent }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Badget from '../../../../core-component/badget/badget.vue'
  export default {
    components: {
      Badget
    },
    props: {
      topImage: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default: []
      }
    },
  }
</script>

<style lang="stylus" scoped>
.recommend-item-wrapper
  position relative
  .top-image
    width 100%
  .item-list
    display flex
    justify-content space-around
    text-align center
    padding-bottom 20px
    .item
      width 45%
      background-color rgba(0, 0, 0, 0.02)
      padding 20px 0
      position relative
      .badget
        position absolute
        left 0
        top 0
      img
        width 90px
        height 90px
      .title
        font-size 14px
        font-weight 700
        color #444
        height 20px
        line-height 20px
        margin-top 5px
      .price
        color #FF3232
        font-weight 400
        .rmb
          font-size 14px
        .rmb-number
          font-size 18px
          font-weight 700
        .start
          font-size 10px
          color #999
      .progress
        display flex
        justify-content space-around
        .progress-bar
          width 60%
          border-radius 10px
          height 5px
          background-image linear-gradient(270deg,#F55 1%,#FF9C31 100%)
          position relative
          top 10px
        .percent
          font-size 12px
          color #999
          font-weight 700
          position relative
          top 3px
</style>