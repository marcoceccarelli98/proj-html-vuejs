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
      if (this.frame < 0) {
        this.frame = store.homeCarousel.length - 1;
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
      <button v-if="store.homeCarousel[this.frame].button.btnType === 'button'">
        {{ store.homeCarousel[this.frame].button.btnStr }}
      </button>

      <div
        v-else="store.homeCarousel[this.frame].button.btnType === 'icon'"
        class="container-icon"
      >
        <font-awesome-icon
          class="icon"
          :icon="store.homeCarousel[this.frame].button.btnStr"
        />
      </div>

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
  font-family: "Open Sans", sans-serif;
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
  top: 400px;
  left: 0;
  margin-left: 50px;
  height: 80px;
  color: white;
}

.right-arrow {
  position: absolute;
  top: 400px;
  right: 0;
  margin-right: 50px;
  height: 80px;
  color: white;
}

.container-icon {
  position: relative;
  height: 90px;
  width: 90px;
  background-color: white;
  border-radius: 50%;
  margin: 30px auto;
}

.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
}
</style>
