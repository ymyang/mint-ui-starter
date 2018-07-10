import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import 'font-awesome/css/font-awesome.css'

import router from './router'
import store from './store'
import * as filters from './filters'
import mixins from './mixins'

import MintUI from 'mint-ui'

// import '../theme/kaisa-default/index.css';
import 'mint-ui/lib/style.css'
import './styles/common.less'

import App from './App.vue'

Vue.use(MintUI)

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// register global mixins.
Vue.mixin(mixins)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})