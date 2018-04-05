<template>
  <div class="more-services-wrapper">
    <panel title="更多服务">
      <div class="services-list">
        <div class="services-item" v-for="service in services" :key="service.imgUrl">
          <img :src="service.imgUrl" alt="" class="service-image">
          <span class="service-title">{{ service.title }}</span>
        </div>
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
        services: [
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135',
            title: '小白卡'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135',
            title: '白条商城'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135',
            title: '消费分期'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120',
            title: '借钱'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
            title: '白条提额'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135',
            title: '白条闪付'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135',
            title: '小白会玩'
          },
          {
            imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135',
            title: '钢镚'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .services-list
    display flex
    justify-content space-around
    flex-flow wrap
    text-align center
    padding-bottom 15px
    .services-item
      width 25%
      padding 5px
      .service-image
        width 45px
        height 45px
      .service-title
        display block
        font-size 13px
        color #666
        margin-top 4px
</style>