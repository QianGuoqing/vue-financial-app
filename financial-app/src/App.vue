<template>
  <div id="app">
    <header>
      <app-header></app-header>
    </header>
    <router-view></router-view>
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

</style>
