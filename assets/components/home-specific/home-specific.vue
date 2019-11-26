<template>
  <div class="home-specific">
    <p>Welcome home!</p>
    <link rel="stylesheet" text="text/css" :href="assets[`home-${this.brand}.css`]">
  </div>
</template>

<script>
import './home-red.css';
import './home-blue.css';

export default {
  name: 'homeSpecific',
  props: {
    brand: {
      type: String,
      required: true,
    },
    assets: {
      type: Object,
      required: true,
    },
  },
};
</script>
