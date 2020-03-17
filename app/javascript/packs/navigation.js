import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import NavigationApp from '../navigation.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(NavigationApp)
  }).$mount()

  document.body.insertBefore(app.$el, document.body.firstChild);
})
