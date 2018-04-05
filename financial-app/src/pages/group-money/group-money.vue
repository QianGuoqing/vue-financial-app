<template>
  <div class="group-money-wrapper">
    <top></top>
    <in-recommend></in-recommend>
    <more-services></more-services>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Top from './top/top.vue'
  import InRecommend from './in-recommend/in-recommend.vue'
  import MoreServices from './more-services/more-services.vue'
  import AppFooter from '../../public/footer/footer.vue'
  export default {
    components: {
      Top,
      InRecommend,
      MoreServices,
      AppFooter
    }
  }
</script>

<style scoped>
.group-money-wrapper {
  background-color: #f5f5f5;
}
</style>