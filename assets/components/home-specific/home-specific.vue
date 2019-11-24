<template>
  <div v-if="this.ready" class="home-specific">
    <p>Welcome home!</p>
  </div>
</template>

<script>
import LazyStyleLoader from '../../mixins/lazy-style-loader.vue';

export default {
  name: 'homeSpecific',
  mixins: [LazyStyleLoader],
};
</script>
