import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

let telegram_theme = window.Telegram?.WebApp.themeParams

export default new Vuetify({
  theme: {
    defaultTheme: 'CustomTheme',
    themes: {
      CustomTheme: {
        colors: Object.keys(telegram_theme).length > 0 ? {
          background: telegram_theme.bg_color,
        } : {
          background: '#F0DECE',
        },
      }
    }
  }
});
