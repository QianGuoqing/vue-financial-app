<template>
  <div class="more-services-wrapper">
    <panel title="更多福利">
      <div class="services-list">
        <img :src="image" v-for="image in images" :key="image" class="services-list-image" alt="">
      </div>
    </panel>
  </div>
</template>

<script>
  import Panel from '../../../core-component/panel/panel.vue'
  export default {
    components: {
      Panel
    },
    data() {
      return {
        images: [
          'https://img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330',
          'https://img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330',
          'https://img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330'
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .services-list
    display flex
    justify-content space-around
    padding-bottom 20px
    .services-list-image
      display block
      width 125px
      height 165px
</style>