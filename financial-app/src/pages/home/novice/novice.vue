<template>
  <div class="novice-wrapper">
    <app-panel title="新手特权">
      <div class="novice-detail">
        <div class="novice-detail-left">
          <h5 class="title">下载APP <span class="red-tip">送888元礼包</span></h5>
          <p class="sub-title">新手专属</p>
          <img class="item-image" src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
        </div>
        <div class="novice-detail-right">
          <div class="detail-sub-item">
            <div class="desc">
              <h5 class="red-tip title">领128元新手礼包</h5>
              <p class="sub-title">立即开通</p>
            </div>
            <img class="small-item-image" src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
          </div>
          <div class="detail-sub-item">
            <div class="desc">
              <h5 class="title">打白条 <span class="red-tip">享免息</span></h5>
              <p class="sub-title">立即开通享豪礼</p>
            </div>
            <img class="small-item-image" src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
          </div>
        </div>
      </div>
    </app-panel>
  </div>
</template>

<script>
  import AppPanel from '../../../core-component/panel/panel.vue'
  export default {
    components: {
      AppPanel
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../common/stylus/variables.styl"
  .red-tip
    color $color-main-red

  .title
    font-size 16px
    line-height 20px
  
  .sub-title
    font-size 14px
    color #999
    padding-top 5px
  
  .small-item-image
    width 47px
    height 47px

  .novice-detail
    display flex
    justify-content space-around
    text-align center
    border-top 1px solid $color-background
    padding 32px 0
    .novice-detail-left 
      border-right 1px solid $color-background
      flex 1
      .item-image
        width 78px
        padding-top 12px
    .novice-detail-right
      display flex
      flex-direction column
      flex 1
      .detail-sub-item
        display flex
        justify-content space-around
        flex 1
        &.detail-sub-item:first-child
          border-bottom 1px solid $color-background
          padding-bottom 12px
        &.detail-sub-item:last-child
          padding-top 16px
        .desc
          .title
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            text-align left 
            width 110px
          .subtitle
            text-align left 

</style>