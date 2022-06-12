<template>
  <div class="data-table">
    <v-app-bar>
      <v-btn icon to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>{{ $route.params.name }}</v-toolbar-title>
    </v-app-bar>
    <v-data-table
      :headers="headers"
      :items="items"
      :options.sync="options"
      :server-items-length="totalItems"
      :loading="loading"
      class="elevation-1 ma-8"
    ></v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        totalItems: 0,
        items: [],
        loading: true,
        options: {},
        headers: [],
      }
    },
    watch: {
      options: {
        handler () {
          this.getDataFromApi()
        },
        deep: true,
      },
    },
    methods: {
      getDataFromApi () {
        this.loading = true
        console.log(this.options)
        let url = '/data-table/'
                       + this.$route.params.name
                       + '?per_page=' + this.options.itemsPerPage
                       + '&page=' + this.options.page
        if (this.options.sortBy[0]) {
          url += '&sort_by=' + this.options.sortBy[0]
        }
        if (this.options.sortDesc[0]) {
          url += '&desc=' + this.options.sortDesc[0]
        }
        this.$http.get(url)
          .then(response => {
            this.items = response.data.items
            this.totalItems = response.data.totalItems

            if (this.headers !== [])
              this.headers = response.data.headers

            this.loading = false
          })
      },
    },
  }
</script>

<style>
.v-app-bar {
  background-color: var(--tg-theme-button-color) !important;
  color: var(--tg-theme-button-text-color) !important;
}
.v-icon {
  color: var(--tg-theme-button-text-color) !important;
}
.data-table {
  background-color: var(--tg-theme-bg-color) !important;
  color: var(--tg-theme-text-color) !important;
}
</style>
