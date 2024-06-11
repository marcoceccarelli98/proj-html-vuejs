<script>
import PagePath from "../components/PagePath.vue"
import EventsComponent from "../components/EventsComponent.vue";
import TutorsComponent from "../components/TutorsComponent.vue";
import AboutCarousel from "../components/AboutCarousel.vue";

export default {
  name: "AppAbout",
  components: {
    PagePath,
    EventsComponent,
    TutorsComponent,
    AboutCarousel
  }
}
</script>

<template>
  <h1>About</h1>

  <PagePath />
  <div class="container">
    <EventsComponent />
  </div>
  <hr>
  <TutorsComponent />
  <AboutCarousel />
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
