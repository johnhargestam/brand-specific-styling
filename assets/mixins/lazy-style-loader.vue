<script>
export default {
  props: {
    brand: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    ready: false,
  }),
  created() {
    import(`../styles/${this.$options.name}-${this.brand}.css`).then((style) => {
      style.use();
      this.ready = true;
    });
  },
};
</script>
