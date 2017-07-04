import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

// Use vue-resource package
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
