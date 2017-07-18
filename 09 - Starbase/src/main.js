import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Data from './components/Data.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/data/:type', component: Data }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

