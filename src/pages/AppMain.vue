<script>
import ArrowsCarousel from "../components/ArrowsCarousel.vue";
import { store } from "../data/store.js";
export default {
  name: "AppMain",
  components: {
    ArrowsCarousel,
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
    <ArrowsCarousel :carousel="store.homeCarousel" />
    <div class="icon-list"></div>
  </main>
</template>

<style scoped></style>
