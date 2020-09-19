import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
