<template>
  <div class="recommend-wrapper">
    <div class="more">更多推荐 > </div>
    <panel title="新品推荐" class="recommend-panel">
      <slider :options="options" :slider-items="sliderItems" :show-dots="false">

      </slider>
    </panel>
  </div>
</template>

<script>
  import Panel from '../../../core-component/panel/panel.vue'
  import Slider from '../../../core-component/slider/slider.vue'
  import RecommendItem from './recommend-item/recommend-item.vue'
  export default {
    components: {
      Panel,
      Slider,
      RecommendItem
    },
    data() {
      return {
        options: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        sliderItems: [
          {
            id: 'https://img12.360buyimg.com/jrpmobile/jfs/t19063/263/1067257870/16513/d7360e92/5ab85da9N8af17d57.jpg?width=335&height=421',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t12637/325/2370404484/14164/523e69a7/5ab85dd5Ndaf12da2.jpg?width=335&height=421',
          },
          {
            id: 'https://img12.360buyimg.com/jrpmobile/jfs/t19063/263/1067257870/16513/d7360e92/5ab85da9N8af17d57.jpg?width=335&height=421',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t19063/263/1067257870/16513/d7360e92/5ab85da9N8af17d57.jpg?width=335&height=421'
          },
          {
            id: 'https://img12.360buyimg.com/jrpmobile/jfs/t17317/55/1066024964/35575/444c5252/5ab85ddeNaa593024.jpg?width=335&height=421',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t17317/55/1066024964/35575/444c5252/5ab85ddeNaa593024.jpg?width=335&height=421'
          },
          {
            id: 'https://img12.360buyimg.com/jrpmobile/jfs/t16600/39/1049384083/42815/1727a973/5ab85debN56037cfc.jpg?width=335&height=421',
            src: 'https://img12.360buyimg.com/jrpmobile/jfs/t16600/39/1049384083/42815/1727a973/5ab85debN56037cfc.jpg?width=335&height=421'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
.recommend-wrapper
  position relative
  .more
    position absolute
    font-size 14px
    color #999
    right 20px
    top 22px
  .recommend-panel
    padding-bottom 30px
</style>