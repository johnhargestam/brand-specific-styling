<template>
  <ul v-if="this.ready"><li>stuff</li><li>things</li><li>junk</li></ul>
</template>
<script>
import LazyStyleLoader from '../../mixins/lazy-style-loader.vue';

export default {
  name: 'shopSpecific',
  mixins: [LazyStyleLoader],
};
</script>
