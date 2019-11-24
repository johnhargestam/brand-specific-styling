<template >
  <div v-if="this.ready" class="menu-bar">
    <div class="brands">
      <a class="blue" href="/?brand=blue"></a>
      <a class="red" href="/?brand=red"></a>
    </div>
    <div class="links">
      <a :href="`/?brand=${brand}`">home</a>
      <a :href="`/shop?brand=${brand}`">shop</a>
    </div>
  </div>
</template>

<script>
import LazyStyleLoader from '../../mixins/lazy-style-loader.vue';

export default {
  name: 'menuBar',
  mixins: [LazyStyleLoader],
};
</script>
