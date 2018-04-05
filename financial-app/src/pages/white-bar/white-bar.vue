<template>
  <div class="white-bar-wrapper">
    <welfare></welfare>
    <selected-activity></selected-activity>
    <more-activities></more-activities>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Welfare from './welfare/welfare.vue'
  import SelectedActivity from './selected-activity/selected-activity.vue'
  import MoreActivities from './more-services/more-services.vue'
  import AppFooter from '../../public/footer/footer.vue'
  export default {
    components: {
      Welfare,
      SelectedActivity,
      MoreActivities,
      AppFooter
    }
  }
</script>

<style scoped>
.white-bar-wrapper {
  background-color: #f5f5f5;
}
</style>