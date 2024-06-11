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
      <!-- ICON LIST -->
      <div class="icon-list">
        <div
          v-for="(icon, index) in store.homeIconList"
          class="icon-square"
          :key="'icon' + index"
        >
          <img :src="icon.image" :alt="'image' + index" />
          <p>{{ icon.title }}</p>
        </div>
      </div>
      <!-- /ICON LIST -->
      <!-- THE TRUSTED NAME -->
      <div class="row">
        <div class="col-50"></div>
        <div class="col-50">
          <img src="/public/h5-img-1.jpg" alt="" />
        </div>
      </div>
      <!-- /THE TRUSTED NAME -->
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables.scss" as *;

.icon-list {
  padding: 80px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon-square {
    position: relative;
    font-weight: bold;
    font-size: large;
    height: 200px;
    width: 200px;
    background-color: $bg-home-icon-list;
    &:hover {
      img {
        top: 30%;
        transition: 0.3s;
      }
    }
    img {
      position: absolute;
      left: 50%;
      top: 35%;
      transition: 0.3s;
      transform: translate(-50%, -50%);
      margin-bottom: 10px;
    }
    p {
      line-height: 280px;
      text-align: center;
    }
  }
}
</style>
