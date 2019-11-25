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

export default {
  name: 'menuBar',
  props: {
    brand: String,
  },
  mounted() {
    import(`./${this.brand}.css`).then(() => {
      this.ready = true;
    });
  }
};
</script>
