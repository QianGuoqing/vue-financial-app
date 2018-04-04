<template>
  <div class="transaction-selected-wrapper">
    <panel title="精选推荐">
      <div class="selected-list">
        <div class="selected-list-item" v-for="selection in selections" :key="selection.imgUrl">
          <div class="item-left">
            <img class="image" :src="selection.imgUrl" alt="">
            <div class="content">
              <span class="title">{{ selection.title }}</span>
              <br>
              <span class="sub-title">{{ selection.subTitle }}</span>
            </div>
          </div>
          <div class="item-right">
            <span class="tips">{{ selection.tips }}</span> 
            <span class="arrow"> > </span>
          </div>
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
        selections: [
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
            title: '月度理财',
            subTitle: '预期年化收益率4.50%',
            tips: '去赚钱'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
            title: '季度理财',
            subTitle: '历史年化回报率5.50%',
            tips: '去赚钱'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
            title: '一年理财',
            subTitle: '历史年化回报率5.80%',
            tips: '去赚钱'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .selected-list
    .selected-list-item
      display flex
      justify-content space-between
      padding 15px 16px
      border-top 1px solid #f5f5f5
      .item-left
        display flex
        .image
          width 44px
          height 44px
          vertical-align middle
        .content
          margin-left 20px
          .title
            line-height 1.8
            font-size 16px
            color #333
          .sub-title
            color #ff3232
            line-height 1.1
      .item-right
        .tips
          color #FF801A
          font-size 14px
          font-weight bold
          vertical-align middle 
          padding-right 5px
        .arrow
          font-weight bold
          color #999
          vertical-align middle

</style>