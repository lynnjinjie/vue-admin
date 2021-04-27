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

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
