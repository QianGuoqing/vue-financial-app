<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixin.styl"
  .button
    button-default()
</style>
