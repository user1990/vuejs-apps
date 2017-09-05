import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/shared/Alert.vue'
import EditMeetupDetailsDialog from './components/meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/meetup/Registration/RegisterDialog.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)

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
      storageBucket: 'gs://annular-text-157306.appspot.com'
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
