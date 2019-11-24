<template>
  <main>
    <menu-bar
      :brand="brand"
    />
    <home-specific
      :brand="brand"
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
  },
};
</script>
