import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Table from '../films-table.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#filmTable',
    render: h => h(Table),
  })
});
