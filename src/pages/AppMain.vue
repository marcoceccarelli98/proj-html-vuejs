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
    <!-- CAROUSEL -->
    <AppCarousel :carousel="store.homeCarousel" />
    <div class="icon-list"></div>
  </main>
</template>

<style scoped></style>
