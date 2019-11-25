<template>
  <ul v-if="this.ready"><li>stuff</li><li>things</li><li>junk</li></ul>
</template>
<script>

export default {
  name: 'shopSpecific',
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
