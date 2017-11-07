import Vue from 'vue'
import App from './App.vue'

import VuePreviewer from './lib/index.js'
Vue.use(VuePreviewer)

new Vue({
  el: '#app',
  render: h => h(App)
})