<script>
import AppCarousel from "../components/AppCarousel.vue";
import { store } from "../data/store.js";
export default {
  name: "AppMain",
  components: {
    AppCarousel,
  },

  data() {
    return {
      store,
    };
  },
  methods: {},
  created() {},
};
</script>

<template>
  <main>
    <h1>Home</h1>
    <AppCarousel />
  </main>
</template>

<style scoped></style>
