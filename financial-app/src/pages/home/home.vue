<template>
  <div class="home-wrapper">
    <home-slider></home-slider>
    <novice></novice>
  </div>
</template>

<script>
  import HomeSlider from './home-slider/home-slider.vue'
  import Novice from './novice/novice.vue'
  export default {
    components: {
      HomeSlider,
      Novice
    }
  }
</script>

<style scoped lang="stylus">
.home-wrapper
  background-color #f5f5f5
  height 100%
</style>