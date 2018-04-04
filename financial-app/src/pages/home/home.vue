<template>
  <div class="home-wrapper">
    <home-slider></home-slider>
    <novice></novice>
    <borrow></borrow>
    <selected></selected>
    <recommend></recommend>
    <service></service>
    <app-footer :image-url="imgUrl"></app-footer>
    <BackTop class="to-top"></BackTop>
  </div>
</template>

<script>
  import HomeSlider from './home-slider/home-slider.vue'
  import Novice from './novice/novice.vue'
  import Borrow from './borrow/borrow.vue'
  import Selected from './selected/selected.vue'
  import Recommend from './recommend/recommend.vue'
  import Service from './service/service.vue'
  import AppFooter from '../../public/footer/footer.vue'
  export default {
    components: {
      HomeSlider,
      Novice,
      Borrow,
      Selected,
      Recommend,
      Service,
      AppFooter
    },
    data() {
      return {
        imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252'
      }
    },
  }
</script>

<style scoped lang="stylus">
.home-wrapper
  background-color #f5f5f5
  margin-bottom 55px
  // height 100%
  .to-top
    border-radius 50%
    margin-bottom 50px
</style>