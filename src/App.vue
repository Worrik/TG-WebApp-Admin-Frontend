<template>
  <v-app>
    <v-main>
      <Dashboard />
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',

  components: {
    Dashboard
  }
}
</script>


<style>
html {
  overflow-x: hidden !important;
  overflow-y: auto !important;
}
</style>
