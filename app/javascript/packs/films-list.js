// app/javascript/packs/films-list.js
import Vue from 'vue'
import List from '../films-list.vue'
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#filmList',
    render: h => h(List),
  });
});
