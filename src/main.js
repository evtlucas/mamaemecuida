import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import myRouter from './router'
import { store } from './store'
import titleMixin from './mixins/title'

const fb = require('./firebaseService')

require('@/assets/css/global.css')

Vue.use(VueRouter)
Vue.mixin(titleMixin)
Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    const router = myRouter.router
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})
