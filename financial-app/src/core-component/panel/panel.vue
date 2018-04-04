<template>
  <div class="panel">
    <h4 class="title"> - {{ title }} - </h4>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .panel
    panel-default()
    .title
      text-align center
      font-weight 700
</style>
