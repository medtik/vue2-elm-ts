import Vue from 'vue';
import App from './app';
import router from './router/router';
import store from './store';
import { Component } from 'vue-property-decorator';

Vue.config.productionTip = false;

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
