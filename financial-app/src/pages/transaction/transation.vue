<template>
  <div class="transaction-wrapper">
    <transaction-slider></transaction-slider>
    <coupen></coupen>
    <selected></selected>
    <transaction-selected></transaction-selected>
    <app-footer :image-url="imgUrl"></app-footer>
  </div>
</template>

<script>
  import TransactionSlider from './transaction-slider/transaction-slider.vue'
  import Coupen from './coupen/coupen.vue'
  import Selected from '../home/selected/selected.vue'
  import TransactionSelected from './transaction-selected/transaction-selected.vue'
  import AppFooter from '../../public/footer/footer.vue'
  export default {
    components: {
      TransactionSlider,
      Coupen,
      Selected,
      TransactionSelected,
      AppFooter
    },
    data() {
      return {
        imgUrl: '//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120'
      }
    },
  }
</script>

<style scoped>
.transaction-wrapper {
  background-color: #f5f5f5;
  margin-bottom: 55px;
}
</style>