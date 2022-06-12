<template>
  <div>
    <v-row no-gutters>
      <v-col
        v-for="card in cards"
        :key="card.name"
      >
        <v-card
          class="ma-4"
        >
          <v-card-title class="d-flex justify-space-between">
            <div>
              <v-icon class="mr-2" large>
                {{ card.icon }}
              </v-icon>
              {{ card.value }}
            </div>
            <router-link
              :to="`/data-table/${card.name}`" 
              v-if="card.has_data_table"
            >
              <v-btn icon><v-icon>mdi-information</v-icon></v-btn>
            </router-link>
          </v-card-title>

          <v-card-text>
            {{ card.name }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Cards',

  props: ['cards'],
}
</script>

<style scoped>
a {
  text-decoration: none !important;
}
.v-card {
  background-color: var(--tg-theme-button-color) !important;
  color: var(--tg-theme-button-text-color) !important;
}
.v-card__text {
  color: var(--tg-theme-button-text-color) !important;
}
.v-select__selections, .theme--light.v-label {
  color: var(--tg-theme-text-color) !important;
}
.theme--light.v-text-field>.v-input__control>.v-input__slot:before {
  border-color: var(--tg-theme-text-color) !important;
}
</style>
