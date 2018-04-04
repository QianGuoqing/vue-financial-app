<template>
  <div class="recommend-item-wrapper">
    <h4>{{ title }}</h4>
    <p>
      <span>{{ price }}</span>
      <span>{{ marketPrice }}</span>
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      price: {
        type: String,
        default: ''
      },
      marketPrice: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>