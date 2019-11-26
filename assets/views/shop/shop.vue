<template>
  <main>
    <menu-bar
      :brand="brand"
      :assets="assets"
    />
    <shop-specific
      :brand="brand"
      :assets="assets"
    />
  </main>
</template>

<script>
import MenuBar from '../../components/menu-bar/menu-bar.vue';
import ShopSpecific from '../../components/shop-specific/shop-specific.vue';

export default {
  name: 'shop',
  components: {
    MenuBar,
    ShopSpecific,
  },
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
