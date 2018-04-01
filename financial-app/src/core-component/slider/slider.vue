<template>
  <section>
    <swiper>
      <swiper-slide v-for="(item, index) in sliderItems" :key="index">
        <!--待定-->
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination"></div>
    </swiper>
  </section>
</template>

<script>
  import { swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      options: {
        type: Object,
        default() {
          return {
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination'
            }
          }
        }
      },
      sliderItems: {
        type: Array,
        default: []
      }
    },
  }
</script>

<style scoped>
  @import "~swiper/dist/css/swiper.css";
</style>
