import Vue from 'vue';
import Shop from './shop.vue';

new Vue({
  components: {
    Shop,
  },
}).$mount(document.currentScript.previousElementSibling);
