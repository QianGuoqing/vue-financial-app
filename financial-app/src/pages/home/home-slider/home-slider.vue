<template>
  <div class="home-slider-wrapper">
    <div class="home-slider">
      <slider :slider-items="homeSliderItems"></slider>
    </div>
    <div class="home-entries">
      <div class="entries-item" v-for="entry in homeEntries" :key="entry.img">
        <img class="image" :src="entry.img" alt="">
        <h4 class="title">{{ entry.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import Slider from '../../../core-component/slider/slider.vue'
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'homeSliderItems',
        'homeEntries'
      ])
    },
    components: {
      Slider
    },
    created() {
      console.log(this.homeEntries)
    }
  }
</script>

<style lang="stylus" scoped>
.home-slider-wrapper
  margin-top 60px
  .home-slider
    margin-top 20px
  .home-entries
    display flex
    justify-content space-around
    text-align center
    width 100%
    padding 20px 0
    background-color #fff
    .entries-item
      .image
        width 52px
        height 52px
      .title
        font-size 14px
        font-weight bold
        padding-top 5px
</style>