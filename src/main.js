import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "lib-flexible/flexible"       // 自适配
import FastClick from 'fastclick'    // 移动端30ms延迟

import { Button } from 'vant'
Vue.use(Button)

import axios from 'axios'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

FastClick.attach(document.body);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
