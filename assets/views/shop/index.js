import Vue from 'vue';
import Shop from './shop.vue';

import '../style/index-blue.css';
import '../style/index-red.css';

new Vue({
  components: {
    Shop,
  },
}).$mount(document.currentScript.previousElementSibling);
