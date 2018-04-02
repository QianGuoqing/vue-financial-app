<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="common"></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import Header from './public/header/header.vue'
  import TabBar from './public/tab-bar/tab-bar.vue'
  export default {
    name: 'App',
    components: {
      'app-header': Header,
      TabBar
    }
  }
</script>

<style>
* {
  box-sizing: border-box;
}

.common {
  margin-top: 60px;
}
</style>
