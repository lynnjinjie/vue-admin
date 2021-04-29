import Vue from 'vue'

//reset css
import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// global css
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'
//icons
import '@/icons'
// 路由权限
import './permission.js'

// 多语言
import i18n from '@/lang'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
