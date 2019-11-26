<template>
  <main>
    <menu-bar
      :brand="brand"
      :assets="assets"
    />
    <home-specific
      :brand="brand"
      :assets="assets"
    />
  </main>
</template>

<script>
import MenuBar from '../../components/menu-bar/menu-bar.vue';
import HomeSpecific from '../../components/home-specific/home-specific.vue';

export default {
  name: 'home',
  components: {
    MenuBar,
    HomeSpecific,
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
