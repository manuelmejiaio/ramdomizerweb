import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

import DefaultLayout from './layouts/Default.vue'
import NoHeaderNoFooterLayout from './layouts/NoHeaderNoFooter.vue'

Vue.component('default-layout', DefaultLayout)
Vue.component('no-header-no-footer-layout', NoHeaderNoFooterLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
