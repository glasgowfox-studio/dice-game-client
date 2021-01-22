import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: false,
  connection: 'https://dice-game-serv.herokuapp.com/'
}))

window.toastr = require('toastr')

Vue.use(VueToastr2)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
