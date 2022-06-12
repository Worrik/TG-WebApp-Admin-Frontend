import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

let telegram_theme = window.Telegram?.WebApp.themeParams

export default new Vuetify({
  theme: { dark: telegram_theme.colorScheme === 'dark' },
});
