import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5F429A',
        secondary: '#F68B1F',
        accent: '#1d2923',
        error: '#b71c1c'
      }
    },
    options: {
      customProperties: true // enables css variable in components' <style>
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
