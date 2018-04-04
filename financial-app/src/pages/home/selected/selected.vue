<template>
  <div class="selected-wrapper">
    <app-panel title="理财精选" class="selected-panel clearfix">
      <div v-for="selection in selections" :key="selection.title" class="selection-item">
        <list-item 
          :title="selection.title"
          :sub-title="selection.subTitle"
          :percent="selection.percent"
          :desc="selection.desc"></list-item>
      </div>
    </app-panel>
  </div>
</template>

<script>
  import AppPanel from '../../../core-component/panel/panel.vue'
  import ListItem from '../../../core-component/list-item/list-item.vue'
  export default {
    components: {
      AppPanel,
      ListItem
    },
    data() {
      return {
        selections: [
          {
            title: "定期理财",
            subTitle: "90天可质押",
            percent: "5.50%",
            desc: "历史年化结算利率"
          },
          {
            title: "固收理财",
            subTitle: "理财推荐",
            percent: "5.80%",
            desc: "综合年化收益率"
          },
          {
            title: "基智账户",
            subTitle: "组合投资",
            percent: "8%-10%",
            desc: "止盈年化收益率"
          },
          {
            title: "小白基金",
            subTitle: "超短期",
            percent: "5.00%",
            desc: "7日年化收益率"
          },
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .list-item-wrapper:nth-child(1)
    border-bottom 1px solid #f5f5f5
    border-right 1px solid #f5f5f5

  .selected-panel
    &.clearfix:after
      width 0
      height 0
      display block
      content ''
      clear both
    .selection-item
      float left
      width 50%
</style>