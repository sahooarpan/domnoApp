import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdDrawer)
Vue.use(MdCard)
Vue.use(VueResource)
Vue.http.options.root='https://domno-d8e2a.firebaseio.com/';
Vue.config.productionTip = false

new Vue({
  render: h => h(App), 
}).$mount('#app')
