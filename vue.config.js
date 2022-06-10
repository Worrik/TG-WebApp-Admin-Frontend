const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/web/',
  transpileDependencies: [
    'vuetify'
  ]
})
