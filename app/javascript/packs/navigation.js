import Vue from 'vue'
import NavigationApp from '../navigation.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(NavigationApp)
  }).$mount()

  document.body.insertBefore(app.$el, document.body.firstChild);
})
