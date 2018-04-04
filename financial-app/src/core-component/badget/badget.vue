<template>
  <span class="badget-wrapper" ref="badget">
    {{ text }}
  </span>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 0
      },
      color: {
        type: String,
        default: '#f04752'
      }
    },
    created() {
      this.$nextTick(() => {
        const badget = this.$refs.badget
        badget.style.color = this.color
        badget.style.border = `1px solid ${this.color}`
        badget.style.fontSize = `${this.size}px`
      })
    }
  }
</script>

<style scoped>
.badget-wrapper {
  padding: 1px 2px;
  font-weight: bold
}
</style>