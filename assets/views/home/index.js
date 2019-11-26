import Vue from 'vue';
import Home from './home.vue';

import '../style/index-blue.css';
import '../style/index-red.css';

new Vue({
  components: {
    Home,
  },
}).$mount(document.currentScript.previousElementSibling);
