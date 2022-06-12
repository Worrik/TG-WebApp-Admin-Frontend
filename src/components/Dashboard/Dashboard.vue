<template>
  <div class="dashboard">
    <Cards :cards="cards" />
    <Charts :charts="charts" />
  </div>
</template>

<script>
import Cards from './Cards.vue'
import Charts from './Charts.vue'

export default {
  name: "Dashboard",

  components: {
    Cards,
    Charts
  },

  data: () => ({
    charts: [],
    auth: '',
    cards: [],
  }),

  methods: {
    fetchData() {
      this.$http.get('/dashboard/')
        .then(response => {
          response.data.charts.forEach(chart => {
            let labels = {
              style: {colors: Array(chart.options.xaxis.categories.length)
                                .fill('var(--tg-theme-hint-color)')}
            }
            chart.options.xaxis.labels = labels
            chart.options.yaxis = {labels: labels}
            chart.options.colors = ['var(--tg-theme-link-color)']
          })
          this.cards = response.data.cards
          this.charts = response.data.charts
        })
    },
  },

  created() {
    this.auth = window.Telegram?.WebApp.initData
    this.fetchData()
  },
}
</script>

<style>
.banner {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: .5rem;
}
.dashboard, .v-data-table {
  background-color: var(--tg-theme-bg-color) !important;
  color: var(--tg-theme-text-color) !important;
}
.v-select, .v-select__selections {
  color: var(--tg-theme-text-color) !important;
}
</style>
