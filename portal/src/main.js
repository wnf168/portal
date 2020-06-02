// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'
import Router from 'vue-router'
import filters from './utils/filters'
Vue.config.productionTip = false
Vue.use(ElementUI);
import { get, post } from './utils/http';

//路由在同一个地址时报错处理
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//全局定义指令
Object.keys(filters).forEach(k => {
  　　Vue.filter(k, filters[k])
})

Vue.prototype.$get = get;
Vue.prototype.$post = post;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
