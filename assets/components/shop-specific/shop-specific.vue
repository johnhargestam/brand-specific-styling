<template>
  <div>
    <ul>
      <li>stuff</li>
      <li>things</li
      ><li>junk</li>
    </ul>
    <link rel="stylesheet" text="text/css" :href="assets[`shop-${this.brand}.css`]">
  </div>
</template>
<script>
import './shop-red.css';
import './shop-blue.css';

export default {
  name: 'shopSpecific',
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
