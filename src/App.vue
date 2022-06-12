<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log(this.$route.path)
  }
}
</script>


<style>
html {
  overflow-x: hidden !important;
  overflow-y: auto !important;
  background-color: var(--tg-theme-bg-color) !important;
}
#app {
  background-color: var(--tg-theme-bg-color) !important;
}
.primary--text {
  color: var(--tg-theme-button-text-color) !important;
}
</style>
