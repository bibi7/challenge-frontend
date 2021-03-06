// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from "../static/js/store";

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.filter('toFixed', function (value) {
  value = Number(value);
  return value.toFixed(2);
});


new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});
