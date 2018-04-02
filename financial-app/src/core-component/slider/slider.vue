<template>
  <section>
    <swiper :options="options">
      <swiper-slide v-for="(item, index) in sliderItems" :key="index">
        <img :src="item.src" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
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

<style>
   @import "swiper/dist/css/swiper.css";
   img {
     width: 100%;
   }
</style>
