<!-- ---------------------------- -->
<!--   TO DO : AGGIUNGERE PROPS   -->
<!--      E RIMUOVERE STORE       -->
<!-- ---------------------------- -->

<script>
import { store } from "../data/store.js";
export default {
  name: "AppCarousel",
  props: ["image", "title", "text", "button"],

  data() {
    return {
      store,
      frame: 0,
    };
  },
  methods: {
    test() {
      console.log(store.homeCarousel[0].image);
    },
    prev() {
      this.frame--;
      if (this.frame <= 0) {
        this.frame = store.homeCarousel.length;
      }
    },
    next() {
      this.frame++;
      if (this.frame >= store.homeCarousel.length) {
        this.frame = 0;
      }
    },
  },
  created() {},
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: "url(" + store.homeCarousel[this.frame].image + ")",
      };
    },
  },
};
</script>

<template>
  <div class="bgImage" :style="backgroundStyle">
    <!-- <button @click="test">TEST</button> -->
    <div class="content">
      <!-- TITLE -->
      <h1>{{ store.homeCarousel[this.frame].title }}</h1>
      <!-- TEXT -->
      <p>{{ store.homeCarousel[this.frame].text }}</p>

      <!-- button -->
      <button>{{ store.homeCarousel[this.frame].button.btnStr }}</button>

      <!-- CAROUSEL NAVIGATION -->
      <a @click.prevent="prev">
        <font-awesome-icon class="left-arrow" :icon="['fas', 'chevron-left']" />
      </a>
      <a @click.prevent="next">
        <font-awesome-icon
          class="right-arrow"
          :icon="['fas', 'chevron-right']"
        />
      </a>
    </div>
  </div>
</template>

<!-- `${store.homeCarousel[this.frame].image}` -->
<style scoped lang="scss">
.bgImage {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 95vh;
  width: 100%;
}

.content {
  text-align: center;
  max-width: 800px;
  line-height: 30px;
}

h1 {
  color: white;
  font-size: 70px;
  margin-bottom: 40px;
}

p {
  color: white;
  font-size: 20px;
}

.left-arrow {
  position: absolute;
  top: 50;
  left: 0;
  margin-left: 50px;
  height: 80px;
  color: white;
}

.right-arrow {
  position: absolute;
  top: 50;
  right: 0;
  margin-right: 50px;
  height: 80px;
  color: white;
}
</style>
