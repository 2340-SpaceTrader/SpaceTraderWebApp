import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import router from './router'

import {store} from './store.js'

Vue.config.productionTip = false


// const fb = require('./firebaseConfig.js')

// let app
// fb.auth.onAuthStateChanged(user => {
//     if (!app) {
//         app = new Vue({
//             el: '#app',
//             router,
//             store,
//             render: h => h(App)
//         })
//     }
// })

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App),
  

}).$mount('#app')

