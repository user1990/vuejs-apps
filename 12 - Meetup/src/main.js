import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDi_bDvfpUxs811I5BJp9S20FT62rcRbL0',
      authDomain: 'annular-text-157306.firebaseapp.com',
      databaseURL: 'https://annular-text-157306.firebaseio.com',
      projectId: 'annular-text-157306',
      storageBucket: 'annular-text-157306.appspot.com'
    })
    this.$store.dispatch('loadMeetups')
  }
})
