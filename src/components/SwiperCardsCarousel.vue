<script>
import CourseCard from "./CourseCard.vue";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "SwiperCardsCarousel",
  components: {
    CourseCard,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {};
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },

  props: {
    cards: {
      type: Array,
    },
  },

  methods: {},

  mounted() {},
};
</script>

<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="card in cards">
      <template v-slot:container-start><span>Container start</span></template>
      <CourseCard
        :image="card.image"
        :course="card.course"
        :teacher="card.teacher"
        :description="card.description"
        :price="card.price"
        :tag="card.tag"
      />
      <template v-slot:container-end><span>Container end</span></template>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss"></style>
