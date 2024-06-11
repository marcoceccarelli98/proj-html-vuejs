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

      <section class="icon-list">
        <div
          v-for="(icon, index) in store.homeIconList"
          class="icon-square"
          :key="'icon' + index"
        >
          <img :src="icon.image" :alt="'image' + index" />
          <p>{{ icon.title }}</p>
        </div>
      </section>
      <!-- /ICON LIST -->
      <!-- THE TRUSTED NAME -->
      <section class="trusted-name row">
        <div class="col-40">
          <h2>The Trusted Name for In-Home Tutoring.</h2>
          <p>
            Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
            lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed
            odio sit amet nibh vulputate cursus mauris.
          </p>
          <router-link :to="{ name: 'about' }">learn more</router-link>
        </div>
        <div class="col-60">
          <img src="/public/h5-img-1.jpg" alt="" />
        </div>
      </section>
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

.trusted-name {
  margin-bottom: 100px;
  display: flex;
  align-self: flex-end;
  h2 {
    margin-top: 100px;
    margin-bottom: 20px;
    font-size: 40px;
  }
  p {
    margin-bottom: 20px;
  }
  a {
    font-weight: bold;
    text-transform: uppercase;
    color: $primary-color;
  }
  img {
    width: 100%;
  }
}
</style>
