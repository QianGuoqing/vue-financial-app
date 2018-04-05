<template>
  <div class="home-wrapper">
    <home-slider></home-slider>
    <novice></novice>
    <borrow></borrow>
    <selected></selected>
    <recommend></recommend>
    <service></service>
    <app-footer></app-footer>
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