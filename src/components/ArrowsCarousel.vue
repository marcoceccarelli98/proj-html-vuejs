<!-- ---------------------------- -->
<!--   TO DO : AGGIUNGERE PROPS   -->
<!--      E RIMUOVERE STORE       -->
<!-- ---------------------------- -->

<script>
export default {
  name: "ArrowsCarousel",
  props: {
    carousel: {
      type: Array,
    },
  },

  data() {
    return {
      frame: 0,
    };
  },

  methods: {
    test() {
      console.log(carousel[0].image);
    },
    prev() {
      this.frame--;
      if (this.frame < 0) {
        this.frame = this.carousel.length - 1;
      }
    },
    next() {
      this.frame++;
      if (this.frame >= this.carousel.length) {
        this.frame = 0;
      }
    },
    autoInc() {
      console.log("AUTO INC");
      const intervalCarousel = setInterval(() => this.next(), 5000); // 5000 ms = 5sec
    },
  },

  created() {
    this.autoInc();
  },

  computed: {
    backgroundStyle() {
      return {
        backgroundImage: "url(" + this.carousel[this.frame].image + ")",
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
      <h1>{{ carousel[this.frame].title }}</h1>
      <!-- TEXT -->
      <p>{{ carousel[this.frame].text }}</p>

      <!-- button -->
      <button v-if="carousel[this.frame].button.btnType === 'button'">
        {{ carousel[this.frame].button.btnStr }}
      </button>

      <div
        v-else="carousel[this.frame].button.btnType === 'icon'"
        class="container-icon"
      >
        <font-awesome-icon
          class="icon"
          :icon="carousel[this.frame].button.btnStr"
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

<!-- `${carousel[this.frame].image}` -->
<style scoped lang="scss">
@use "../styles/partials/variables.scss" as *;
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
  font-size: 18px;
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
// BUTTON
button {
  margin-top: 40px;
  padding: 20px 40px;
  background-color: $primary-color;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  border: none;
}

// ICON
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
