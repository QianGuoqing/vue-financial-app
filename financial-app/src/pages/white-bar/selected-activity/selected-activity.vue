<template>
  <div class="selected-activity-wrapper">
    <panel title="精选活动">
      <div class="image-container">
        <div class="image-wrapper">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t17374/350/576442826/54240/a9918a9/5a97d2c0N021cf2e0.png?width=376&height=264" alt="">
        </div>
        <div class="image-wrapper">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14653/159/1840910093/27778/53ebfb91/5a5c5cc9N28e0dc96.png?width=376&height=264" alt="">
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
    }
  }
</script>

<style lang="stylus" scoped>
  .image-container
    display flex
    justify-content space-around
    .image-wrapper
      width 48%
      img 
        width 100%
</style>