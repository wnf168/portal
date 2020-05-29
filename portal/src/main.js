// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import $ from 'jquery'
Vue.config.productionTip = false
Vue.use(ElementUI);
import { get, post } from './utils/http';

Vue.prototype.$get = get;
Vue.prototype.$post = post;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
