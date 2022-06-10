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
          <v-card-title>
            <v-icon class="mr-2" large>
              {{ card.icon }}
            </v-icon>
            {{ card.value }}
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
.v-card, .v-btn {
  background-color: var(--tg-theme-button-color) !important;
  color: var(--tg-theme-button-text-color) !important;
}
</style>
