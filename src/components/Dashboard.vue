<template>
  <div>
    <Cards :cards="cards" />
    <Charts :charts="charts" />
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'
import Charts from '@/components/Charts.vue'

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
      fetch('http://localhost:8000/data', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({initData: this.auth})
        })
        .then(response => response.json())
        .then(data => {
          data.charts.forEach(chart => {
            let labels = {
              style: {colors: Array(chart.options.xaxis.categories.length)
                                .fill('var(--tg-theme-hint-color)')}
            }
            chart.options.xaxis.labels = labels
            chart.options.yaxis = {labels: labels}
            chart.options.colors = ['var(--tg-theme-link-color)']
          })
          this.cards = data.cards
          this.charts = data.charts
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
</style>
