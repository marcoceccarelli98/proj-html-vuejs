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
    <div class="container-70">
      <div class="icon-list">
        <div
          v-for="(icon, index) in store.homeIconList"
          class="icon-square"
          :key="'icon' + index"
        >
          <img :src="icon.image" :alt="'image' + index" />
          <span>{{ icon.title }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables.scss" as *;

.icon-list {
  padding: 80px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .icon-square {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    // padding: 40px;
    background-color: $bg-home-icon-list;
    img {
      margin-bottom: 10px;
    }
  }
}
</style>
