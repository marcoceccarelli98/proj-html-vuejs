<script>
import PagePath from "../components/PagePath.vue";
import EventsComponent from "../components/EventsComponent.vue";
import TutorsComponent from "../components/TutorsComponent.vue";
import DotsCarousel from "../components/DotsCarousel.vue";
import FaqComponent from "../components/FaqComponent.vue";

export default {
  name: "AppAbout",
  components: {
    PagePath,
    EventsComponent,
    TutorsComponent,
    DotsCarousel,
    FaqComponent,
  },
  data() {
    return {
      title: "About",
    };
  },
};
</script>

<template>
  <PagePath :title="title" />
  <EventsComponent />
  <hr />
  <TutorsComponent />
  <DotsCarousel :bgImage="'/h3-parallax-img-1.png'" />
  <FaqComponent />
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

hr {
  border: none;
  height: 0.5px;
  background-color: lightgray;
}
</style>
