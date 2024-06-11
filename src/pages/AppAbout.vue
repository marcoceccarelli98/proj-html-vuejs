<script>
import PagePath from "../components/PagePath.vue";
import EventsComponent from "../components/EventsComponent.vue";
import TutorsComponent from "../components/TutorsComponent.vue";
import DotsCarousel from "../components/DotsCarousel.vue";

export default {
  name: "AppAbout",
  components: {
    PagePath,
    EventsComponent,
    TutorsComponent,
    DotsCarousel,
  },
};
</script>

<template>
  <h1>About</h1>

  <PagePath />
  <div class="container">
    <EventsComponent />
  </div>
  <hr />
  <TutorsComponent />
  <DotsCarousel />
</template>

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.container {
  width: 90%;
  margin: auto;
}

hr {
  border: none;
  height: 0.5px;
  background-color: lightgray;
}
</style>
