import Vue from 'vue'
import Table from '../films-table.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// And import the bootstrap vue package to use
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#filmTable',
    render: h => h(Table),
  })
});
