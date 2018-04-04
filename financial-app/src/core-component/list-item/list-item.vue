<template>
  <div class="list-item-wrapper">
    <div class="top">
      <h4 class="title">{{ title }}</h4>
      <badget :text="subTitle" :size="11"></badget>
    </div>
    <h4 class="percent">{{ percent }}</h4>
    <p class="desc">{{ desc }}</p>
  </div>
</template>

<script>
  import Badget from '../badget/badget.vue'
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      },
      percent: {
        type: String,
        default: ''
      },
      desc: {
        type: String,
        default: ''
      }
    },
    components: {
      Badget
    }
  }
</script>

<style lang="stylus" scoped>
.list-item-wrapper
  padding 10px 0 10px 20px
  .top 
    display flex
    padding 10px 0
    .title
      font-size 16px
      font-weight bold
      padding-right 6px
  .percent
    font-weight 700
    font-size 22px
    padding 5px 0
    color #FF5155
    line-height 29px
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
  .desc
    font-size 12px
    height 17px
    line-height 17px
    color #999
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
</style>