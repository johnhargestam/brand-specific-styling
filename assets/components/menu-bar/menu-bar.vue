<template >
  <div class="menu-bar">
    <div class="brands">
      <a class="blue" href="/?brand=blue"></a>
      <a class="red" href="/?brand=red"></a>
    </div>
    <div class="links">
      <a :href="`/?brand=${brand}`">home</a>
      <a :href="`/shop?brand=${brand}`">shop</a>
    </div>
    <link rel="stylesheet" text="text/css" :href="assets[`menu-${this.brand}.css`]">
  </div>
</template>

<script>
import './menu-red.css';
import './menu-blue.css';

export default {
  name: 'menuBar',
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
