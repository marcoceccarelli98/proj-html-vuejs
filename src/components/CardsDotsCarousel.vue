<script>
import CourseCard from "./CourseCard.vue";

export default {
  name: "CardsDotsCarousel",
  components: {
    CourseCard,
  },

  data() {
    return {
      currentActive: 0,
    };
  },

  props: {
    cards: {
      type: Array,
    },
  },

  methods: {
    selectActive(index) {
      this.currentActive = index;
    },

    next() {
      if (this.currentActive !== 2) {
        this.currentActive++;
      } else {
        this.currentActive = 0;
      }
    },

    startCarousel() {
      setInterval(() => {
        this.next();
      }, 3000);
    },
  },

  mounted() {
    this.startCarousel();
  },
};
</script>

<template>
  <div class="dot-carousel">
    <div class="cards-list">
      <CourseCard
        v-for="card in cards"
        :image="card.image"
        :course="card.course"
        :teacher="card.teacher"
        :description="card.description"
        :price="card.price"
        :tag="card.tag"
      />
    </div>
    <!-- DOTS -->
    <div
      v-for="dotIndex in 3"
      :key="dotIndex"
      :class="{ active: currentActive === dotIndex - 1 }"
      @click="selectActive(dotIndex - 1)"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.dot-carousel {
  overflow: hidden;
  .cards-list {
    display: flex;
    transition: transform 0.5s ease;
    gap: 30px;
  }

  .dots div {
    height: 10px;
    width: 10px;
    margin: 0 4px;
    background-color: rgb(142, 160, 199);
    border-radius: 50%;
    display: inline-block;
  }

  .dots div:hover,
  .dots div.active {
    background-color: white;
  }
}
</style>
