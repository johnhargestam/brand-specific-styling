import Vue from 'vue';
import Home from './home.vue';

new Vue({
  components: {
    Home,
  },
}).$mount(document.currentScript.previousElementSibling);
