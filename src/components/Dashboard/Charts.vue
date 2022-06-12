<template>
  <div>
    <v-row
      v-for="chart in charts"
      :key="chart.name"
    >
      <v-col>
        <div class="pl-4 banner">{{ chart.name }}</div>
        <apexchart
          height="300"
          :type="chart.type"
          :series="chart.series"
          :options="chart.options"
        ></apexchart>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['charts'],
}
</script>

<style>
.banner {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: .5rem;
  color: var(--tg-theme-text-color) !important;
}
</style>
