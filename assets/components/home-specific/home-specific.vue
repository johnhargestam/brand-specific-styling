<template>
  <div v-if="this.ready" class="home-specific">
    <p>Welcome home!</p>
  </div>
</template>

<script>
export default {
  name: 'homeSpecific',
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
