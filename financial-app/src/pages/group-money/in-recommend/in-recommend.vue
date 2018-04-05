<template>
  <div class="in-recommend-wrapper">
    <panel title="In货推荐">
      <recommend-item
        :top-image="techImgUrl"
        :items="technologies"></recommend-item>
      <recommend-item
        :top-image="aiImgUrl"
        :items="ais"></recommend-item>
      <recommend-item
        :top-image="foodImageUrl"
        :items="foods"></recommend-item>
    </panel>
  </div>
</template>

<script>
  import Panel from '../../../core-component/panel/panel.vue'
  import RecommendItem from './recommend-item/recommend-item.vue'
  export default {
    components: {
      Panel,
      RecommendItem
    },
    data() {
      return {
        techImgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
        aiImgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
        foodImageUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
        technologies: [
          {
            imgUrl: 'https://img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg',
            title: '电动牙刷',
            price: '79.00',
            percent: '280%'
          },
          {
            imgUrl: 'https://img30.360buyimg.com/cf/s250x250_jfs/t16168/161/1968909024/148686/2a85179/5a7be4bdN01533e62.jpg',
            title: '胶囊咖啡机',
            price: '11.00',
            percent: '126%'
          }
        ],
        ais: [
          {
            imgUrl: 'https://img30.360buyimg.com/cf/s250x250_jfs/t13834/192/2625202072/70435/e5b85a62/5a460eefN94289190.jpg',
            title: '智能后视镜',
            price: '90.00',
            percent: '140%'
          },
          {
            imgUrl: 'https://img30.360buyimg.com/cf/s250x250_jfs/t5827/255/6140287884/111611/498f9693/59683808N9253369f.jpg',
            title: 'GPD口袋电脑',
            price: '75.00',
            percent: '110%'
          }
        ],
        foods: [
          {
            imgUrl: 'https://img30.360buyimg.com/cf/s250x250_jfs/t19087/67/359234055/152112/75036460/5a6ecc5fN565775cd.jpg',
            title: '层层轻薄雪花酥',
            price: '20.50',
            percent: '115%'
          },
          {
            imgUrl: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14506/168/2096353267/153845/5bb0a2e6/5a6e9518N15da6f7c.jpg',
            title: '华礼脸茶',
            price: '44.45',
            percent: '160%'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>