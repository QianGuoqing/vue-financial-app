<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
  import Header from './public/header/header'
  export default {
    name: 'App',
    components: {
      'app-header': Header
    }
  }
</script>

<style>

</style>
