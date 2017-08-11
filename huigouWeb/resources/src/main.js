// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import Mint from 'mint-ui'
import '@/assets/javascript/layout'
import 'mint-ui/lib/style.min.css'
import '@/assets/style/newStyle.css'

Vue.use(Resource)
Vue.use(router)
Vue.use(Mint)
Vue.config.productionTip = false

import {hi} from '@/assets/javascript/filter'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  mixins: [hi]
})
