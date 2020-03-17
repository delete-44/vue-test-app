// app/javascript/packs/films-list.js
import Vue from 'vue'
import List from '../films-list.vue'
import Table from '../films-table.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#filmList',
    render: h => h(List),
  });

  new Vue({
    el: '#filmTable',
    render: h => h(Table),
  })
});
