<template>
  <main>
    <menu-bar
      :brand="brand"
    />
    <shop-specific
      :brand="brand"
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
  },
};
</script>
